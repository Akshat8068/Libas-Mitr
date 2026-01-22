import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { couponCart, getCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { orderAdd } from "../features/order/orderSlice";
import Loader from "../components/Loader"

const PlaceOrder = () => {

    const { user } = useSelector(state => state.auth)
    const { order, orderIsLoading, orderIsSuccess, orderIsError, oderIsErrorMessage } = useSelector(state => state.order)

    const { cart, coupon, couponIsLoading, couponIsSuccess, couponIsError, couponIsErrorMessage } = useSelector(state => state.cart);
    const [couponCode, setCouponCode] = useState(coupon ? coupon.couponCode : "")
    const [couponApplied, setCouponApplied] = useState(false)
    const [couponError, setCouponError] = useState(false)
    const [shippingAddress, setShippingAddress] = useState(user.address)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ Calculate totals from cart data
    const cartItems = cart?.products || [];

    const calculatedSubtotal = cartItems.reduce((sum, item) => {
        const price = item.product?.salePrice || 0;
        const quantity = item.qty || 0;
        return sum + (price * quantity);
    }, 0);

    const shipping = 0;
    let discount = coupon ? calculatedSubtotal * coupon.couponDiscount / 100 : 0
    const finalTotal = calculatedSubtotal - discount;

    const handleApplyCoupon = async (couponCode) => {
        setCouponApplied(false)
        setCouponError(false)

        try {
            await dispatch(couponCart(couponCode)).unwrap()
            setCouponApplied(true)
            toast.success("Coupon applied successfully!", { position: "top-center" })
        } catch (error) {
            setCouponError(true)
        }
    }
    const handleOrder = (orderDetailes) => {
        dispatch(orderAdd(orderDetailes))
    }
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    useEffect(() => {

        if (orderIsSuccess&&order) {
            navigate("/profile")
        }
        if (couponIsError && couponIsErrorMessage || orderIsError && oderIsErrorMessage) {
            toast.error(couponIsErrorMessage, { position: "top-center" })
            setCouponError(true)
        }
    }, [couponIsError, couponIsErrorMessage, orderIsError, oderIsErrorMessage,orderIsSuccess,order]);
    if (orderIsLoading) {
        <Loader loadingMessage={"Order is loading"}/>
    }

    return (
        <div className="checkout_area py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Billing Address */}
                    <div className="w-full lg:w-1/2">
                        <div className="checkout_details_area bg-white p-6 rounded shadow-md">
                            <h5 className="text-lg font-semibold mb-6">Billing Address</h5>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="block mb-1 font-medium">First Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="first_name" className="w-full border border-gray-300 rounded px-3 py-2" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="last_name" className="block mb-1 font-medium">Last Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="last_name" className="w-full border border-gray-300 rounded px-3 py-2" required />
                                </div>

                                <div className="col-span-2 mb-3">
                                    <label htmlFor="country" className="block mb-1 font-medium">Country <span className="text-red-500">*</span></label>
                                    <select id="country" className="w-full border border-gray-300 rounded px-3 py-2">
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ger">Germany</option>
                                        <option value="fra">France</option>
                                        <option value="ind">India</option>
                                        <option value="aus">Australia</option>
                                        <option value="bra">Brazil</option>
                                        <option value="cana">Canada</option>
                                    </select>
                                </div>

                                <div className="col-span-2 mb-3">
                                    <label htmlFor="street_address" className="block mb-1 font-medium">Address <span className="text-red-500">*</span></label>
                                    <input type="text" id="shippingAddress" value={shippingAddress} onChange={(e) => setshippingAddress(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 mb-2" />
                                    <input type="text" id="street_address2" className="w-full border border-gray-300 rounded px-3 py-2" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="postcode" className="block mb-1 font-medium">Postcode <span className="text-red-500">*</span></label>
                                    <input type="text" id="postcode" className="w-full border border-gray-300 rounded px-3 py-2" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="city" className="block mb-1 font-medium">Town/City <span className="text-red-500">*</span></label>
                                    <input type="text" id="city" className="w-full border border-gray-300 rounded px-3 py-2" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="state" className="block mb-1 font-medium">Province <span className="text-red-500">*</span></label>
                                    <input type="text" id="state" className="w-full border border-gray-300 rounded px-3 py-2" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone_number" className="block mb-1 font-medium">Phone No <span className="text-red-500">*</span></label>
                                    <input type="number" id="phone_number" min="0" className="w-full border border-gray-300 rounded px-3 py-2" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email_address" className="block mb-1 font-medium">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" id="email_address" className="w-full border border-gray-300 rounded px-3 py-2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Details */}
                    <div className="w-full lg:w-5/12">
                        <div className="order-details-confirmation bg-white p-6 rounded shadow-md">
                            <h5 className="text-lg font-semibold mb-2">Your Order</h5>
                            <p className="text-gray-600 mb-4">The Details</p>

                            {/* ✅ Updated Order Summary */}
                            <div className="space-y-3 text-sm mb-6">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">₹{calculatedSubtotal.toFixed(2)}</span>
                                </div>

                                {discount > 0 && (
                                    <div className="flex justify-between">
                                        <span>Discount</span>
                                        <span className="text-green-700 font-semibold">
                                            -₹{discount.toFixed(2)}
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>₹{shipping}</span>
                                </div>



                                {/* ✅ COUPON INPUT SECTION */}
                                <div className="mt-6 space-y-2">
                                    <div className="flex gap-3">
                                        <input
                                            value={couponCode}
                                            onChange={(e) => {
                                                setCouponCode(e.target.value)
                                                setCouponApplied(false)
                                                setCouponError(false)
                                            }}
                                            placeholder="Coupon Code"
                                            className="flex-1 border px-3 py-2 rounded-xl"
                                            disabled={couponIsLoading}
                                        />
                                        <button
                                            onClick={() => {
                                                if (!couponCode.trim()) {
                                                    toast.error("Please enter a coupon code", { position: "top-center" });
                                                    return;
                                                }
                                                handleApplyCoupon(couponCode.trim());
                                            }}
                                            type="button"
                                            className="px-4 cursor-pointer py-2 border rounded-full bg-gray-200 hover:bg-white disabled:opacity-50"
                                            disabled={couponIsLoading || !couponCode.trim()}
                                        >
                                            {couponIsLoading ? "Applying..." : "Apply"}
                                        </button>
                                    </div>

                                    {/* ✅ SUCCESS MESSAGE - GREEN */}
                                    {couponApplied && coupon && (
                                        <div className="flex items-center gap-2 text-green-600 text-sm bg-green-50 p-2 rounded">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                Coupon "{coupon.couponCode}" applied! {coupon.couponDiscount}% off
                                            </span>
                                        </div>
                                    )}

                                    {/* ✅ ERROR MESSAGE - RED */}
                                    {couponError && !couponApplied && (
                                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-2 rounded">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                            <span>
                                                {couponIsErrorMessage || "Invalid coupon code"}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between border-t pt-3 text-lg">
                                    <span>Total</span>
                                    <span className="font-semibold">₹{finalTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Payment Accordion */}
                            <div className="accordion mb-6" id="accordion">
                                {["Paypal", "Cash on Delivery", "Credit Card", "Direct Bank Transfer"].map((method, i) => (
                                    <div key={i} className="border border-gray-300 rounded mb-2">
                                        <button
                                            type="button"
                                            className="w-full text-left p-3 text-gray-400 hover:text-gray-600 font-medium flex justify-between items-center"
                                            onClick={(e) => {
                                                const next = e.currentTarget.nextSibling;
                                                next.classList.toggle("hidden");
                                            }}
                                        >
                                            {method}
                                            <span>+</span>
                                        </button>
                                        <div className="p-3 hidden">
                                            <p className="text-gray-600 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor sodales. Phasellus sagittis auctor gravida.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button onClick={() => handleOrder({
                                shippingAddress: shippingAddress,
                                coupon: coupon ? coupon.couponCode : ""
                            })} className="w-full bg-gray-900 text-white py-3 rounded hover:bg-black transition">
                                Place Order
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PlaceOrder;