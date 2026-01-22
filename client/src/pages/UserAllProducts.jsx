import React, { useEffect, useState } from "react";
import product1 from "../assets/product-01.jpg";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
const UserAllProducts = () => {

    const { products, productIsSuccess, productIsLoading, productIsError, productIsErrorMessage } = useSelector(state => state.product)
    const dispatch = useDispatch()
    
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (i) => {
        setOpenSection(openSection === i ? null : i);
    };

    const categories = ["Men (20)", "Women (20)", "Bags (20)", "Clothing (20)", "Shoes (20)", "Accessories (20)", "Kids (20)"];
    const brands = ["Louis Vuitton", "Chanel", "Hermes", "Gucci"];
    const prices = ["$0.00 - $50.00", "$50.00 - $100.00", "$100.00 - $150.00", "$150.00 - $200.00", "$200.00 - $250.00", "250.00+"];
    const sizes = ["XS", "S", "M", "XL", "2XL", "XXL", "3XL", "4XL"];
    const tags = ["Product", "Bags", "Shoes", "Fashion", "Clothing", "Hats", "Accessories"];

    const filterSections = [
        { title: "Categories", items: categories },
        { title: "Branding", items: brands },
        { title: "Filter Price", items: prices },
        { title: "Size", items: sizes },
        { title: "Tags", items: tags },
    ];
    useEffect(() => {
        dispatch(getProducts())

        if (productIsError && productIsErrorMessage) {
            toast.error(productIsErrorMessage,{position:"top-center"})
        }
    },[productIsError,productIsErrorMessage])

    if (productIsLoading) {
        return (
            <Loader loadingMessage={"Products Loading"}/>
        )
    }
    return (
        <section className="bg-gray-50 lg:pt-20 pt-32  relative">
            {/* Breadcrumb */}
            <BreadCrumb />

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-12 gap-6">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block col-span-3 space-y-6">
                    {filterSections.map((section, i) => (
                        <div key={i} className="bg-white p-4 rounded shadow">
                            <h3 className="font-semibold mb-3">{section.title}</h3>
                            {section.title === "Size" ? (
                                <div className="flex flex-wrap gap-2">
                                    {section.items.map((size, idx) => (
                                        <label key={idx} className="flex items-center gap-1 cursor-pointer">
                                            <input type="radio" name="size" className="accent-gray-900" />
                                            {size}
                                        </label>
                                    ))}
                                </div>
                            ) : section.title === "Tags" ? (
                                <div className="flex flex-wrap gap-2">
                                    {section.items.map((tag, idx) => (
                                        <a key={idx} href="#" className="text-sm px-2 py-1 rounded hover:bg-gray-300 transition">{tag}</a>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-1 text-gray-700">
                                    {section.items.map((item, idx) => (
                                        <li key={idx}><a href="#" className="hover:text-gray-900 transition">{item}</a></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </aside>

                {/* Mobile Filters Button */}
                <div className="lg:hidden col-span-12 mb-4 flex justify-start">
                    <button
                        onClick={() => setFiltersOpen(true)}
                        className="bg-gray-900 text-white px-4 py-2 rounded"
                    >
                        Filters
                    </button>
                </div>

                {/* Mobile Filters Panel */}
                <div className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto transform transition-transform duration-300 ${filtersOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Filters</h3>
                        <button onClick={() => setFiltersOpen(false)} className="text-2xl">×</button>
                    </div>

                    {filterSections.map((section, i) => (
                        <div key={i} className="space-y-2 mb-4">
                            <button
                                type="button"
                                onClick={() => toggleSection(i)}
                                className="w-full flex justify-between items-center p-3 font-medium text-gray-900 border border-gray-200 rounded-lg"
                            >
                                {section.title}
                                <span className={`transition-transform ${openSection === i ? "rotate-45" : ""}`}>+</span>
                            </button>

                            {openSection === i && (
                                <div className="p-3 text-sm text-gray-600 border-t border-gray-200 bg-gray-50">
                                    {section.title === "Size" ? (
                                        <div className="flex flex-wrap gap-2">
                                            {section.items.map((size, idx) => (
                                                <label key={idx} className="flex items-center gap-1 cursor-pointer">
                                                    <input type="radio" name="size" className="accent-gray-900" />
                                                    {size}
                                                </label>
                                            ))}
                                        </div>
                                    ) : section.title === "Tags" ? (
                                        <div className="flex flex-wrap gap-2">
                                            {section.items.map((tag, idx) => (
                                                <a key={idx} href="#" className="text-sm px-2 py-1 rounded hover:bg-gray-300 transition">{tag}</a>
                                            ))}
                                        </div>
                                    ) : (
                                        <ul className="space-y-1">
                                            {section.items.map((item, idx) => (
                                                <li key={idx}><a href="#" className="hover:text-gray-900 transition">{item}</a></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Overlay for mobile */}
                {filtersOpen && <div className="fixed inset-0 bg-black opacity-40 z-40" onClick={() => setFiltersOpen(false)}></div>}

                {/* Product Grid */}
                <main className="col-span-12 lg:col-span-9 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {products.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </main>

            </div>
        </section>
    );
};

export default UserAllProducts;
