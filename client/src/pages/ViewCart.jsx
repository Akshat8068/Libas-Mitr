import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { couponCart, getCart, removeCart, updateCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import CartItem from "../components/CartItem";
import { useState } from "react";

const ViewCart = () => {
    const { cart, cartIsLoading, cartIsSuccess, cartIsError, cartIsErrorMessage } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const handleNavigate = () => {
        navigate("/order");
    };

    const handleRemoveMobile = (item) => {
        dispatch(removeCart({
            productId: item.product._id,
            colorName: item.colorName,
            size: item.size
        }));
    };

    const handleUpdateQuantityMobile = async (item, newQty) => {
        if (newQty < 1) return;

        try {
            await dispatch(updateCart({
                productId: item.product._id,
                colorName: item.colorName,
                size: item.size,
                qty: newQty
            })).unwrap();
        } catch (err) {
            toast.error(err || "Failed to update quantity", { position: "top-center" });
        }
    };

    // Calculate totals from real cart data
    const cartItems = cart?.products || [];

    const calculatedSubtotal = cartItems.reduce((sum, item) => {
        const price = item.product?.salePrice || 0;
        const quantity = item.qty || 0;
        return sum + (price * quantity);
    }, 0);

    const shipping = 15;
    const taxableAmount = calculatedSubtotal  + shipping;
    const tax = taxableAmount * 0.1;
    const finalTotal = taxableAmount + tax;

    

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    useEffect(() => {
        if (cartIsError && cartIsErrorMessage) {
            toast.error(cartIsErrorMessage, { position: "top-center" });
        }
    }, [cartIsError, cartIsErrorMessage]);

    // Show loader while loading
    if (cartIsLoading) {
        return <Loader loadingMessage={"Cart Items Loading..."} />;
    }

    return (
        <div className="min-h-screen lg:pt-20">
            <BreadCrumb />

            <div className="max-w-6xl mx-auto px-4 mb-4 flex justify-between items-center">
                <Link
                    to={"/products"}
                    className="inline-flex items-center gap-2 text-gray-700 px-4 py-2
          border border-gray-200 bg-gray-200 rounded-full hover:bg-white hover:border-gray-400"
                >
                    ← Continue Shopping
                </Link>
            </div>

            {cartItems.length === 0 ? (
                <div className="max-w-6xl mx-auto px-4 pb-16 text-center">
                    <div className="bg-white rounded-lg p-12">
                        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                        <p className="text-gray-600 mb-6">Add some items to get started!</p>
                        <Link
                            to={"/products"}
                            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            ) : (
                <form className="max-w-6xl mx-auto px-4 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* LEFT SIDE */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* TABLE (Desktop only) */}
                            <div className="hidden lg:block border border-gray-300 overflow-hidden">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr>
                                            <th className="p-4 font-semibold">Product</th>
                                            <th className="p-4 font-semibold">Price</th>
                                            <th className="p-4 font-semibold">Quantity</th>
                                            <th className="p-4 font-semibold">Total</th>
                                            <th className="p-4 font-semibold">X</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cartItems.map((item) => (
                                            <CartItem key={`${item.product?._id}-${item.colorName}-${item.size}`} item={item} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* CARD VIEW (Mobile + Tablet) */}
                            <div className="space-y-4 lg:hidden">
                                {cartItems.map((item) => (
                                    <div
                                        key={`${item.product?._id}-${item.colorName}-${item.size}`}
                                        className="border rounded-lg p-4 bg-white shadow-sm"
                                    >
                                        <div className="flex gap-4">
                                            <Link to={`/products/${item.product?._id}`}>
                                                <img
                                                    src={item.colorMainImage}
                                                    className="w-20 cursor-pointer h-20 rounded object-cover"
                                                    alt={item.product?.name}
                                                />
                                            </Link>

                                            <div className="flex-1">
                                                <Link
                                                    to={`/products/${item.product?._id}`}
                                                    className="font-semibold cursor-pointer hover:underline"
                                                >
                                                    {item.product?.name}
                                                </Link>

                                                <div className="text-sm text-gray-600 flex gap-3 mt-1">
                                                    <span>Size: {item.size}</span>
                                                    <span className="flex gap-1 items-center">
                                                        Color: {item.colorName}
                                                    </span>
                                                </div>

                                                <div className="flex justify-between items-center mt-3">
                                                    <span className="font-semibold">₹{item.product?.salePrice}</span>

                                                    <div className="flex gap-2 items-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => handleUpdateQuantityMobile(item, item.qty - 1)}
                                                            className="px-3 py-1 border rounded hover:bg-gray-100"
                                                        >
                                                            −
                                                        </button>
                                                        <input
                                                            readOnly
                                                            value={item.qty}
                                                            className="w-10 text-center border rounded"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => handleUpdateQuantityMobile(item, item.qty + 1)}
                                                            className="px-3 py-1 border rounded hover:bg-gray-100"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between mt-3">
                                                    <span className="text-gray-600">Total</span>
                                                    <span className="font-semibold">
                                                        ₹{(item.product?.salePrice * item.qty).toFixed(2)}
                                                    </span>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveMobile(item)}
                                                    className="mt-3 text-red-500 hover:text-red-700"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE (TOTALS) */}
                        <div className="bg-white p-6 rounded-lg h-fit">
                            <h3 className="text-xl font-semibold mb-6">Cart Totals</h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">₹{calculatedSubtotal.toFixed(2)}</span>
                                </div>


                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>₹{shipping}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Tax (10%)</span>
                                    <span>₹{tax.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between border-t pt-3 text-lg">
                                    <span>Total</span>
                                    <span className="font-semibold">₹{finalTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleNavigate}
                                className="mt-6 w-full cursor-pointer bg-black text-white py-3 rounded hover:bg-gray-800"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ViewCart;