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

const addProducts = async (req, res) => {


    try {
        const { name, description, category, originalPrice, salePrice, stock, size } = req.body
        console.log(req.body)
        if (!name || !description || !category || !originalPrice || !salePrice || !stock || !size) {
            res.status(409)
            throw new Error("Please Fill all detils");

        }

        // Upload to cloudinary

        let imagePath = await uploaderToCloudinary(req.file.path)

        // remove from our server 
        fs.unlinkSync(req.file.path)
        const product = await Product.create({
            name,
            description,
            originalPrice,
            salePrice,
            category,
            stock,
            size,
            image: imagePath.secure_url

        })

        if (!product) {
            res.status(409)
            throw new Error("Product Not created");
        } else {
            res.status(201).json(product)
        }
    } catch (error) {
        fs.unlinkSync(req?.file?.path)
        res.status(500)
        throw new Error("Product not created");


    }
}
const updateProducts = async (req, res) => {
    let product = await Product.findById(req.params.pid)

    if (!product) {
        res.status(404)
        throw new Error("Product not found");
    }

    const updateProduct = await Product.findByIdAndUpdate(req.params.pid, req.body, { new: true })
    if (!updateProduct) {
        res.status(404)
        throw new Error("Product not Updated");
    } else {
        res.status(201).json(updateProduct)
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
    if (myOrder.status === "dispatched") {
        res.status(409)
        throw new Error("Order already Dispatched");
        
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

    } else {
        updatedOrder = await Order.findByIdAndUpdate(orderId, { status: status === "delivered" ? "delivered" : "cancelled" }, { new: true })


    }
    if (!updatedOrder) {
        res.status(409)
        throw new Error("Order Can't Be cancelled");
    }
    res.status(200).json(updatedOrder)


}

const getAllOrders = async (req, res) => {
    let orders = await Order.find().populate("products")
    if (!orders) {
        res.status(200)
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
    let reviews = await Review.find()
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


const adminController = { getAllUsers, addProducts, updateProducts, updateOrder, getAllOrders, getSingleOrder, getAllReview, createCoupon, allCoupon }


export default adminController