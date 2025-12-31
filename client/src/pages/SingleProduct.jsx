import { useState } from "react";
import { ChevronRight} from "lucide-react";
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
        <section className="bg-white py-6">

            {/* ---------- BREADCRUMB ---------- */}
            <div className="max-w-6xl mx-auto px-4 mb-6">
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                    <a href="/" className="hover:text-gray-900 transition">Home</a>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <a href="/products" className="hover:text-gray-900 transition">Men</a>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900">Lightweight Jacket</span>
                </div>
            </div>

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

                            {/* Cart & Favourite */}
                            <div className="flex flex-col mt-5 gap-3">

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

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default SingleProduct