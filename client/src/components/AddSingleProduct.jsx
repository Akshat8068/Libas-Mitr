// src/pages/AddProduct.jsx
import React, { useState } from "react";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        sku: "",
        barcode: "",
        description: "",
        media: [],
        variants: [
            { size: "S", color: "Black", price: 129, stock: 45 },
            { size: "M", color: "Red", price: 129, stock: 20 },
        ],
        publish: true,
        visibility: "Public",
        basePrice: "",
        discountedPrice: "",
        taxIncluded: false,
        category: "Women's Clothing",
        brand: "",
        collection: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleVariantChange = (index, field, value) => {
        const updatedVariants = [...product.variants];
        updatedVariants[index][field] = value;
        setProduct((prev) => ({ ...prev, variants: updatedVariants }));
    };

    const addVariant = () => {
        setProduct((prev) => ({
            ...prev,
            variants: [...prev.variants, { size: "S", color: "Black", price: 0, stock: 0 }],
        }));
    };

    const removeVariant = (index) => {
        const updatedVariants = product.variants.filter((_, i) => i !== index);
        setProduct((prev) => ({ ...prev, variants: updatedVariants }));
    };

    return (
        <div className="flex h-screen w-full overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 border-r border-[#f0f4f3] dark:border-[#1F332A] bg-white dark:bg-[#14261E] flex flex-col h-full hidden lg:flex">
                <div className="p-6">
                    <h1 className="text-[#111815] dark:text-white text-xl font-bold">LibasMitr</h1>
                    <p className="text-[#618979] text-xs">Admin Panel</p>
                </div>
                <nav className="flex-1 overflow-y-auto px-4 space-y-2">
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#618979] hover:bg-[#f0f4f3] dark:hover:bg-[#1A2C24]" href="#">
                        <span className="material-symbols-outlined text-[24px]">grid_view</span>
                        Dashboard
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#eafbf3] dark:bg-[#1A2C24] text-[#111815] dark:text-primary" href="#">
                        <span className="material-symbols-outlined text-[24px] text-primary">inventory_2</span>
                        Products
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#618979] hover:bg-[#f0f4f3] dark:hover:bg-[#1A2C24]" href="#">
                        <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
                        Orders
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#618979] hover:bg-[#f0f4f3] dark:hover:bg-[#1A2C24]" href="#">
                        <span className="material-symbols-outlined text-[24px]">group</span>
                        Customers
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#618979] hover:bg-[#f0f4f3] dark:hover:bg-[#1A2C24]" href="#">
                        <span className="material-symbols-outlined text-[24px]">leaderboard</span>
                        Analytics
                    </a>
                </nav>
                <div className="p-4 border-t border-[#f0f4f3] dark:border-[#1F332A]">
                    <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#618979] hover:bg-[#f0f4f3] dark:hover:bg-[#1A2C24]" href="#">
                        <span className="material-symbols-outlined text-[24px]">settings</span>
                        Settings
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full relative overflow-hidden">
                {/* Header */}
                <header className="h-16 flex items-center justify-between border-b border-[#f0f4f3] dark:border-[#1F332A] px-6 lg:px-10 bg-white dark:bg-[#14261E] z-10">
                    <button className="lg:hidden p-2 text-[#618979]">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className="hidden md:flex flex-1 max-w-md items-center h-10 rounded-lg bg-[#f0f4f3] dark:bg-[#1A2C24] overflow-hidden">
                        <div className="flex items-center justify-center pl-3 text-[#618979]">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input
                            className="w-full bg-transparent border-none text-sm text-[#111815] dark:text-white placeholder-[#618979] focus:ring-0 px-3"
                            placeholder="Search products, orders..."
                        />
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <button className="relative p-2 rounded-lg hover:bg-[#f0f4f3] dark:hover:bg-[#1A2C24] text-[#111815] dark:text-white">
                            <span className="material-symbols-outlined text-[24px]">notifications</span>
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#14261E]"></span>
                        </button>
                        <div
                            className="h-9 w-9 rounded-full bg-cover bg-center border border-[#e5e7eb] dark:border-[#2C3E36]"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnTv5vp3tC25hcml9OEjMXMNpM03_s9IokmsfqDHH4hNJrk38OPtLJC6SFG-kQmKT0CDS6kvtewzeLldqek_7AXANL6vap8WO127t9kfxchd6tOH82X3MQzrJCLcczA8FENpNNFK4UWObCkIXhcxvlPjjDjd3_rhsEzSWirV4qt2hFlBmFhbeVsQ9sK0pJmtcigTLmzkmcmmqXidU5nr9s5S8oVl4bbOivXe9wNs6q1be7VM8EJjJizyG8NJSLz9tWeGi5rSOCmVQE")',
                            }}
                        ></div>
                    </div>
                </header>

                {/* Main Form */}
                <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 lg:p-10 pb-20">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
                        {/* Header & Actions */}
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <h2 className="text-2xl md:text-3xl font-black text-[#111815] dark:text-white tracking-tight">
                                Add New Product
                            </h2>
                            <div className="flex items-center gap-3">
                                <button className="px-5 py-2.5 rounded-lg border border-[#d1d5db] dark:border-[#2C3E36] text-[#111815] dark:text-white font-bold text-sm bg-white dark:bg-[#14261E] hover:bg-gray-50 dark:hover:bg-[#1A2C24] transition-colors">
                                    Discard
                                </button>
                                <button className="px-5 py-2.5 rounded-lg bg-primary hover:bg-[#0fb872] text-[#111815] font-bold text-sm transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">save</span> Save Product
                                </button>
                            </div>
                        </div>

                        {/* Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column */}
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                {/* General Info */}
                                <div className="bg-white dark:bg-[#14261E] rounded-xl border border-[#e5e7eb] dark:border-[#1F332A] p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-[#111815] dark:text-white mb-4">General Information</h3>
                                    <input
                                        type="text"
                                        name="name"
                                        value={product.name}
                                        onChange={handleChange}
                                        placeholder="Product Name"
                                        className="bg-[#f0f4f3] dark:bg-[#1A2C24] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary"
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <input
                                            type="text"
                                            name="sku"
                                            value={product.sku}
                                            onChange={handleChange}
                                            placeholder="SKU Code"
                                            className="bg-[#f0f4f3] dark:bg-[#1A2C24] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary"
                                        />
                                        <input
                                            type="text"
                                            name="barcode"
                                            value={product.barcode}
                                            onChange={handleChange}
                                            placeholder="Barcode / EAN"
                                            className="bg-[#f0f4f3] dark:bg-[#1A2C24] rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <textarea
                                        name="description"
                                        value={product.description}
                                        onChange={handleChange}
                                        rows={6}
                                        placeholder="Description"
                                        className="w-full mt-4 bg-white dark:bg-[#1A2C24] rounded-lg px-4 py-3 resize-y"
                                    />
                                </div>

                                {/* Product Media */}
                                <div className="bg-white dark:bg-[#14261E] rounded-xl border border-[#e5e7eb] dark:border-[#1F332A] p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-[#111815] dark:text-white mb-4">Product Media</h3>
                                    <div className="border-2 border-dashed border-[#d1d5db] dark:border-[#2C3E36] rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-[#f9fafb] dark:bg-[#1A2C24]/50 cursor-pointer hover:bg-[#f0f4f3] dark:hover:bg-[#1A2C24] transition-colors">
                                        <span className="material-symbols-outlined text-[32px] text-primary">cloud_upload</span>
                                        <p className="text-sm font-bold text-[#111815] dark:text-white">Click to upload or drag and drop</p>
                                        <p className="text-xs text-[#618979] mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                    </div>
                                </div>

                                {/* Variants & Inventory */}
                                <div className="bg-white dark:bg-[#14261E] rounded-xl border border-[#e5e7eb] dark:border-[#1F332A] p-6 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-bold text-[#111815] dark:text-white">Variants & Inventory</h3>
                                        <button className="text-primary text-sm font-bold hover:underline flex items-center gap-1" onClick={addVariant}>
                                            <span className="material-symbols-outlined text-[18px]">add</span> Add Variant
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto rounded-lg border border-[#f0f4f3] dark:border-[#1F332A]">
                                        <table className="w-full text-left text-sm">
                                            <thead className="bg-[#f0f4f3] dark:bg-[#1A2C24]">
                                                <tr>
                                                    <th className="px-4 py-3">Size</th>
                                                    <th className="px-4 py-3">Color</th>
                                                    <th className="px-4 py-3">Price</th>
                                                    <th className="px-4 py-3">Stock</th>
                                                    <th className="px-4 py-3 text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-[#f0f4f3] dark:divide-[#1F332A]">
                                                {product.variants.map((v, i) => (
                                                    <tr key={i}>
                                                        <td className="px-4 py-3">
                                                            <select
                                                                value={v.size}
                                                                onChange={(e) => handleVariantChange(i, "size", e.target.value)}
                                                                className="bg-white dark:bg-[#14261E] rounded px-2 py-1.5 text-xs w-full"
                                                            >
                                                                <option>S</option>
                                                                <option>M</option>
                                                                <option>L</option>
                                                                <option>XL</option>
                                                            </select>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center gap-2">
                                                                <span className={`w-4 h-4 rounded-full`} style={{ backgroundColor: v.color.toLowerCase() }}></span>
                                                                {v.color}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <input
                                                                type="text"
                                                                value={v.price}
                                                                onChange={(e) => handleVariantChange(i, "price", e.target.value)}
                                                                className="w-24 bg-transparent rounded px-2 py-1.5 text-xs"
                                                            />
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <input
                                                                type="number"
                                                                value={v.stock}
                                                                onChange={(e) => handleVariantChange(i, "stock", e.target.value)}
                                                                className="w-20 bg-transparent rounded px-2 py-1.5 text-xs"
                                                            />
                                                        </td>
                                                        <td className="px-4 py-3 text-right">
                                                            <button onClick={() => removeVariant(i)} className="text-[#618979] hover:text-red-500 transition-colors">
                                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                {/* Status & Visibility */}
                                <div className="bg-white dark:bg-[#14261E] rounded-xl border border-[#e5e7eb] dark:border-[#1F332A] p-6 shadow-sm">
                                    <h3 className="text-base font-bold text-[#111815] dark:text-white mb-4">Status & Visibility</h3>
                                    <label className="flex items-center justify-between mb-4">
                                        <span>Publish Product</span>
                                        <input type="checkbox" name="publish" checked={product.publish} onChange={handleChange} />
                                    </label>
                                    <select name="visibility" value={product.visibility} onChange={handleChange} className="w-full rounded-lg px-4 py-2.5">
                                        <option>Public</option>
                                        <option>Hidden</option>
                                        <option>Schedule for later</option>
                                    </select>
                                </div>

                                {/* Pricing */}
                                <div className="bg-white dark:bg-[#14261E] rounded-xl border border-[#e5e7eb] dark:border-[#1F332A] p-6 shadow-sm">
                                    <h3 className="text-base font-bold text-[#111815] dark:text-white mb-4">Pricing</h3>
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <label>Base Price</label>
                                            <input type="text" name="basePrice" value={product.basePrice} onChange={handleChange} placeholder="0.00" className="w-full rounded-lg px-4 py-2.5" />
                                        </div>
                                        <div>
                                            <label>Discounted Price</label>
                                            <input type="text" name="discountedPrice" value={product.discountedPrice} onChange={handleChange} placeholder="0.00" className="w-full rounded-lg px-4 py-2.5" />
                                        </div>
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" name="taxIncluded" checked={product.taxIncluded} onChange={handleChange} />
                                            Charge tax on this product
                                        </label>
                                    </div>
                                </div>

                                {/* Organization */}
                                <div className="bg-white dark:bg-[#14261E] rounded-xl border border-[#e5e7eb] dark:border-[#1F332A] p-6 shadow-sm">
                                    <h3 className="text-base font-bold text-[#111815] dark:text-white mb-4">Organization</h3>
                                    <div className="flex flex-col gap-2">
                                        <select name="category" value={product.category} onChange={handleChange} className="w-full rounded-lg px-4 py-2.5">
                                            <option>Women's Clothing</option>
                                            <option>Men's Clothing</option>
                                            <option>Kids</option>
                                        </select>
                                        <input type="text" name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" className="w-full rounded-lg px-4 py-2.5" />
                                        <input type="text" name="collection" value={product.collection} onChange={handleChange} placeholder="Collection" className="w-full rounded-lg px-4 py-2.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddProduct;
