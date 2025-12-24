import React, { useState } from "react";
import { Ruler } from "lucide-react";

const sizesData = [
    { label: "XS", available: true },
    { label: "S", available: true },
    { label: "M", available: true },
    { label: "L", available: true },
    { label: "XL", available: false },
];

const SizeSelector = () => {
    const [selectedSize, setSelectedSize] = useState("M");

    return (
        <div className="space-y-3">
            {/* Header */}
            <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-charcoal">Size</span>

                <button
                    type="button"
                    className="text-xs font-medium text-[#0aaeae] hover:underline flex items-center gap-1"
                >
                    <Ruler size={14} />
                    Size Guide
                </button>
            </div>

            {/* Sizes */}
            <div className="grid grid-cols-5 gap-2">
                {sizesData.map((size) => {
                    const isSelected = selectedSize === size.label;

                    return (
                        <button
                            key={size.label}
                            disabled={!size.available}
                            onClick={() =>
                                size.available && setSelectedSize(size.label)
                            }
                            className={`
                h-10 rounded text-sm transition-all relative overflow-hidden
                ${!size.available
                                    ? "border border-gray-100 bg-gray-100 text-gray-300 cursor-not-allowed"
                                    : isSelected
                                        ? "border-2 border-[#0aaeae] bg-[#0aaeae]/5 text-[#0aaeae] font-bold"
                                        : "border border-gray-200 bg-white font-medium hover:border-charcoal hover:bg-gray-50"
                                }
              `}
                        >
                            {size.label}

                            {/* Cross line for disabled size */}
                            {!size.available && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <span className="w-full h-px bg-gray-300 rotate-45"></span>
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SizeSelector;
