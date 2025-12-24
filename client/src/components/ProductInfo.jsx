import React, { useState } from "react";
import { Truck, ChevronDown } from "lucide-react";

const accordionData = [
    {
        title: "Description",
        content: (
            <p>
                Crafted for elegance, this Deep Maroon Anarkali Suit by Ritu Kumar
                features intricate zardosi hand-embroidery on premium velvet fabric.
                Perfect for winter weddings and evening receptions. Includes matching
                churidar and a net dupatta.
            </p>
        ),
    },
    {
        title: "Fabric & Care",
        content: (
            <ul className="list-disc pl-4 space-y-1">
                <li>Fabric: Premium Velvet (Kurta)</li>
                <li>Cotton Silk (Churidar)</li>
                <li>Soft Net (Dupatta)</li>
                <li>Care: Dry Clean Only</li>
                <li>Store in a muslin cloth</li>
            </ul>
        ),
    },
    {
        title: "Shipping & Returns",
        content: (
            <p>
                Free shipping on orders above ₹5000. Easy 7-day returns for store credit
                or exchange. Please ensure tags are intact.
            </p>
        ),
    },
];

const ProductExtraInfo = () => {
    const [pincode, setPincode] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            {/* Check Delivery */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 mt-10">
                <span className="block text-xs font-bold text-gray-500 uppercase mb-2">
                    Check Delivery
                </span>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        placeholder="Enter Pincode"
                        className="flex-1 border-0 border-b-2 border-gray-200 bg-transparent py-2 text-sm focus:border-[#0aaeae] focus:ring-0 placeholder:text-gray-400"
                    />
                    <button className="text-sm font-bold text-[#0aaeae] hover:text-emerald">
                        Check
                    </button>
                </div>

                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                    <Truck size={16} />
                    Estimated delivery by{" "}
                    <span className="font-bold text-charcoal">Oct 24 - Oct 26</span>
                </div>
            </div>

            {/* Accordion Section */}
            <div className="mt-4 border-t border-gray-200">
                {accordionData.map((item, index) => (
                    <div
                        key={index}
                        className="py-4 border-b border-gray-200"
                    >
                        <button
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                            className="flex w-full items-center justify-between text-sm font-medium text-charcoal"
                        >
                            {item.title}
                            <ChevronDown
                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                                size={18}
                            />
                        </button>

                        {openIndex === index && (
                            <div className="mt-3 text-sm leading-relaxed text-gray-600">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductExtraInfo;
