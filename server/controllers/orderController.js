import Cart from "../models/cartModel.js"
import Coupan from "../models/couponModel.js"
import Order from "../models/orderModel.js"
import Product from "../models/productModel.js"
const placeOrder = async (req, res) => {
    const userId = req.user._id

    const { shippingAddress } = req.body
    
    if (!shippingAddress) {
        res.status(409)
        throw new Error("Please Enter Shipping Address");
        
    }
    let couponCode = await Coupan.findOne({ couponCode: req.body?.coupon })

    // if (!couponCode) {
    //     res.status(404)
    //     throw new Error("Inavalid Coupon");
    // }


    const cart = await Cart.findOne({ user: userId })
        .populate('products.product');

    if (!cart) {
        res.status(404)
        throw new Error("Cart not found")
    }

    let totalBill = cart.products.reduce((acc, product) => {
        return acc + product.product.salePrice * product.qty
    }, 0)

    totalBill = couponCode ? totalBill - totalBill * couponCode.couponDiscount / 100 : totalBill


    const order = new Order(
        {
            user: userId,
            products: cart.products,
            TotalBillAmount: totalBill,
            isDiscounted: couponCode ? true : false,
            coupon: couponCode ? couponCode._id : null,
            shippingAddress:shippingAddress

        }
    )
    await order.save()

    
    if (!order) {
        res.status(409)
        throw new Error("Order Not placedd");
        
    }
    res.status(201)
    res.json(order)
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
    
    const myOrders = await Order.find({ user: userId }).populate('products.product').populate('user')
    
    if (!myOrders) {
        res.status(404)
        throw new Error("Orders Not Found");
        
    }

    res.status(200).json(myOrders)
    
}
const getOrder = async (req, res) => {
    const orderId = req.params.oid

    const myOrder = await Order.findById(orderId).populate('products.product').populate('user')

    if (!myOrder) {
        res.status(404)
        throw new Error("Order Not Found");

    }

    

    res.status(200).json({
        myOrder
    })
}


const orderController = { placeOrder, cancelOrder, getOrders, getOrder }




export default orderController