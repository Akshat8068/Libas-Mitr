import Cart from "../models/cartModel.js"
import Product from "../models/productModel.js"

const getCart = async (req, res) => {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId })
        .populate('products.product');

    if (!cart) {
        return res.status(200).json({
            products: []
        });
    }

    res.status(200).json(cart);
};

const addCart = async (req, res) => {
    const { productId, colorName, size, qty = 1 } = req.body;
    const userId = req.user.id;

    // Validate required fields
    if (!productId || !colorName || !size) {
        res.status(400);
        throw new Error("Product ID, color, and size are required");
    }

    // Validate product exists
    const product = await Product.findById(productId);
    if (!product) {
        res.status(404);
        throw new Error("Product Not Found!");
    }

    // Find the selected color
    const selectedColor = product.colors.find(c => c.colorName === colorName);
    if (!selectedColor) {
        res.status(400);
        throw new Error("Selected color not found");
    }

    // Find the selected size and check stock
    const selectedSize = selectedColor.sizes.find(s => s.size === size);
    if (!selectedSize) {
        res.status(400);
        throw new Error("Selected size not found");
    }

    if (selectedSize.stock < qty) {
        res.status(400);
        throw new Error(`Insufficient stock. Only ${selectedSize.stock} available`);
    }

    // Find user's cart
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
        // Create new cart if doesn't exist
        cart = new Cart({
            user: userId,
            products: [{
                product: productId,
                colorName: colorName,
                colorMainImage: selectedColor.mainImage,
                size: size,
                qty: qty
            }]
        });
    } else {
        // Check if exact same product + color + size exists
        const productIndex = cart.products.findIndex(
            (item) =>
                item.product.toString() === productId &&
                item.colorName === colorName &&
                item.size === size
        );

        if (productIndex > -1) {
            // Update quantity if same product+color+size exists
            const newQty = cart.products[productIndex].qty + parseInt(qty);

            // Check total quantity against stock
            if (newQty > selectedSize.stock) {
                res.status(400);
                throw new Error(`Cannot add more. Only ${selectedSize.stock} available`);
            }

            cart.products[productIndex].qty = newQty;
        } else {
            // Add new product variant to cart
            cart.products.push({
                product: productId,
                colorName: colorName,
                colorMainImage: selectedColor.mainImage,
                size: size,
                qty: qty
            });
        }
    }

    await cart.save();

    // Populate product details for response
    await cart.populate('products.product');

    res.status(200).json(cart);
};

const updateCart = async (req, res) => {
    const { productId, colorName, size, qty } = req.body;
    const userId = req.user._id;

    // Validate quantity
    if (qty < 1) {
        res.status(400);
        throw new Error("Quantity must be at least 1");
    }

    // Find cart
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        res.status(404);
        throw new Error("Cart not found");
    }

    // Find specific product variant in cart
    const productIndex = cart.products.findIndex(
        (item) =>
            item.product.toString() === productId &&
            item.colorName === colorName &&
            item.size === size
    );

    if (productIndex === -1) {
        res.status(404);
        throw new Error("Product variant not found in cart");
    }

    // Check stock availability
    const product = await Product.findById(productId);
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }

    const selectedColor = product.colors.find(c => c.colorName === colorName);
    const selectedSize = selectedColor?.sizes.find(s => s.size === size);

    if (!selectedSize || qty > selectedSize.stock) {
        res.status(400);
        throw new Error(`Quantity exceeds available stock (${selectedSize?.stock || 0})`);
    }

    // Update quantity
    cart.products[productIndex].qty = qty;

    await cart.save();
    await cart.populate('products.product');

    res.status(200).json(cart);
};

// ✅ FIXED: Now removes only specific variant (product + color + size)
const removeCart = async (req, res) => {
    const { productId } = req.params;
    const { colorName, size } = req.query; // Get from query params
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        res.status(404);
        throw new Error("Cart not found");
    }

    // Filter out the SPECIFIC product variant (product + color + size)
    cart.products = cart.products.filter(
        (item) => !(
            item.product.toString() === productId &&
            item.colorName === colorName &&
            item.size === size
        )
    );

    await cart.save();
    await cart.populate('products.product');

    res.status(200).json(cart);
};

const clearCart = async (req, res) => {
    const userId = req.user._id;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
        res.status(404);
        throw new Error("Cart Not Found!");
    }

    cart.products = [];
    await cart.save();

    res.status(200).json(cart);
};

const cartController = { getCart, addCart, updateCart, removeCart, clearCart };

export default cartController;