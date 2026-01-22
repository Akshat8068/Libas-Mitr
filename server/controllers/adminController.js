import fs from "node:fs"
import User from "../models/userModel.js"
import Order from "../models/orderModel.js"
import Review from "../models/reviewModel.js"
import Product from "../models/productModel.js"
import Coupan from "../models/couponModel.js"
import uploaderToCloudinary from "../middleware/cloudinaryMiddleware.js"

const getAllUsers = async (req, res) => {
    let users = await User.find()
    if (!users) {
        res.status(200)
        throw new Error("No users Found");
    } else {
        res.status(200).json(users)
    }
}

const updateUser = async (req, res) => {
    let userId = req.params.uid
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true })
    if (!updatedUser) {
        res.status(409)
        throw new Error("User Not Updated");
    }
    res.status(201).json(updatedUser)
}

const getAdminProduct = async (req, res) => {
    let product = await Product.findById(req.params.pid)
    if (!product) {
        res.status(404)
        throw new Error("No Product Found");
    } else {
        res.status(200).json(product)
    }
}

const addProducts = async (req, res) => {
    try {
        // Parse JSON strings from multipart form data
        const { name, description, brand, originalPrice, salePrice } = req.body
        const categories = req.body.categories ? JSON.parse(req.body.categories) : null;
        const colors = req.body.colors ? JSON.parse(req.body.colors) : null;

        // ✅ FIXED: Added return statement to stop execution after validation error
        if (!name || !description || !brand || !categories || !originalPrice || !salePrice || !colors) {
            return res.status(409).json({
                message: "Please fill all details including colors!",
            });
        }

        const processedColors = [];

        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];

            // Upload mainImage if provided
            let mainImagePath = "";
            if (req.files?.[`mainImage_${i}`]?.[0]) {
                const uploadResult = await uploaderToCloudinary(req.files[`mainImage_${i}`][0].path);
                mainImagePath = uploadResult.secure_url;
                // ✅ Clean up uploaded file after successful upload
                if (fs.existsSync(req.files[`mainImage_${i}`][0].path)) {
                    fs.unlinkSync(req.files[`mainImage_${i}`][0].path);
                }
            }

            // Upload catalog/sample images
            const imagesArray = [];
            if (req.files?.[`images_${i}`]) {
                for (let img of req.files[`images_${i}`]) {
                    const uploadResult = await uploaderToCloudinary(img.path);
                    imagesArray.push(uploadResult.secure_url);
                    // ✅ Clean up uploaded file after successful upload
                    if (fs.existsSync(img.path)) {
                        fs.unlinkSync(img.path);
                    }
                }
            }

            processedColors.push({
                colorName: color.colorName,
                mainImage: mainImagePath,
                images: imagesArray,
                sizes: color.sizes, // array of { size, stock }
            });
        }

        const product = await Product.create({
            name,
            description,
            brand,
            categories,
            originalPrice: Number(originalPrice),
            salePrice: Number(salePrice),
            colors: processedColors,
        });
        res.status(201).json(product);
    } catch (error) {
        // ✅ Clean up any uploaded files in case of error
        if (req.files) {
            Object.values(req.files).flat().forEach(file => {
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
            });
        }
        res.status(500).json({ message: "Product not created", error: error.message });
    }
}

const updateProducts = async (req, res) => {
    try {

        // Find existing product
        const product = await Product.findById(req.params.pid);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Parse JSON strings from multipart form data
        const { name, description, originalPrice, salePrice, brand } = req.body;
        const categories = req.body.categories ? JSON.parse(req.body.categories) : null;
        const colors = req.body.colors ? JSON.parse(req.body.colors) : null;


        // Prepare update object with basic fields
        const updateData = {};

        if (name) updateData.name = name;
        if (brand) updateData.brand = brand
        if (description) updateData.description = description;
        if (categories) updateData.categories = categories;
        if (originalPrice) updateData.originalPrice = Number(originalPrice);
        if (salePrice) updateData.salePrice = Number(salePrice);

        // Process colors if provided
        if (colors && colors.length > 0) {
            const processedColors = [];

            for (let i = 0; i < colors.length; i++) {
                const color = colors[i];

                // Find matching existing color by colorName or index
                const existingColor = product.colors.find(c => c.colorName === color.colorName)
                    || product.colors[i]
                    || {};

                // Upload new mainImage if provided, otherwise keep existing
                let mainImagePath = existingColor.mainImage || "";
                if (req.files?.[`mainImage_${i}`]?.[0]) {
                    const uploadResult = await uploaderToCloudinary(req.files[`mainImage_${i}`][0].path);
                    fs.unlinkSync(req.files[`mainImage_${i}`][0].path);
                    mainImagePath = uploadResult.secure_url;
                }

                // Upload new catalog images if provided, otherwise keep existing
                let imagesArray = existingColor.images || [];
                if (req.files?.[`images_${i}`]) {
                    imagesArray = []; // Replace with new images
                    for (let img of req.files[`images_${i}`]) {
                        const uploadResult = await uploaderToCloudinary(img.path);
                        fs.unlinkSync(img.path);
                        imagesArray.push(uploadResult.secure_url);
                    }
                }

                processedColors.push({
                    colorName: color.colorName,
                    mainImage: mainImagePath,  // Keeps existing if no new file
                    images: imagesArray,        // Keeps existing if no new files
                    sizes: color.sizes,         // Updates sizes/stock
                    _id: existingColor._id      // Preserves _id
                });
            }

            updateData.colors = processedColors;
        }


        // Update product
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.pid,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not updated" });
        }

        res.status(200).json(updatedProduct);

    } catch (error) {
        // ✅ Clean up any uploaded files in case of error
        if (req.files) {
            Object.values(req.files).flat().forEach(file => {
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
            });
        }
        res.status(500).json({ message: "Product not updated", error: error.message });
    }
}

const updateOrder = async (req, res) => {
    const orderId = req.params.oid
    const { status } = req.body
    const myOrder = await Order.findById(orderId).populate('products.product').populate('user')

    if (!myOrder) {
        res.status(404)
        throw new Error("Order Not Found");
    }

    const updateStock = async (productId, updatedStock) => {
        await Product.findByIdAndUpdate(productId, { stock: updatedStock })
    }

    let updatedOrder
    if (status === "dispatched") {
        // update stock
        myOrder.products.forEach((item) => {
            let productId = item.product._id
            let productStock = item.product.stock
            updateStock(productId, productStock - item.qty)
        })

        updatedOrder = await Order.findByIdAndUpdate(orderId, { status: "dispatched" }, { new: true }).populate("products.product").populate('coupon')

    } else if (status === "delivered") {
        updatedOrder = await Order.findByIdAndUpdate(orderId, { status: "delivered" }, { new: true })

    } else {
        if (myOrder.status === "dispatched") {
            res.status(409)
            throw new Error("Order already Dispatched");
        } else {
            updatedOrder = await Order.findByIdAndUpdate(orderId, { status: "cancelled" }, { new: true })
        }
    }

    if (!updatedOrder) {
        res.status(409)
        throw new Error("Order Can't Be cancelled");
    }
    res.status(200).json(updatedOrder)
}

const getAllOrders = async (req, res) => {
    let orders = await Order.find()
        .populate("products.product")
        .populate("user")

    if (!orders || orders.length === 0) {
        res.status(404)
        throw new Error("No Orders Found");
    } else {
        res.status(200).json(orders)
    }
}

const getSingleOrder = async (req, res) => {
    const orderId = req.params.oid

    const myOrder = await Order.findById(orderId)
        .populate('products')
        .populate('user')

    if (!myOrder) {
        res.status(404)
        throw new Error("Order Not Found");
    }

    res.status(200).json(myOrder)
}

const getAllReview = async (req, res) => {
    let reviews = await Review.find().populate('product').populate('user')
    if (!reviews) {
        res.status(200)
        throw new Error("No Reviews Here");
    } else {
        res.status(200).json(reviews)
    }
}

const createCoupon = async (req, res) => {
    const { couponCode, couponDiscount } = req.body
    if (!couponCode) {
        res.status(409)
        throw new Error("Please Type Coupon")
    }
    const newCoupon = await Coupan.create({ couponCode: couponCode.toUpperCase(), couponDiscount })

    if (!newCoupon) {
        res.status(409)
        throw new Error("Coupon Not created")
    }
    res.status(201).json(newCoupon)
}

const allCoupon = async (req, res) => {
    let coupons = await Coupan.find()
    if (!coupons) {
        res.status(200)
        throw new Error("No Reviews Here");
    } else {
        res.status(200).json(coupons)
    }
}

const adminController = {
    getAllUsers,
    updateUser,
    getAdminProduct,
    addProducts,
    updateProducts,
    updateOrder,
    getAllOrders,
    getSingleOrder,
    getAllReview,
    createCoupon,
    allCoupon
}

export default adminController