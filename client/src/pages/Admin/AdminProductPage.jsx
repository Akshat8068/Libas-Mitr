import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Calendar, Clock, Tag, Package, Palette, ArrowLeft } from "lucide-react";

const AdminProductPage = () => {
    // Sample product data
    const product = {
        "_id": "695cdf40db7e89eb1973ac1e",
        "name": "Blue Main",
        "description": "Men Slim Colour Shirt",
        "categories": ["men"],
        "originalPrice": 250,
        "salePrice": 179,
        "colors": [
            {
                "colorName": "Red",
                "mainImage": "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694121/vall4bgtcb9v9altcqvj.jpg",
                "images": [
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694122/gbvfuaddczjvzeyv5sak.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694123/oqdaqter3dkbeui1s02q.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694124/ktnp01pokra6cwmdwgwc.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694125/fsxf1nndshdl1ofhnxsl.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694126/efazwhe7rxvclroz9hfp.jpg"
                ],
                "sizes": [
                    { "size": "M", "stock": 10, "_id": "695de6c2bb1f94ea9142d4d3" },
                    { "size": "L", "stock": 51, "_id": "695de6c2bb1f94ea9142d4d4" }
                ],
                "_id": "695cdf40db7e89eb1973ac1f"
            },
            {
                "colorName": "Blue",
                "mainImage": "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694127/otmpbmxyaausaumdy518.jpg",
                "images": [
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694128/zo1jaycitmqyxmi5ca4c.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694129/ulqu1jynerjv7pikap9p.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694130/lxnmnxoxileprjpir4c7.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694131/qhiuczg4rfifh8aombwg.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694132/rsqlmuaa29izaive4pns.jpg"
                ],
                "sizes": [
                    { "size": "M", "stock": 8, "_id": "695de6c2bb1f94ea9142d4d6" },
                    { "size": "L", "stock": 3, "_id": "695de6c2bb1f94ea9142d4d7" }
                ],
                "_id": "695cdf40db7e89eb1973ac22"
            },
            {
                "colorName": "Green",
                "mainImage": "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694133/wcetkbfvmx7mvogk25cj.jpg",
                "images": [
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694134/uyivm5ipof6fyjkxrdak.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694135/qa3gksd41twehm2egzuw.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694136/fr1pwuypuexkte4pp3ii.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694137/enth67tmgutfqgmpr49j.jpg",
                    "https://res.cloudinary.com/dl77ftllk/image/upload/v1767694138/m525lvs5vjj52bleplrl.jpg"
                ],
                "sizes": [
                    { "size": "M", "stock": 6, "_id": "695de6c2bb1f94ea9142d4d9" },
                    { "size": "L", "stock": 4, "_id": "695de6c2bb1f94ea9142d4da" }
                ],
                "_id": "695cdf40db7e89eb1973ac25"
            }
        ],
        "isActive": true,
        "createdAt": "2026-01-06T10:09:04.649Z",
        "updatedAt": "2026-01-07T04:53:22.178Z"
    };

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [activeImg, setActiveImg] = useState(selectedColor.mainImage);
    const navigate = useNavigate();

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setActiveImg(color.mainImage);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <section className="bg-gray-50 min-h-screen py-8">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 mb-4">
                <button
                    onClick={() => navigate('/admin/products')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
                >
                    <ArrowLeft size={20} />
                    <span className="font-medium">Back to Products</span>
                </button>
            </div>

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Admin</span>
                    <ChevronRight size={16} />
                    <span>Products</span>
                    <ChevronRight size={16} />
                    <span className="text-gray-900 font-medium">{product.name}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-6">
                    {/* LEFT SIDEBAR - Product Metadata */}
                    <div className="lg:col-span-3 space-y-4">
                        {/* Status Card */}
                        <div className="bg-white rounded-lg shadow-sm p-5">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product Status</h3>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${product.isActive
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                    }`}>
                                    {product.isActive ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                        </div>

                        {/* Timestamps Card */}
                        <div className="bg-white rounded-lg shadow-sm p-5">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Timeline</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Calendar className="text-blue-500 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Created</p>
                                        <p className="text-sm text-gray-900 font-medium">
                                            {formatDate(product.createdAt)}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="text-green-500 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Last Updated</p>
                                        <p className="text-sm text-gray-900 font-medium">
                                            {formatDate(product.updatedAt)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Categories Card */}
                        <div className="bg-white rounded-lg shadow-sm p-5">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Tag size={16} />
                                Categories
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {product.categories.map((cat, i) => (
                                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium capitalize">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Total Colors Card */}
                        <div className="bg-white rounded-lg shadow-sm p-5">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <Palette size={16} />
                                Available Colors
                            </h3>
                            <p className="text-2xl font-bold text-gray-900">{product.colors.length}</p>
                        </div>
                    </div>

                    {/* MIDDLE - Gallery */}
                    <div className="lg:col-span-5 space-y-4">
                        {/* Main Image */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                <img
                                    src={activeImg}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="bg-white rounded-lg shadow-sm p-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">All Images ({selectedColor.colorName})</h4>
                            <div className="grid grid-cols-5 gap-3">
                                {selectedColor.images.map((img, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setActiveImg(img)}
                                        className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition ${activeImg === img ? 'border-blue-500' : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                    >
                                        <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Product Details */}
                    <div className="lg:col-span-4 space-y-4">
                        {/* Basic Info Card */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl font-bold text-gray-900">${product.salePrice}</span>
                                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                                <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-sm font-semibold">
                                    {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}% OFF
                                </span>
                            </div>

                            <div className="border-t pt-4">
                                <p className="text-xs text-gray-500 mb-1">Product ID</p>
                                <p className="text-sm font-mono text-gray-700">{product._id}</p>
                            </div>
                        </div>

                        {/* Color Variants Card */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Color Variants</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {product.colors.map((color) => (
                                    <div
                                        key={color._id}
                                        onClick={() => handleColorChange(color)}
                                        className={`cursor-pointer rounded-lg overflow-hidden border-2 transition ${selectedColor._id === color._id
                                                ? 'border-blue-500 shadow-md'
                                                : 'border-gray-200 hover:border-gray-400'
                                            }`}
                                    >
                                        <div className="aspect-square">
                                            <img
                                                src={color.mainImage}
                                                alt={color.colorName}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-2 bg-gray-50">
                                            <p className="text-xs font-medium text-gray-900 text-center">{color.colorName}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stock Information Card */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Package size={16} />
                                Stock Information - {selectedColor.colorName}
                            </h3>
                            <div className="space-y-3">
                                {selectedColor.sizes.map((sizeObj) => (
                                    <div
                                        key={sizeObj._id}
                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded font-semibold text-sm">
                                                {sizeObj.size}
                                            </span>
                                            <span className="text-sm text-gray-600">Size</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-900">{sizeObj.stock}</p>
                                            <p className="text-xs text-gray-500">in stock</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Total Stock for this color */}
                            <div className="mt-4 pt-4 border-t">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-gray-700">Total Stock ({selectedColor.colorName})</span>
                                    <span className="text-xl font-bold text-blue-600">
                                        {selectedColor.sizes.reduce((acc, s) => acc + s.stock, 0)} units
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex gap-3">
                                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                    Edit Product
                                </button>
                                <button className="px-6 bg-red-50 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-100 transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminProductPage;