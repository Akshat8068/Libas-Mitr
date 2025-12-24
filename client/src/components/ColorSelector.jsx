import React, { useState } from "react";

const colorsData = [
    {
        name: "Deep Maroon",
        value: "maroon",
        hex: "#521313",
    },
    {
        name: "Navy",
        value: "navy",
        hex: "#1A237E",
    },
    {
        name: "Black",
        value: "black",
        hex: "#000000",
    },
];

const ColorSelector = () => {
    const [selectedColor, setSelectedColor] = useState(colorsData[0]);

    return (
        <div className="space-y-3">
            {/* Label */}
            <span className="text-sm font-semibold text-charcoal">
                Color:{" "}
                <span className="font-normal text-gray-600">
                    {selectedColor.name}
                </span>
            </span>

            {/* Color Options */}
            <div className="flex gap-3 mt-1">
                {colorsData.map((color) => {
                    const isActive = selectedColor.value === color.value;

                    return (
                        <button
                            key={color.value}
                            aria-label={`Select ${color.name}`}
                            onClick={() => setSelectedColor(color)}
                            className={`
                size-10 rounded-full transition-all
                ring-offset-2 ring-offset-[#F8F8F8]
                ${isActive
                                    ? "ring-2 ring-[#0aaeae]"
                                    : "hover:ring-2 hover:ring-gray-300"
                                }
              `}
                            style={{ backgroundColor: color.hex }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ColorSelector;
