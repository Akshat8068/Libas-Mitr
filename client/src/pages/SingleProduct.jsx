import { useEffect, useState } from "react";
import { X, ShoppingCart } from "lucide-react";
import { getProduct, getProductReview } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { addItemcart } from "../features/cart/cartSlice";
import { ProductReviews } from "../components/ProductReviews";
import { AddReviewForm } from "../components/AddReview";
import { virtualCloth, resetVirtualTry } from "../features/virtualtry/virtualTrySlice";

const SingleProduct = () => {
    const { user } = useSelector(state => state.auth);
    const { product, productIsSuccess, productReviews, productIsLoading, productIsError, productIsErrorMessage } = useSelector(state => state.product);
    const { virtualTryOn, virtualTryIsLoading, virtualTryIsSuccess, virtualTryIsError, virtualTryErrorMessage } = useSelector(state => state.virtualTry);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pid } = useParams();

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showTryOn, setShowTryOn] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [showSampleModal, setShowSampleModal] = useState(false);
    const [selectedSampleImage, setSelectedSampleImage] = useState(null);
    const [activeImg, setActiveImg] = useState("");
    const [showResultModal, setShowResultModal] = useState(false);

    const [formData, setFormData] = useState({
        person_url: "",
        cloth_url: "",
        garment_des: product?.description || ""
    });

    const { person_url } = formData;

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
    };

    const handleChange = (e) => {
        if (e.target.name === "person_url") {
            const file = e.target.files[0];
            if (file) {
                setFormData({ ...formData, person_url: file });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!person_url) {
            toast.error("Please upload your photo first", { position: "top-center" });
            return;
        }

        if (!selectedSampleImage) {
            toast.error("Please select a sample model", { position: "top-center" });
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('cloth_url', selectedSampleImage);
        formDataToSend.append('person_url', person_url);
        formDataToSend.append('garment_des', product.description);

        for (let pair of formDataToSend.entries()) {
            console.log(pair[0] + ': ', pair[1]);
        }

        dispatch(virtualCloth(formDataToSend));
    };

    // Fetch product on mount
    useEffect(() => {
        dispatch(getProduct(pid));
        dispatch(getProductReview(pid));
    }, [pid, dispatch]);

    // Initialize selectedColor when product loads
    useEffect(() => {
        if (product && product.colors && product.colors.length > 0) {
            setSelectedColor(product.colors[0]);
            setActiveImg(product.colors[0].mainImage);
        }
    }, [product]);

    // Handle errors
    useEffect(() => {
        if (productIsError && productIsErrorMessage) {
            toast.error(productIsErrorMessage, { position: "top-center" });
        }
        if (virtualTryIsError && virtualTryErrorMessage) {
            toast.error(virtualTryErrorMessage, { position: "top-center" });
        }
    }, [productIsError, productIsErrorMessage, virtualTryIsError, virtualTryErrorMessage]);

    // Handle successful virtual try-on
    useEffect(() => {
        if (virtualTryIsSuccess && virtualTryOn) {
            setShowTryOn(false);
            setShowResultModal(true);
            toast.success("Virtual try-on generated successfully!", { position: "top-center" });
        }
    }, [virtualTryIsSuccess, virtualTryOn]);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setActiveImg(color.mainImage);
        setSelectedSizes({});
    };

    const handleSizeToggle = (size) => {
        setSelectedSizes(prev => {
            const newSizes = { ...prev };
            if (newSizes[size]) {
                delete newSizes[size];
            } else {
                newSizes[size] = 1;
            }
            return newSizes;
        });
    };

    const updateSizeQuantity = (size, newQty) => {
        if (newQty < 1) return;

        const sizeObj = selectedColor.sizes.find(s => s.size === size);
        if (sizeObj && newQty > sizeObj.stock) {
            toast.warning(`Only ${sizeObj.stock} available for size ${size}`, { position: "top-center" });
            return;
        }

        setSelectedSizes(prev => ({
            ...prev,
            [size]: newQty
        }));
    };

    const handleAddToCartClick = () => {
        setShowModal(true);
    };

    const handleAddToCart = async () => {
        const selectedSizesList = Object.keys(selectedSizes);

        if (selectedSizesList.length === 0) {
            toast.warning("Please select at least one size", { position: "top-center" });
            return;
        }

        try {
            for (let size of selectedSizesList) {
                const cartData = {
                    productId: product._id,
                    colorName: selectedColor.colorName,
                    size: size,
                    qty: selectedSizes[size]
                };

                await dispatch(addItemcart(cartData)).unwrap();
            }

            toast.success("Added to cart successfully!", { position: "top-center" });
            navigate("/cart");
        } catch (err) {
            toast.error(err || "Failed to add to cart", { position: "top-center" });
        }
    };

    const closeTryOnModal = () => {
        setShowTryOn(false);
        setUploadedImage(null);
        setSelectedSampleImage(null);
        setFormData({ person_url: "", cloth_url: "", garment_des: product?.description || "" });
        dispatch(resetVirtualTry());
    };

    const closeResultModal = () => {
        setShowResultModal(false);
        dispatch(resetVirtualTry());
    };

    if (productIsLoading || virtualTryIsLoading) {
        return <Loader loadingMessage={virtualTryIsLoading ? "Generating Virtual Try-On..." : "Product Loading..."} />;
    }

    if (!product || !product._id) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Product not found</p>
            </div>
        );
    }

    if (!selectedColor) {
        return <Loader loadingMessage={"Loading product details..."} />;
    }

    const allImages = selectedColor.mainImage
        ? [selectedColor.mainImage, ...(selectedColor.images || [])]
        : [];

    return (
        <section className="bg-white py-8 lg:pt-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* LEFT — Gallery */}
                    <div className="space-y-6">
                        <div className="aspect-square rounded overflow-hidden relative bg-gray-100">
                            {activeImg ? (
                                <img src={activeImg} className="w-full h-full object-cover" alt={product.name} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    No image available
                                </div>
                            )}
                        </div>

                        {allImages.length > 0 && (
                            <div className="grid grid-cols-3 gap-4">
                                {allImages.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setActiveImg(img)}
                                        className={`aspect-square rounded overflow-hidden cursor-pointer border-2 ${activeImg === img ? "border-black" : "border-transparent"}`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt="" />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">
                            <h3 className="text-lg font-bold text-neutral-900 mb-4">Product Details</h3>
                            <div className="space-y-3">
                                <div className="flex">
                                    <span className="text-sm font-semibold text-gray-700 w-32">Brand:</span>
                                    <span className="text-sm text-gray-600">{product.brand}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-sm font-semibold text-gray-700 w-32">Categories:</span>
                                    <span className="text-sm text-gray-600">{product.categories?.join(", ")}</span>
                                </div>
                                <div className="flex">
                                    <span className="text-sm font-semibold text-gray-700 w-32">Available Colors:</span>
                                    <span className="text-sm text-gray-600">{product.colors?.length || 0}</span>
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
                            <span className="line-through text-gray-400 mr-3">₹{product.originalPrice}</span>
                            <span className="text-red-500">₹{product.salePrice}</span>
                        </p>
                        <p className="text-gray-600 my-4">
                            {product.description}
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="space-y-2 my-2">
                                <label className="font-semibold text-gray-700">Available Sizes</label>
                                <div className="flex gap-2">
                                    {selectedColor.sizes?.map((sizeObj) => (
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
                                    {product.colors?.map((color) => (
                                        <div
                                            key={color._id}
                                            onClick={() => handleColorChange(color)}
                                            className={`aspect-square rounded overflow-hidden cursor-pointer border-2 ${selectedColor._id === color._id ? "border-black" : "border-gray-300"}`}
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
                                    onClick={() => setShowTryOn(true)}
                                    className="bg-red-500 text-white px-6 py-2 w-full rounded hover:bg-red-600 transition"
                                >
                                    Virtual Try-On
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {user && <AddReviewForm pid={pid} />}
            <ProductReviews productReviews={productReviews} />

            {/* VIRTUAL TRY-ON UPLOAD MODAL */}
            {showTryOn && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                  bg-black/50 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="bg-gray-200 border-2 mt-2 pt-2 border-gray-300 rounded-3xl p-6 mb-8 max-w-lg">
                            <button type="button" onClick={closeTryOnModal} className="mx-1 my-2">
                                <X />
                            </button>
                            <div>
                                <div className="text-center mb-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4">
                                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Upload Your Photo for Virtual Try-On</h3>
                                    <p className="text-sm text-gray-600 mb-6">Front-facing photo works best for accurate results</p>
                                </div>

                                <div className="bg-white border-2 border-dashed rounded-2xl p-4 mb-4 text-center transition-colors cursor-pointer">
                                    {uploadedImage ? (
                                        <div className="w-full flex justify-center">
                                            <img
                                                src={uploadedImage}
                                                alt="Uploaded preview"
                                                className="w-48 h-48 object-cover rounded-xl"
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                id="upload-photo"
                                                name="person_url"
                                                onChange={(e) => {
                                                    handlePhotoUpload(e);
                                                    handleChange(e);
                                                }}
                                            />
                                            <label htmlFor="upload-photo" className="cursor-pointer block">
                                                <svg className="w-12 h-12 text-black mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                                <p className="text-sm font-medium text-neutral-900 mb-1">
                                                    Click to upload or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                            </label>
                                        </>
                                    )}
                                </div>

                                {selectedSampleImage && (
                                    <div className="mb-4 text-center">
                                        <p className="text-sm font-semibold mb-2">Selected Sample Model:</p>
                                        <img
                                            src={selectedSampleImage}
                                            className="w-24 h-24 mx-auto object-cover rounded-lg border-2 border-black"
                                            alt="Selected sample"
                                        />
                                    </div>
                                )}

                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowSampleModal(true)}
                                        className="flex-1 bg-white border-2 border-black text-black py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-md"
                                    >
                                        {selectedSampleImage ? "Change Sample" : "Select Sample Model"}
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={!person_url || !selectedSampleImage}
                                        className={`flex-1 py-3.5 rounded-xl font-semibold transition-all shadow-md ${!person_url || !selectedSampleImage
                                            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                            : "bg-black text-white hover:bg-gray-700"
                                            }`}
                                    >
                                        Upload & Try Virtually
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}

            {/* SAMPLE MODEL SELECTION MODAL */}
            {showSampleModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                  bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl max-w-lg w-full p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Choose Sample Model</h2>
                            <button
                                onClick={() => setShowSampleModal(false)}
                                className="hover:bg-gray-100 rounded-full p-1"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="grid grid-cols-4 gap-3">
                            {product.colors?.map((color) => (
                                <div
                                    key={color._id}
                                    onClick={() => {
                                        setSelectedSampleImage(color.mainImage);
                                        setShowSampleModal(false);
                                    }}
                                    className={`aspect-square rounded overflow-hidden cursor-pointer border-2 ${selectedSampleImage === color.mainImage ? "border-black" : "border-gray-300"}`}
                                >
                                    <img
                                        src={color.mainImage}
                                        className="w-full h-full object-cover"
                                        alt={color.colorName}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* VIRTUAL TRY-ON RESULT MODAL */}
            {showResultModal && virtualTryOn && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                  bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl max-w-3xl w-full p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Your Virtual Try-On Result</h2>
                            <button
                                onClick={closeResultModal}
                                className="hover:bg-gray-100 rounded-full p-1"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex justify-center mb-4">
                            <img
                                src={virtualTryOn.output_url}
                                alt="Virtual Try-On Result"
                                className="max-w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <p className="text-sm text-gray-600">
                                <strong>Remaining Credits:</strong> {virtualTryOn.credits}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    closeResultModal();
                                    setShowTryOn(true);
                                }}
                                className="flex-1 border-2 border-gray-300 py-3 rounded-lg hover:bg-gray-50"
                            >
                                Try Again
                            </button>
                            <button
                                onClick={closeResultModal}
                                className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ADD TO CART MODAL */}
            {showModal && selectedColor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4
                  bg-black/50 backdrop-blur-sm">
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
                                <p className="font-bold text-red-500">₹{product.salePrice}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Select Size(s) & Quantity</h3>
                            <div className="space-y-3">
                                {selectedColor.sizes?.map((sizeObj) => {
                                    const isSelected = selectedSizes[sizeObj.size];
                                    const isAvailable = sizeObj.stock > 0;

                                    return (
                                        <div key={sizeObj.size} className="border rounded-lg p-3">
                                            <div className="flex items-center justify-between">
                                                <button
                                                    onClick={() => isAvailable && handleSizeToggle(sizeObj.size)}
                                                    disabled={!isAvailable}
                                                    className={`px-4 py-2 rounded-lg border-2 font-medium transition ${!isAvailable
                                                        ? "border-gray-200 text-gray-300 cursor-not-allowed"
                                                        : isSelected
                                                            ? "border-black bg-black text-white"
                                                            : "border-gray-300 hover:border-black"
                                                        }`}
                                                >
                                                    {sizeObj.size}
                                                    {!isAvailable && " (Out)"}
                                                </button>

                                                {isSelected && (
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateSizeQuantity(sizeObj.size, selectedSizes[sizeObj.size] - 1)}
                                                            className="w-8 h-8 border rounded hover:bg-gray-100"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="text-lg font-semibold w-8 text-center">
                                                            {selectedSizes[sizeObj.size]}
                                                        </span>
                                                        <button
                                                            onClick={() => updateSizeQuantity(sizeObj.size, selectedSizes[sizeObj.size] + 1)}
                                                            className="w-8 h-8 border rounded hover:bg-gray-100"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                            {isAvailable && (
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {sizeObj.stock} available
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {Object.keys(selectedSizes).length > 0 && (
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <h4 className="font-semibold mb-2">Order Summary</h4>
                                <div className="space-y-1 text-sm">
                                    {Object.entries(selectedSizes).map(([size, qty]) => (
                                        <div key={size} className="flex justify-between">
                                            <span>{size} × {qty}</span>
                                            <span>₹{(product.salePrice * qty).toFixed(2)}</span>
                                        </div>
                                    ))}
                                    <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                                        <span>Total</span>
                                        <span>₹{Object.values(selectedSizes).reduce((sum, qty) => sum + (product.salePrice * qty), 0).toFixed(2)}</span>
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
                                onClick={handleAddToCart}
                                disabled={Object.keys(selectedSizes).length === 0}
                                className={`flex-1 py-3 rounded-lg transition ${Object.keys(selectedSizes).length === 0
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-black text-white hover:bg-gray-800"
                                    }`}
                            >
                                Add {Object.keys(selectedSizes).length > 0 && `(${Object.keys(selectedSizes).length})`}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SingleProduct;