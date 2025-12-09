import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },
    TotalBillAmount: {
        type: Number,
        required:true
    },
    isDiscounted: {
        type: Boolean,
        required: true,
        default:false
    },
    coupon: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Coupon"
    },
    status: {
        type: String,
        enum: ["placed","dispatched","cancelled","delivered"],
        default:"placed",
        required:true
    }
}, {
    timestamps:true
})

const Order = mongoose.model("Order", orderSchema)

export default Order