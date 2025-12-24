import { CircleCheck, CreditCard, Printer } from "lucide-react";
import React from "react";

// Sample Data
const user = {
    name: "Ananya",
    email: "ananya@example.com",
};

const order = {
    id: "#LM-83920",
    paymentMethod: "Visa ending in 4242",
    date: "October 20, 2023",
    estimatedDelivery: "October 24, 2023",
    subtotal: 165.0,
    shipping: "Free",
    tax: 12.5,
    total: 177.5,
    progressSteps: ["Confirmed", "Shipped", "Delivered"], // all steps
    currentStep: "Confirmed", // current completed step
};

const items = [
    {
        id: 1,
        name: "Emerald Silk Saree",
        price: 120.0,
        qty: 1,
        description: "Size: Free Size | Color: Green",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4yxipb0fi3IwupivMFcsGUnM1tR4M1PR24AtnJuKQe_-3hKrmmiTXxAHxeQ5nb0yZYrc3SQ0BT7TsMkVRN-vdp21ElfjCgs8jJMSUEDArfU4FgEEbpXPUof09Ox87curZBhoFRWqNHlTrk2H6kT6_GlgZqrSJaaz0T8Vb5MJlMPU7vy9-Gc4a1Dg7kdluJ4pXNxnISo3nbGTiEsli_9fJYAN-6mgXiyAQJ9qtuNZct8X_6lXG5JWkaK8NV1o1ZPghdNut0ym_cw_",
        virtualTryOn: true,
    },
    {
        id: 2,
        name: "Gold Geometric Earrings",
        price: 45.0,
        qty: 1,
        description: "Size: One Size | Color: Gold",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDbxtpnMZX7i9KEJCYtV6WnuvsbY3km1gdwuCLLYh4kZG6FDXui3hovvX_vNVwxBdVMWlGntXHTgTxTiAZ_fABIk6vuCZ1AFSQYV6GKZeVQaWcVmPw0nMfhwDte2dyMw9KYhs0_SztVW2MgO4SEuCgszbIm4sS80_RpHtBvJCzPAW4PRYZiWYX4J8MclLYQcZ7YQhJRu_NuphtrrJO6JnGjvQ_6pnApTU5LCyxSaA7niB9z1RXuVSG97K6Ps6xxWX2jXZHzVdyksw-e",
        virtualTryOn: false,
    },
];

// Helper to determine progress step styling
const getStepClass = (step) => {
    if (step === order.currentStep) return "bg-primary text-white";
    if (
        order.progressSteps.indexOf(step) < order.progressSteps.indexOf(order.currentStep)
    )
        return "bg-primary text-white";
    return "bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-400";
};

const OrderConfirmation = () => {
    return (
        <main className="mx-auto max-w-3xl px-4 py-8">
            {/* Success Hero */}
            <div className="mb-10 text-center flex flex-col items-center animate-fade-in-up">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <CircleCheck className="material-symbols-outlined text-6xl text-primary dark:text-white">
                        
                    </CircleCheck>
                </div>
                <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Thank You for Your Purchase!
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Hi {user.name}, your order has been received. We've sent a confirmation email to{" "}
                    <span className="font-medium text-primary dark:text-white">{user.email}</span>.
                </p>
            </div>

            {/* Order Info Cards */}
            <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex-1 space-y-6">
                    {/* Key Details */}
                    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1A2C2C] p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Order Details</h3>
                            <button className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white">
                                <Printer className="material-symbols-outlined text-sm"></Printer> Print
                            </button>
                        </div>
                        <dl className="grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                            <div>
                                <dt className="text-sm text-gray-500 dark:text-gray-400">Order Number</dt>
                                <dd className="text-base font-medium text-primary dark:text-white">{order.id}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-gray-500 dark:text-gray-400">Payment Method</dt>
                                <dd className="text-base font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                    <CreditCard className="material-symbols-outlined text-lg"></CreditCard> {order.paymentMethod}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm text-gray-500 dark:text-gray-400">Date</dt>
                                <dd className="text-base font-medium text-gray-900 dark:text-white">{order.date}</dd>
                            </div>
                            <div>
                                <dt className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery</dt>
                                <dd className="text-base font-medium text-gray-900 dark:text-white">{order.estimatedDelivery}</dd>
                            </div>
                        </dl>

                        {/* Progress Tracker */}
                        <div className="mt-8">
                            <div className="relative flex items-center justify-between">
                                <div className="absolute left-0 top-1/2 -z-10 h-0.5 w-full -translate-y-1/2 bg-gray-200 dark:bg-gray-700"></div>
                                {order.progressSteps.map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-2">
                                        <div
                                            className={`flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white dark:ring-[#1A2C2C] ${getStepClass(step)
                                                }`}
                                        >
                                            <span className="material-symbols-outlined text-sm">
                                                {step === "Confirmed"
                                                    ? "inventory_2"
                                                    : step === "Shipped"
                                                        ? "local_shipping"
                                                        : "home"}
                                            </span>
                                        </div>
                                        <span className={`text-xs font-medium ${step === order.currentStep ? "text-primary dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Items List */}
                    <div className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#1A2C2C] p-6 shadow-sm">
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Items in Your Order</h3>
                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                            {items.map((item) => (
                                <div key={item.id} className={`flex gap-4 py-4 ${item.id === items.length ? "last:pb-0" : ""}`}>
                                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                                        <div
                                            className="h-full w-full bg-cover bg-center"
                                            style={{ backgroundImage: `url("${item.image}")` }}
                                            data-alt={item.name}
                                        ></div>
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between">
                                                <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                                                <p className="font-medium text-gray-900 dark:text-white">${item.price.toFixed(2)}</p>
                                            </div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                                            {item.virtualTryOn && (
                                                <p className="mt-1 text-xs text-primary dark:text-emerald-400 font-medium bg-primary/5 dark:bg-primary/20 w-fit px-2 py-0.5 rounded">
                                                    Virtual Try-On Used
                                                </p>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.qty}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
                            <div className="flex justify-between py-1 text-sm text-gray-600 dark:text-gray-400">
                                <p>Subtotal</p>
                                <p>${order.subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between py-1 text-sm text-gray-600 dark:text-gray-400">
                                <p>Shipping</p>
                                <p>{order.shipping}</p>
                            </div>
                            <div className="flex justify-between py-1 text-sm text-gray-600 dark:text-gray-400">
                                <p>Tax</p>
                                <p>${order.tax.toFixed(2)}</p>
                            </div>
                            <div className="mt-4 flex justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
                                <p className="text-lg font-bold text-gray-900 dark:text-white">Total</p>
                                <p className="text-lg font-bold text-primary dark:text-white">${order.total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mt-8">
                        <button className="w-full sm:w-auto rounded-full bg-primary px-8 py-3 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-[#033636] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                            Continue Shopping
                        </button>
                        <button className="w-full sm:w-auto rounded-full border border-gray-300 dark:border-gray-600 bg-transparent px-8 py-3 text-base font-semibold text-gray-700 dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            Track Order
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OrderConfirmation;
