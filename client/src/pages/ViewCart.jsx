import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
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



const ViewCart = () => {
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
        <div className="min-h-screen lg:pt-20">
            {/* BREADCRUMB */}
            <BreadCrumb />

            {/* CONTINUE SHOPPING */}
            <div className="max-w-6xl mx-auto px-4 mb-4 flex justify-between items-center">
                <a
                    href="/shop"
                    className="inline-flex items-center gap-2 text-gray-700 px-4 py-2
          border border-gray-200 bg-gray-200 rounded-full hover:bg-white hover:border-gray-400"
                >
                    ← Continue Shopping
                </a>
            </div>

            <form className="max-w-6xl mx-auto px-4 pb-16">
                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* ---------------- LEFT SIDE ---------------- */}
                    <div className="lg:col-span-2 space-y-4">

                        {/* -------- TABLE (Desktop only) -------- */}
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
                                    {cartData.items.map(item => (
                                        <tr key={item.id} className="border-t">
                                            <td className="p-4">
                                                <div className="flex gap-4">
                                                    <Link to={`/products/${item.id}`}>
                                                        <img src={item.img} className="w-20 h-20 rounded object-cover" />
                                                    </Link>
                                                    <div>
                                                        <Link
                                                            to={`/products/${item.id}`}
                                                            className="font-semibold  hover:underline cursor-pointer"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        <div className="text-sm text-gray-600 flex gap-3 mt-1">
                                                            <span>Size: {item.size}</span>
                                                            <span className="flex gap-1 items-center">
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

                                            <td className="p-4">${item.price}</td>

                                            <td className="p-4">
                                                <div className="flex gap-2 items-center">
                                                    <button className="px-3 py-1 border rounded">−</button>
                                                    <input
                                                        readOnly
                                                        value={item.quantity}
                                                        className="w-10 text-center border rounded"
                                                    />
                                                    <button className="px-3 py-1 border rounded">+</button>
                                                </div>
                                            </td>

                                            <td className="p-4 font-semibold">
                                                ${item.price * item.quantity}
                                            </td>

                                            <td className="p-4">
                                                <button className="text-red-500 font-bold">X</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* -------- CARD VIEW (Mobile + Tablet) -------- */}
                        <div className="space-y-4 lg:hidden">
                            {cartData.items.map(item => (
                                <div
                                    key={item.id}
                                    className="border rounded-lg p-4 bg-white shadow-sm"
                                >
                                    <div className="flex gap-4">
                                        <Link to={`/products/${item.id}`}>
                                            <img src={item.img} className="w-20 cursor-pointer h-20 rounded object-cover" />
                                        </Link>

                                        <div className="flex-1">
                                            <Link
                                                to={`/products/${item.id}`}
                                                className="font-semibold cursor-pointer hover:underline cursor-pointer"
                                            >
                                                {item.name}
                                            </Link>

                                            <div className="text-sm text-gray-600 flex gap-3 mt-1">
                                                <span>Size: {item.size}</span>
                                                <span className="flex gap-1 items-center">
                                                    Color:
                                                    <span
                                                        className="w-3 h-3 rounded-full border"
                                                        style={{ backgroundColor: item.color }}
                                                    />
                                                </span>
                                            </div>

                                            <div className="flex justify-between items-center mt-3">
                                                <span className="font-semibold">${item.price}</span>

                                                <div className="flex gap-2 items-center">
                                                    <button className="px-3 py-1 border rounded">−</button>
                                                    <input
                                                        readOnly
                                                        value={item.quantity}
                                                        className="w-10 text-center border rounded"
                                                    />
                                                    <button className="px-3 py-1 border rounded">+</button>
                                                </div>
                                            </div>

                                            <div className="flex justify-between mt-3">
                                                <span className="text-gray-600">Total</span>
                                                <span className="font-semibold">
                                                    ${item.price * item.quantity}
                                                </span>
                                            </div>

                                            <button className="mt-3 text-red-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* ---------------- RIGHT SIDE (TOTALS) ---------------- */}
                    <div className="bg-white  p-6 rounded-lg  h-fit">
                        <h3 className="text-xl font-semibold mb-6">Cart Totals</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold">${calculatedSubtotal}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span className="text-green-700 font-semibold">
                                    -${cartData.discount}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>$15</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Tax (10%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between border-t pt-3 text-lg">
                                <span>Total</span>
                                <span className="font-semibold">${finalTotal.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <input
                                placeholder="Coupon Code"
                                className="flex-1 border px-3 py-2 rounded-xl"
                            />
                            <button className="px-4 cursor-pointer py-2 border rounded-full bg-gray-200 hover:bg-white">
                                Apply
                            </button>
                        </div>

                        <button className="mt-6 w-full cursor-pointer bg-black text-white py-3 rounded">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ViewCart;

