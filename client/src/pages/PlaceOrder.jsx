
import React from "react";

const PlaceOrder=()=> {
    return (
        <div className="checkout_area py-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Billing Address */}
                    <div className="w-full lg:w-1/2">
                        <div className="checkout_details_area bg-white p-6 rounded shadow-md">
                            <h5 className="text-lg font-semibold mb-6">Billing Address</h5>

                            <form>
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
                                        <label htmlFor="company" className="block mb-1 font-medium">Company Name</label>
                                        <input type="text" id="company" className="w-full border border-gray-300 rounded px-3 py-2" />
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
                                        <input type="text" id="street_address" className="w-full border border-gray-300 rounded px-3 py-2 mb-2" />
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

                                <div className="flex flex-col gap-2 mt-4">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4" /> Terms and conditions
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4" /> Create an account
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4" /> Subscribe to our newsletter
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Order Details */}
                    <div className="w-full lg:w-5/12">
                        <div className="order-details-confirmation bg-white p-6 rounded shadow-md">
                            <h5 className="text-lg font-semibold mb-2">Your Order</h5>
                            <p className="text-gray-600 mb-4">The Details</p>

                            <ul className="order-details-form mb-6 border border-gray-200 rounded">
                                <li className="flex justify-between p-3 border-b border-gray-200 font-medium">
                                    <span>Product</span>
                                    <span>Total</span>
                                </li>
                                <li className="flex justify-between p-3 border-b border-gray-200">
                                    <span>All</span>
                                    <span>$59.90</span>
                                </li>
                                <li className="flex justify-between p-3 border-b border-gray-200">
                                    <span>Subtotal</span>
                                    <span>$59.90</span>
                                </li>
                                <li className="flex justify-between p-3 border-b border-gray-200">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </li>
                                <li className="flex justify-between p-3 font-semibold">
                                    <span>Total</span>
                                    <span>$59.90</span>
                                </li>
                            </ul>

                            {/* Payment Accordion */}
                            <div className="accordion mb-6" id="accordion">
                                {["Paypal", "Cash on Delivery", "Credit Card", "Direct Bank Transfer"].map((method, i) => (
                                    <div key={i} className="border border-gray-300  rounded mb-2">
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

                            <button className="w-full bg-gray-900 text-white py-3 rounded hover:bg-black transition">
                                Place Order
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default PlaceOrder