import { Link, useNavigate } from "react-router-dom";

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
        },
    ],
    subtotal: 250,
    discount: 20,
};

const CartSidebar = ({ isOpen, setIsOpen }) => {
    const navigate=useNavigate()
    const { items, subtotal, discount } = cartData;
    const grandTotal = subtotal - discount;
    if (!isOpen) return null;
    const handleViewcart = () => {
         navigate("/cart")
     }
    

    return (
        <aside className="fixed top-0 right-0 w-full sm:w-[420px] h-screen bg-white shadow-2xl z-50 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-xl font-bold tracking-wide">Your Cart</h2>

                <button onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-black text-2xl leading-none cursor-pointer"
                >
                    ×
                </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
                <ul className="space-y-5">
                    {items.map(item => (
                        <li key={item.id} className="flex gap-4">

                            {/* Image wrapper */}
                            <div className="relative w-20 h-24 rounded overflow-hidden group">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />

                                {/* Hover X Button */}
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-lg"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col justify-evenly">
                                <Link
                                    to={`/products/${item.id}`}
                                    className="font-medium hover:text-red-500 transition cursor-pointer"
                                >
                                    {item.name}
                                </Link>


                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    {item.size && <span className="text-gray-800 py-1 px-2 border border-gray-500 rounded-sm font-medium">{item.size}</span>}
                                    {item.color && <span className="w-3 h-3 rounded-full border" style={{ backgroundColor: item.color }}></span>}
                                </div>

                                <span className="text-sm text-gray-600">
                                    {item.quantity} x ₹{item.price}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Total + Buttons */}
            <div className="border-t px-6 py-5 space-y-4">
                
                <div className="text-lg font-semibold flex justify-between">
                    <span>Total</span> <span>₹{grandTotal.toFixed(2)}</span>
                </div>

                <div className="flex w-full gap-3 mt-4">
                    <button onClick={handleViewcart}  className="flex-1 h-11 border border-gray-300 text-gray-800 text-sm font-semibold tracking-wide uppercase rounded-none hover:bg-gray-900 hover:text-white transition">
                        View Cart
                    </button>
                    <button className="flex-1 h-11 border border-gray-300 text-gray-800 text-sm font-semibold tracking-wide uppercase rounded-none hover:bg-gray-900 hover:text-white transition">
                        Check Out
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default CartSidebar;
