import React from "react";

const cartData = {
    items: [
        {
            id: 1,
            name: "Silk Embroidered Kurta Set",
            price: 120,
            color: "Navy Blue",
            size: "M",
            quantity: 1,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpC4Ie4NULmzPt32_aqJS2QQ2lLXUXpMdBr42eUkOSUHCHY82aswDbC0zmf5e0OK_NuaSrJCHf7d4AFGNReH4wg7pP_JBVLbyDHauwa6yT4AG1e1xkKjMbHZwQa4ULxCh8Ue8FOokvbkuApUZ-xggMw9znbU13B_oRrj5eYELxck39WwdnJBwjLJXt0SeRT4skLgDy3E3MnUyt4THjhIG43lc6MGDaWT-sOwIfG0V0kcwPa73_MYHLJHueuolYTHVbyS9I58WvQtAt",
        },
        {
            id: 2,
            name: "Handwoven Linen Saree",
            price: 85,
            color: "Beige",
            size: null,
            quantity: 1,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMO5UI6F4JsjGYvUZsG5G2nalIwoBYunlqd7nuiRMWMut1Cp9OqTEsz2oxpe2gZKnTOusG0YBwSDsp8sT39QgCnBhkSKav1ApXeRBN35QD1-vvPVoSm4Q0Z1K0Y_zpJeed6IchqLM4bXTPFXTxbdv30IM_QTfd6Wkaj5fOIiwar55LOZC9xNLOIOw7fG5TYCgrj3N1FXYLHcZLuivxbxvmUaeoREwn4PVnto2gw-AwRBpRSwOG0d09iwZNmqlCroF1Ps4vjXWVIwJt",
        },
        {
            id: 3,
            name: "Antique Gold Jhumkas",
            price: 45,
            color: null,
            size: "Standard",
            quantity: 1,
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7DppT20n6hy7Wnq9g59VBvFWtB6NCdxwpqJddEFskSsorjc3IRlhwORyCw-FqP3Z71rJfnR4_2FJkTSApxaBUaLmZwrteVeEa_knIboRoUA5cudjjsKRGqdwOPxydCdWsMdB8r29oNdM7xC3y-ok-adV8IUDFABHTT1WAypVyavcj-UVYKU4ew8Uf-spbjh7PyoMavRsROyPV-vHmq5xWotEbaL-M8pvSnNzra_bNZr6pRbJ2DNqQOeXp1Tkp-LAUYZDBE70WRDkw",
        },
    ],
    subtotal: 250,
    discount: 20,
};

const CartSidebar = () => {
    const { items, subtotal, discount } = cartData;
    const grandTotal = subtotal - discount;

    return (
        <aside className="fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-[#F8F8F8] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0 flex flex-col border-l border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-3">
                    <h2 className="font-serif text-2xl font-bold text-primary-dark">Shopping Bag</h2>
                    <span className="bg-primary/10 text-primary-dark text-xs font-semibold px-2 py-0.5 rounded-full">
                        {items.length} Items
                    </span>
                </div>
                <button aria-label="Close cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-[#608a8a] hover:text-text-main group">
                    <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">close</span>
                </button>
            </div>

            {/* Progress Bar */}
            <div className="bg-primary/5 px-6 py-3 border-b border-primary/10">
                <div className="flex justify-between items-center text-xs font-medium mb-1.5">
                    <span className="text-primary-dark">Spend $5.00 more for free shipping</span>
                    <span className="text-primary font-bold">98%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "98%" }}></div>
                </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group relative">
                        <div className="w-20 h-28 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between py-1">
                            <div>
                                <div className="flex justify-between items-start gap-2">
                                    <h3 className="font-serif text-lg font-bold text-text-main leading-tight hover:text-primary cursor-pointer transition-colors line-clamp-2">
                                        {item.name}
                                    </h3>
                                    <p className="font-semibold text-text-main whitespace-nowrap">${item.price.toFixed(2)}</p>
                                </div>
                                {item.color && <p className="text-xs text-[#608a8a] mt-1">{item.color} {item.size && `/ ${item.size}`}</p>}
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex items-center border border-[#dbe6e6] bg-white rounded-md h-8 shadow-sm">
                                    <button className="px-2.5 text-[#608a8a] hover:text-primary transition-colors hover:bg-gray-50 h-full rounded-l-md">-</button>
                                    <input className="w-8 text-center border-none p-0 text-xs font-medium focus:ring-0 text-text-main" readOnly type="text" value={item.quantity} />
                                    <button className="px-2.5 text-[#608a8a] hover:text-primary transition-colors hover:bg-gray-50 h-full rounded-r-md">+</button>
                                </div>
                                <button className="text-xs text-[#608a8a] hover:text-red-500 underline decoration-dotted transition-colors">Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="bg-white px-6 py-6 border-t border-gray-100 shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-[#608a8a]">
                        <span>Subtotal</span>
                        <span className="text-text-main font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#608a8a]">
                        <span>Discount</span>
                        <span className="text-primary font-medium">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-primary-dark pt-2 border-t border-dashed border-gray-200">
                        <span>Grand Total</span>
                        <span className="font-serif text-xl">${grandTotal.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-[#608a8a] text-center italic">Tax included and shipping calculated at checkout</p>
                </div>
                <div className="space-y-3">
                    <button className="w-full bg-primary-dark hover:bg-[#065050] text-white font-bold py-3.5 px-6 rounded-lg shadow-lg shadow-primary-dark/20 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2 group">
                        Proceed to Checkout
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-text-main font-medium py-3 px-6 rounded-lg transition-colors text-sm">
                        View Cart Details
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default CartSidebar;
