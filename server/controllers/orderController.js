import Cart from "../models/cartModel.js"
import Coupan from "../models/couponModel.js"
import Order from "../models/orderModel.js"
import Product from "../models/productModel.js"
const placeOrder = async (req, res) => {
    const userId = req.user._id

    const { coupon } = req.body
    let couponCode = await Coupan.findOne({ couponCode: coupon })

    if (!couponCode) {
        res.status(404)
        throw new Error("Inavalid Coupon");
    }


    const cart = await Cart.findOne({ user: userId })
        .populate('products.product');

    if (!cart) {
        res.status(404)
        throw new Error("Cart not found")
    }

    let totalBill = cart.products.reduce((acc, product) => {
        return acc + product.product.salePrice * product.qty
    }, 0)

    totalBill = totalBill - totalBill * couponCode.couponDiscount / 100


    const order = {
        user: userId,
        cart: cart,
        TotalBillAmount: totalBill,
        isDiscounted: couponCode ? true : false,
        coupon: couponCode._id

    }
    let newOrder = await Order.create(order)
    
    if (!order) {
        res.status(409)
        throw new Error("Order Not placedd");
        
    }
    res.status(201)
    res.json(newOrder)
}
const cancelOrder = async (req, res) => {
    const orderId = req.params.oid

    const myOrder = await Order.findById(orderId).populate('cart').populate('user')

    if (!myOrder) {
        res.status(404)
        throw new Error("Order Not Found");

    }
    if (myOrder.status === "placed") {
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { status: "cancelled" }, { new: true })
        if (!updatedOrder) {
            res.status(409)
            throw new Error("Order Can't Be cancelled");
            
        }
        res.status(200).json({
            message: "Order Cancelled",
            updatedOrder
        })
    } else {
        res.status(409)
        throw new Error("Order Can't Be cancelled");
    }
}

const getOrders = async (req, res) => {

    const userId = req.user._id
    
    const myOrders = await Order.find({ user: userId }).populate('cart').populate('user')
    
    if (!myOrders) {
        res.status(404)
        throw new Error("Orders Not Found");
        
    }

    res.status(200).json(myOrders)
    
}
const getOrder = async (req, res) => {
    const orderId = req.params.oid

    const myOrder = await Order.findById(orderId).populate('cart').populate('user')

    if (!myOrder) {
        res.status(404)
        throw new Error("Order Not Found");

    }

    const cart = await Cart.findById(myOrder.cart._id)

    await cart.populate("products.product")
    
    console.log(cart)

    res.status(200).json({
        myOrder,cart
    })
}


const orderController = { placeOrder, cancelOrder, getOrders, getOrder }




export default orderController