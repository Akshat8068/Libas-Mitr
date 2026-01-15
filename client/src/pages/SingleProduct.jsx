import { useState } from "react";
import { X, ShoppingCart } from "lucide-react";

// Mock data - replace with your actual product data
const mockProduct = {
    _id: "6961471d08e0ee8dc2b90bb6",
    name: "One Shoulder Glitter Midi Dress",
    description: "Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.",
    brand: "Mango",
    originalPrice: 65.00,
    salePrice: 49.00,
    colors: [
        {
            _id: "color1",
            colorName: "Black",
            mainImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
            images: [
                "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
                "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=500"
            ],
            sizes: [
                { size: "S", stock: 10 },
                { size: "M", stock: 8 },
                { size: "L", stock: 5 },
                { size: "XL", stock: 3 },
                { size: "2XL", stock: 0 }
            ]
        },
        {
            _id: "color2",
            colorName: "Red",
            mainImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
            images: [
                "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500"
            ],
            sizes: [
                { size: "S", stock: 5 },
                { size: "M", stock: 10 },
                { size: "L", stock: 12 },
                { size: "XL", stock: 7 },
                { size: "2XL", stock: 2 }
            ]
        },
        {
            _id: "color3",
            colorName: "White",
            mainImage: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500",
            images: [
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
            ],
            sizes: [
                { size: "S", stock: 8 },
                { size: "M", stock: 6 },
                { size: "L", stock: 10 },
                { size: "XL", stock: 4 },
                { size: "2XL", stock: 1 }
            ]
        }
    ]
};

const SingleProduct = () => {
    const [product] = useState(mockProduct);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [activeImg, setActiveImg] = useState(product.colors[0].mainImage);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setActiveImg(color.mainImage);
        setSelectedSizes([]);
    };

    const handleSizeToggle = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    const handleAddToCartClick = () => {
        setShowModal(true);
    };

    const handleSubmitToCart = async () => {
        if (selectedSizes.length === 0) {
            alert("Please select at least one size");
            return;
        }

        const cartItems = selectedSizes.map(size => ({
            productId: product._id,
            colorName: selectedColor.colorName,
            colorMainImage: selectedColor.mainImage,
            size: size,
            qty: quantity
        }));

        console.log("Adding to cart:", cartItems);

        try {
            alert(`Added ${cartItems.length} item(s) to cart!`);
            setShowModal(false);
            setSelectedSizes([]);
            setQuantity(1);
        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Failed to add to cart");
        }
    };

    const allImages = [selectedColor.mainImage, ...selectedColor.images];

    return (
        <section className="bg-white py-8 lg:pt-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* LEFT — Gallery */}
                    <div className="space-y-6">
                        <div className="aspect-square rounded overflow-hidden relative">
                            <img src={activeImg} className="w-full h-full object-cover" alt={product.name} />
                            <button className="absolute inset-0 flex items-center justify-center text-white text-xl opacity-0 hover:opacity-100 bg-black/40 transition">
                                <i className="fa fa-expand" />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {allImages.map((img, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveImg(img)}
                                    className={`aspect-square rounded overflow-hidden cursor-pointer border-2 ${activeImg === img ? "border-black" : "border-transparent"
                                        }`}
                                >
                                    <img src={img} className="w-full h-full object-cover" alt="" />
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
                            <div className="bg-gray-100 border border-gray-700 rounded-2xl p-4 text-center">
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
                        <span className="text-xl my-3 text-gray-500">{product.brand}</span>
                        <h2 className="text-3xl font-semibold my-7 hover:text-red-500 cursor-pointer">
                            {product.name}
                        </h2>
                        <p className="text-2xl font-semibold my-4">
                            <span className="line-through text-gray-400 mr-3">${product.originalPrice}</span>
                            <span className="text-red-500">${product.salePrice}</span>
                        </p>
                        <p className="text-gray-600 my-4">
                            {product.description}
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="space-y-2 my-2">
                                <label className="font-semibold text-gray-700">Available Sizes</label>
                                <div className="flex gap-2">
                                    {selectedColor.sizes.map((sizeObj) => (
                                        <div
                                            key={sizeObj.size}
                                            className={`w-full h-10 rounded border flex items-center justify-center text-sm ${sizeObj.stock > 0
                                                    ? "border-gray-300 text-gray-700"
                                                    : "border-gray-300 text-gray-300 line-through"
                                                }`}
                                        >
                                            {sizeObj.size}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 mt-4">
                                <label className="font-semibold text-gray-700">Select Color</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {product.colors.map((color) => (
                                        <div
                                            key={color._id}
                                            onClick={() => handleColorChange(color)}
                                            className={`aspect-square rounded overflow-hidden cursor-pointer border-2 ${selectedColor._id === color._id ? "border-black" : "border-gray-300"
                                                }`}
                                        >
                                            <img src={color.mainImage} className="w-full h-full object-cover" alt={color.colorName} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center justify-around mt-5 gap-3">
                                <button
                                    onClick={handleAddToCartClick}
                                    className="bg-red-500 text-white px-6 py-2 w-full rounded hover:bg-red-600 transition"
                                >
                                    Add to Cart
                                </button>

                                <button
                                    className="bg-red-500 text-white px-6 py-2 w-full rounded hover:bg-red-600 transition"
                                >
                                    Virtual Try-On
                                </button>
                            </div>

                            <div className="bg-gray-200 border-2 border-gray-300 rounded-3xl p-6 mb-8">
                                <div className="text-center mb-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4">
                                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Upload Your Photo for Virtual Try-On</h3>
                                    <p className="text-sm text-gray-600 mb-6">Front-facing photo works best for accurate results</p>
                                </div>

                                <div className="bg-white border-2 border-dashed rounded-2xl p-8 mb-4 text-center transition-colors cursor-pointer">
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
                                    <button className="flex-1 bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-gray-700 transition-all shadow-md">
                                        Upload & Try Virtually
                                    </button>
                                    <button className="flex-1 bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-gray-700 transition-all shadow-md">
                                        Use Sample Model
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ADD TO CART MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Add to Cart</h2>
                            <button onClick={() => setShowModal(false)} className="hover:bg-gray-100 rounded-full p-1">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex gap-4 mb-6 pb-6 border-b">
                            <img
                                src={selectedColor.mainImage}
                                alt={product.name}
                                className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-600">{selectedColor.colorName}</p>
                                <p className="font-bold text-red-500">${product.salePrice}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Select Size(s) *</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {selectedColor.sizes.map((sizeObj) => {
                                    const isSelected = selectedSizes.includes(sizeObj.size);
                                    const isAvailable = sizeObj.stock > 0;

                                    return (
                                        <button
                                            key={sizeObj.size}
                                            onClick={() => isAvailable && handleSizeToggle(sizeObj.size)}
                                            disabled={!isAvailable}
                                            className={`py-3 rounded-lg border-2 font-medium transition ${!isAvailable
                                                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                                    : isSelected
                                                        ? "border-black bg-black text-white"
                                                        : "border-gray-300 hover:border-black"
                                                }`}
                                        >
                                            {sizeObj.size}
                                            {!isAvailable && (
                                                <div className="text-xs">Out</div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                {selectedSizes.length > 0
                                    ? `Selected: ${selectedSizes.join(", ")}`
                                    : "You can select multiple sizes"}
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Quantity per size</h3>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border rounded-lg hover:bg-gray-100"
                                >
                                    −
                                </button>
                                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 border rounded-lg hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {selectedSizes.length > 0 && (
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <h4 className="font-semibold mb-2">Order Summary</h4>
                                <div className="space-y-1 text-sm">
                                    {selectedSizes.map(size => (
                                        <div key={size} className="flex justify-between">
                                            <span>{size} × {quantity}</span>
                                            <span>${(product.salePrice * quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                    <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                                        <span>Total</span>
                                        <span>${(product.salePrice * quantity * selectedSizes.length).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="flex-1 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmitToCart}
                                disabled={selectedSizes.length === 0}
                                className={`flex-1 py-3 rounded-lg transition ${selectedSizes.length === 0
                                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        : "bg-black text-white hover:bg-gray-800"
                                    }`}
                            >
                                Add {selectedSizes.length > 0 && `(${selectedSizes.length})`}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SingleProduct;