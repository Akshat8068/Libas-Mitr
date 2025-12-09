import Coupan from "../models/couponModel.js";

const applyCoupon = async (req, res) => {

    
    if (!req.body.couponCode) {
        res.status(409)
        throw new Error("Please Entre Coupon");
    }

    let coupon = await Coupan.findOne({ couponCode: req.body.couponCode })

    if (!coupon) {
        res.status(404)
        throw new Error("Inavalid Coupon");
    }

    res.status(200).json(coupon)
}

const couponController = { applyCoupon }

export default couponController
