import { useState } from "react";
import { ChevronRight } from "lucide-react";
import BreadCrumb from "../components/BreadCrumb";
import bg1 from "../assets/product-detail-01.jpg";
import bg2 from "../assets/product-detail-02.jpg";
import bg3 from "../assets/product-detail-03.jpg";

const SingleProduct=()=> {
    const images = [bg1, bg2, bg3];
    const colorImages = [
        bg1,   // Black
        bg2,   // Red
        bg3    // White (example)
    ];

    const sizes = [ "S", "M", "L", "XL","2XL"];
    const [selectedSize, setSelectedSize] = useState("M");


    const [activeImg, setActiveImg] = useState(images[0]);

    return (
        <section className="bg-white py-35 lg:pt-20">

            {/* ---------- BREADCRUMB ---------- */}
            <BreadCrumb/>

            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT — Gallery */}
                    <div className="space-y-6">

                        {/* MAIN IMAGE */}
                        <div className="aspect-square rounded overflow-hidden relative">
                            <img src={activeImg} className="w-full h-full object-cover" />
                            <button className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100 bg-black/40 transition">
                                <i className="fa fa-expand" />
                            </button>
                        </div>

                        {/* THUMBNAILS */}
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveImg(img)}
                                    className={`aspect-square rounded overflow-hidden cursor-pointer 
                    ${activeImg === img ? "border-black" : "border-transparent"}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
                            <h3 className="text-lg font-bold text-neutral-900 mb-4">Product Details</h3>
                            <div className="space-y-3">
                                <div className="flex">
                                    <span className="text-sm font-semibold text-gray-700 w-32">Fabric:</span>
                                    <span className="text-sm text-gray-600">100% Premium Cotton</span>
                                </div>
                                <div className="flex">
                                    <span className="text-sm font-semibold text-gray-700 w-32">Fit Type:</span>
                                    <span className="text-sm text-gray-600">Regular Fit</span>
                                </div>
                                <div className="flex">
                                    <span className="text-sm font-semibold text-gray-700 w-32">Care:</span>
                                    <span className="text-sm text-gray-600">Machine wash cold, tumble dry low</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-gray-100 border border-gray-700  rounded-2xl p-4 text-center">
                                <p className="text-2xl font-bold text-black mb-1">95%</p>
                                <p className="text-xs text-gray-700 font-medium">AI Fit Accuracy</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-700 rounded-2xl p-4 text-center">
                                <p className="text-sm font-bold text-black mb-1">No Size</p>
                                <p className="text-xs text-gray-700 font-medium">Guessing</p>
                            </div>
                            <div className="bg-gray-100 border border-gray-700 rounded-2xl p-4 text-center">
                                <p className="text-sm font-bold text-black mb-1">Easy</p>
                                <p className="text-xs text-gray-700 font-medium">Returns</p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT — Product Description */}
                    <div className="rounded-lg min-h-[400px] p-6 lg:block">
                        <span className="text-xl my-3 text-gray-500">Mango</span>
                        <h2 className="text-3xl font-semibold my-7 hover:text-red-500 cursor-pointer">
                            One Shoulder Glitter Midi Dress
                        </h2>
                        <p className="text-2xl font-semibold my-4">
                            <span className="line-through text-gray-400 mr-3">$65.00</span>
                            <span className="text-red-500">$49.00</span>
                        </p>
                        <p className="text-gray-600 my-4">
                            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.
                        </p>

                        {/* FORM */}
                        <form className="mt-8 space-y-4">
                            {/* Select Boxes */}
                            <div className=" gap-4">
                                <div className="space-y-2 my-2">

                                    <div className="flex gap-2">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-full h-10 rounded border flex items-center justify-center text-sm ${selectedSize === size
                                                        ? "border-black bg-black text-white"
                                                        : "border-gray-300 hover:border-black"}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2 mt-4">
                                    <div className="grid grid-cols-3 gap-3">
                                        {colorImages.map((img, i) => (
                                            <div
                                                key={i}
                                                onClick={() => setActiveImg(img)}
                                                className={`
          aspect-square rounded overflow-hidden cursor-pointer 
          ${activeImg === img ? "border-black" : "border-gray-300"}
        `}
                                            >
                                                <img src={img} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                            <div className="flex items-center justify-around mt-5 gap-3">

                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-6 py-2 w-full rounded hover:bg-red-600 transition"
                                >
                                    Add to Cart
                                </button>

                                <button
                                    type="button"
                                    className="bg-red-500 text-white px-6 py-2 w-full rounded hover:bg-red-600 transition"
                                >
                                    Virtual Try-On
                                </button>

                            </div>
                            <div className="bg-gray-200 border-2 border-gray-300 rounded-3xl p-6 mb-8">
                                <div className="text-center mb-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16  rounded-2xl mb-4">
                                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Upload Your Photo for Virtual Try-On</h3>
                                    <p className="text-sm text-gray-600 mb-6">Front-facing photo works best for accurate results</p>
                                </div>

                                <div className="bg-white border-2 border-dashed  rounded-2xl p-8 mb-4 text-center  transition-colors cursor-pointer">
                                    <input type="file" accept="image/*" className="hidden" id="upload-photo" />
                                    <label htmlFor="upload-photo" className="cursor-pointer">
                                        <svg className="w-12 h-12 text-black mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <p className="text-sm font-medium text-neutral-900 mb-1">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                    </label>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 bg-black   text-white py-3.5 rounded-xl font-semibold  hover:bg-gray-700 transition-all shadow-md">
                                        Upload & Try Virtually
                                    </button>
                                    <button className="flex-1 bg-black   text-white py-3.5 rounded-xl font-semibold  hover:bg-gray-700 transition-all shadow-md">
                                        Use Sample Model
                                    </button>
                                </div>
                            </div>
                            {/* Cart & Favourite */}

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default SingleProduct