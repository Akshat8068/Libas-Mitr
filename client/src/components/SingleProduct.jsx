import React from "react";
import ReviewSection from "./ReviewSection";
import ProductExtraInfo from "./ProductInfo";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import { Camera, Eye, Sparkles } from "lucide-react";

const ProductPage = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            {/* Main Content */}
            <main className="layout-container flex h-full grow flex-col max-w-[1440px] mx-auto w-full px-4 lg:px-20 py-8">

                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 mb-6 text-sm">
                    <a className="text-[#608a8a] hover:text-[#0aaeae] transition-colors" href="#">Home</a>
                    <span className="text-[#608a8a] select-none">/</span>
                    <a className="text-[#608a8a] hover:text-[#0aaeae] transition-colors" href="#">Women</a>
                    <span className="text-[#608a8a] select-none">/</span>
                    <a className="text-[#608a8a] hover:text-[#0aaeae] transition-colors" href="#">Ethnic Wear</a>
                    <span className="text-[#608a8a] select-none">/</span>
                    <span className="text-charcoal font-medium">Anarkali Suits</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">

                    {/* Left Column */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {/* Main Image */}
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-sm group">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbV1KGX9RSkH1Kd-BuORyZzeOaVipRind26hLEyE7NBhdpXbk4CEpeOjkYStd0T2ruLQ5wo0aMOOUFmU0haOeW5RPB-_jlAjAI9q2ukJeN53tgIIxuJRW52dRkaCTfNFinFA1GpTHSAeT5G9GMkKhXY1hsvJJzlbOtwZnuFov00UltuwWCRHrsSu0cfthVMCKw_2945jb2Jx-WBff5K9021Exafk9ggyo5Tb7wfxAxS1NFbySVvf8hP25cAEnDSDCRMZ8t8Ji29wsl"
                                alt="Anarkali Suit"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                Bestseller
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <button
                                    key={i}
                                    className="aspect-[3/4] rounded-lg overflow-hidden border hover:border-gray-300 bg-white"
                                >
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuvBYP68DYMRS60ZGoMeF_4WqInXFGgNOQbbhj7hGeHl9Or4SD3Mj0fKrVlzmYQLq6jydDkGRXOwLvkb71Bjj7iT0xu1o4HFerl_-zBrlL95xTy8vU0phgLxqsAj2YjsN4InSk17GnzIhOkInZJ-Bav-BEXm73yDGnyc5a-_Ned_moxV4y4lKaD7AsVgyLINV1m7_P5EYGgRekRdaUN7FPVuZB0OeQPcNy2Bruasl7xgr3NGXFsvQhS0tQEHMa2IG7rOeibSRWhyI7"
                                        alt="Thumbnail"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <div className="sticky top-24 flex flex-col gap-6">

                            {/* Product Info */}
                            <div>
                                <h3 className="text-[#044343] text-sm font-bold uppercase">Ritu Kumar</h3>
                                <h1 className="text-4xl font-serif font-medium">
                                    Velvet Embroidered Anarkali Suit
                                </h1>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-3 border-b pb-6">
                                <span className="text-3xl font-bold">₹12,999</span>
                                <span className="text-lg line-through text-gray-400">₹18,500</span>
                                <span className="text-[#0aaeae] bg-[#0aaeae]/10 px-2 py-1 rounded text-xs font-bold">
                                    30% OFF
                                </span>
                            </div>

                            {/* Selectors */}
                            <ColorSelector />
                            <SizeSelector />

                            {/* Actions */}
                            <div className="flex gap-3">
                                <button className="flex-1 bg-[#0aaeae] text-white h-12 rounded-lg font-semibold">
                                    Add to Cart
                                </button>
                                <button className="w-12 h-12 border rounded-lg">♡</button>
                            </div>

                            {/* Virtual Try-On Section */}
                            <div className="scroll-mt-32 rounded-xl border border-emerald/10 bg-white p-5 shadow-sm ring-1 ring-black/5 mt-4 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald to-primary"></div>
                                <div className="mb-4 flex items-end justify-between">
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-emerald flex items-center gap-2">
                                            <Sparkles className="material-symbols-outlined text-xl"></Sparkles>
                                            Virtual Try-On
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">AI-Powered Fitting Room</p>
                                    </div>
                                    <span className="rounded-full bg-emerald/5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald border border-emerald/10">
                                        Beta
                                    </span>
                                </div>

                                <div className="relative overflow-hidden rounded-lg bg-off-white">
                                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-emerald/20 px-6 py-8 text-center transition-all hover:border-emerald/40 hover:bg-emerald/5 cursor-pointer group">
                                        <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-emerald/10 text-emerald shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <Camera className="material-symbols-outlined"></Camera>
                                        </div>
                                        <h4 className="mb-1 font-display text-sm font-semibold text-charcoal">Upload your photo</h4>
                                        <p className="mb-4 text-xs text-gray-500 max-w-[200px] mx-auto leading-relaxed">
                                            Use a clear, full-body shot. Our AI will overlay the outfit on you.
                                        </p>
                                        <div className="rounded bg-charcoal group-hover:bg-black px-4 py-2 text-xs font-semibold text-white transition-colors shadow-sm">
                                            Select Image
                                        </div>
                                        <p className="mt-3 text-[10px] text-gray-400 uppercase tracking-wide">Secure • Private • Instant</p>
                                        <input accept="image/*" className="hidden" type="file" />
                                    </label>
                                </div>

                                <div className="mt-3 flex justify-center">
                                    <button className="text-xs font-medium text-emerald hover:text-primary flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                                        <Eye className="material-symbols-outlined text-sm"></Eye> View Sample Result
                                    </button>
                                </div>
                            </div>

                        </div>
                        <ProductExtraInfo />
                    </div>

                </div>

                {/* Reviews */}
                <section className="border-t border-gray-200 pt-16 pb-20">
                    <ReviewSection />
                </section>

            </main>
        </div>
    );
};

export default ProductPage;
