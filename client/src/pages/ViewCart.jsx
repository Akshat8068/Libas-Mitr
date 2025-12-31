import React from "react";

const cartData = {
    items: [
        {
            id: 1,
            name: "Silk Embroidered Kurta Set",
            price: 120,
            color: "red",
            size: "L",
            quantity: 1,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpC4Ie4NULmzPt32_aqJS2QQ2lLXUXpMdBr42eUkOSUHCHY82aswDbC0zmf5e0OK_NuaSrJCHf7d4AFGNReH4wg7pP_JBVLbyDHauwa6yT4AG1e1xkKjMbHZwQa4ULxCh8Ue8FOokvbkuApUZ-xggMw9znbU13B_oRrj5eYELxck39WwdnJBwjLJXt0SeRT4skLgDy3E3MnUyt4THjhIG43lc6MGDaWT-sOwIfG0V0kcwPa73_MYHLJHueuolYTHVbyS9I58WvQtAt",
        },
        {
            id: 2,
            name: "Handwoven Linen Saree",
            price: 85,
            color: "beige",
            size: "Free Size",
            quantity: 1,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMO5UI6F4JsjGYvUZsG5G2nalIwoBYunlqd7nuiRMWMut1Cp9OqTEsz2oxpe2gZKnTOusG0YBwSDsp8sT39QgCnBhkSKav1ApXeRBN35QD1-vvPVoSm4Q0Z1K0Y_zpJeed6IchqLM4bXTPFXTxbdv30IM_QTfd6Wkaj5fOIiwar55LOZC9xNLOIOw7fG5TYCgrj3N1FXYLHcZLuivxbxvmUaeoREwn4PVnto2gw-AwRBpRSwOG0d09iwZNmqlCroF1Ps4vjXWVIwJt",
        },
        {
            id: 3,
            name: "Antique Gold Jhumkas",
            price: 45,
            color: "gold",
            size: "Standard",
            quantity: 1,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7DppT20n6hy7Wnq9g59VBvFWtB6NCdxwpqJddEFskSsorjc3IRlhwORyCw-FqP3Z71rJfnR4_2FJkTSApxaBUaLmZwrteVeEa_knIboRoUA5cudjjsKRGqdwOPxydCdWsMdB8r29oNdM7xC3y-ok-adV8IUDFABHTT1WAypVyavcj-UVYKU4ew8Uf-spbjh7PyoMavRsROyPV-vHmq5xWotEbaL-M8pvSnNzra_bNZr6pRbJ2DNqQOeXp1Tkp-LAUYZDBE70WRDkw",
        }
    ],
    subtotal: 250,
    discount: 20,
};

export default function ViewCart() {

    
    const calculatedSubtotal = cartData.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const shipping = 15;
    const taxableAmount = calculatedSubtotal - cartData.discount + shipping;
    const tax = taxableAmount * 0.1;
    const finalTotal = taxableAmount + tax;


    const total = calculatedSubtotal - cartData.discount;

    return (
        <div className=" min-h-screen">
            {/* BREADCRUMB */}
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex items-center gap-2 text-sm">
                    <a href="/" className="text-gray-500 hover:text-gray-900">
                        Home
                    </a>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900 font-medium">Shopping Cart</span>
                </div>
            </div>
            {/* CONTINUE SHOPPING */}
            <div className="max-w-6xl mx-auto px-4 mb-4 flex justify-between items-center">
                <a
                    href="/shop"
                    className="inline-flex items-center gap-2 text-gray-700  transition
                    px-4 py-2 border border-gray-200
                                     bg-gray-200 rounded-full hover:bg-white
                                      hover:border-gray-400"
                >
                    ← Continue Shopping
                </a>
            </div>

            {/* CART */}
            <form className="max-w-6xl mx-auto px-4 pb-16">
                <div className="flex space-x-6  justify-around h-full">
                    {/* LEFT — TABLE */}
                    <div><div className="xl:col-span-2 border-l border-gray-300 border-r border-t   overflow-hidden">
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="p-4 font-semibold">Product</th>
                                    <th className="p-4 font-semibold">Price</th>
                                    <th className="p-4 font-semibold">Quantity</th>
                                    <th className="p-4 font-semibold">Total</th>
                                    <th className="p-4 font-semibold">X</th> {/* Remove column */}
                                </tr>
                            </thead>


                            <tbody>
                                {cartData.items.map((item) => (
                                    <tr key={item.id} className="border border-gray-300 border-t">
                                        <td className="p-4">
                                            <div className="flex gap-4">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                                <div>
                                                    <p className="font-medium">{item.name}</p>
                                                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                                                        <span>Size: {item.size}</span>
                                                        <span className="flex items-center gap-1">
                                                            Color:
                                                            <span
                                                                className="w-3 h-3 rounded-full border"
                                                                style={{ backgroundColor: item.color }}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="p-4 font-medium">${item.price}</td>

                                        <td className="p-4">
                                            
                                            <div className="flex items-center gap-2">
                                                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">−</button>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    readOnly
                                                    className="w-10 px-1 text-center border border-gray-300 rounded"
                                                />
                                                <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">+</button>
                                            </div>
                                        </td>

                                        <td className="p-4 font-semibold">${item.price * item.quantity}</td>

                                        <td className="p-4">
                                            <button className="text-red-500 font-bold hover:text-red-700">X</button> {/* Remove button */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>


                    </div></div>

                    {/* RIGHT — TOTALS */}
                    <div className="bg-white h-full border border-gray-200     p-6">
                        
                        <h3 className="text-xl font-semibold mb-6">Cart Totals</h3>

                        <div className="flex justify-between py-3 border-b border-gray-300">
                            <span>Subtotal:</span>
                            <span className="font-semibold">${calculatedSubtotal}</span>
                        </div>

                        <div className="flex justify-between py-3 border-b border-gray-300">
                            <span>Discount:</span>
                            <span className="font-semibold text-green-700">
                                -${cartData.discount}
                            </span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-300">
                            <span>Shipping:</span>
                            <span className="font-semibold">$15</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-gray-300">
                            <span>Tax (10%):</span>
                            <span className="font-semibold">${tax}</span>
                        </div>
                        <div className="flex justify-between py-4 border-t mb-1 border-gray-300">
                            <span className="text-lg font-medium">Total:</span>
                            <span className="text-lg font-semibold">${finalTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex  items-center justify-center gap-4 p-6 border-t border-gray-300">
                            <div className="flex flex-col gap-2">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="border-gray-300 border  rounded-2xl px-4 py-2"
                                />
                                <button
                                    type="button"
                                    className="px-4 py-2 border border-gray-200
                                     bg-gray-200 rounded-full hover:bg-white hover:border-gray-400"
                                >
                                    Apply Coupon
                                </button>
                            </div>


                        </div>
                        <div className="flex justify-between py-4  border-t mb-1 border-gray-300">
                            <span className="text-lg font-medium">Total:</span>
                            <span className="text-lg font-semibold">${total}</span>
                        </div>
                        <button className="w-full bg-gray-900 text-white py-3 rounded hover:bg-black transition">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
