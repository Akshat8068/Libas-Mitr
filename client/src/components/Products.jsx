import React from "react";
import Breadcrumb from "../components/BreadCrumb";

const Products = () => {
    return (
        <main className="flex-grow w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10 py-6">
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Women", href: "/women" },
                    { label: "Ethnic Wear" } // last item → no link
                ]}
            />

            <div className="flex flex-col lg:flex-row gap-8">

                {/* ================= SIDEBAR FILTERS ================= */}
                <aside className="w-full lg:w-72 flex-shrink-0">
                    <div className="lg:sticky lg:top-24 bg-white rounded-xl p-5 border border-gray-200 shadow-sm h-fit max-h-[calc(100vh-8rem)] overflow-y-auto">

                        <div className="flex items-center justify-between mb-6 pb-4 border-b">
                            <h3 className="font-bold text-lg text-[#111818]">Filters</h3>
                            <button className="text-xs font-medium text-primary uppercase">
                                Clear All
                            </button>
                        </div>
                        {/* Sizes */}
                        <div className="mb-8  pt-2">
                            <h4 className="font-semibold text-sm mb-4">Sizes</h4>

                            {/* Scrollable container */}
                            <div className="max-h-48 overflow-y-auto pr-2">
                                <ul className="space-y-3">
                                    {[
                                        "XS",
                                        "S",
                                        "M",
                                        "L",
                                        "XL",
                                        "XXL",
                                        "3XL",
                                        "Free Size",
                                        "28",
                                        "30",
                                        "32",
                                        "34",
                                        "36",
                                        "38",
                                        "40",
                                        "42"
                                    ].map((size) => (
                                        <li key={size}>
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-gray-600">
                                                    {size}
                                                </span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Brands */}
                        <div className="mb-8 border-t pt-3">
                            <h4 className="font-semibold text-sm mb-4">Brands</h4>

                            {/* Scrollable container */}
                            <div className="max-h-64 overflow-y-auto pr-2">
                                <ul className="space-y-3">
                                    {[
                                        "LibasMitr",
                                        "Biba",
                                        "W",
                                        "Soch",
                                        "Manyavar",
                                        "Fabindia",
                                        "House of Pataudi",
                                        "Anouk",
                                        "Aurelia",
                                        "Global Desi",
                                        "Indya",
                                        "Suta",
                                        "Jaypore",
                                        "Vishudh",
                                        "Sangria",
                                        "Ahalyaa",
                                        "KALINI",
                                        "Banarasi Style",
                                        "Kazo",
                                        "Zuba"
                                    ].map((brand) => (
                                        <li key={brand}>
                                            <label className="flex items-center gap-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <span className="text-sm text-gray-600">
                                                    {brand}
                                                </span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Price */}
                        <div className="mb-8 border-t pt-6">
                            <h4 className="font-semibold text-sm mb-4">Price</h4>
                            <div className="flex justify-between gap-4 text-sm">
                                <div className="flex-1 border rounded px-3 py-2">
                                    <span className="text-xs text-gray-500">Min</span>
                                    <p className="font-medium">₹500</p>
                                </div>
                                <div className="flex-1 border rounded px-3 py-2">
                                    <span className="text-xs text-gray-500">Max</span>
                                    <p className="font-medium">₹15000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* ================= PRODUCT GRID ================= */}
                <section className="flex-1 min-w-0">

                    {/* Header */}
                    <div className="mb-8">

                        {/* PAGE TITLE */}
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">
                            Ethnic Wear
                        </h1>

                        {/* CATEGORY TABS */}
                        <div className="flex gap-3 overflow-x-auto pb-2 mb-6 scrollbar-hide">
                            {[
                                "All",
                                "Sarees",
                                "Kurtas & Suits",
                                "Lehengas",
                                "Ethnic Dresses",
                                "Jeans",
                                "Western Wear",
                                "Shirts",
                                "Indo-Western"
                            ].map((cat, i) => (
                                <button
                                    key={i}
                                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap 
                border transition
                ${cat === "All"
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* RESULTS + SORT */}
                        <div className="flex justify-between items- p-4 rounded-xl  shadow">
                            

                            <select className="border rounded-lg px-4 py-2 text-sm focus:outline-none">
                                <option>Recommended</option>
                                <option>Newest First</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>

                    </div>


                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">

                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="group flex flex-col">

                                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-4 border">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzlJFGcp44QSKBDyTjz02bisR9ZjgXVbTLc-4-2bI__Zc2vLJv4XIjJsr9EQcsHVpK84xbyXudzTdI8icmllL2VbCo_JUNCe3M0Kk6kNNXxGv5n_OyRZXyrAgLYZELOPUazD2vzQ2hS8ZsGvYuYjUedamDbHUGAeq_iR4BYN3bPN9RtHQRuJwiUHArq10GJnafmRNx-P4tzqNlIPLjvR5HXzCcSI4BxYIUNslphZMy2kkg9MWK49wSpdTL0JqgIgxOi_maASvRzap1"
                                        alt=""
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Hover Actions */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition bg-gradient-to-t from-black/60">

                                        <button className="w-full bg-black/50 text-white py-2 rounded text-sm">
                                            Fit It
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs uppercase text-gray-400 font-bold">
                                        House of Pataudi
                                    </h3>
                                    <p className="text-sm font-medium">
                                        Teal Embroidered Anarkali Kurta
                                    </p>
                                    <p className="font-bold mt-1">₹2,499</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </div>
        </main>
    );
};

export default Products;
