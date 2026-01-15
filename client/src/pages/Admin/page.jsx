// src/pages/Products.tsx
import Layout from '../../components/Layout';
import React, { useEffect, useState } from 'react';
import { Edit2, Trash2, Plus, Image, Menu, X, Package, Users, ShoppingCart, DollarSign, BarChart3, XCircle, Upload } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../features/admin/adminSlice';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';



const AdminProduct = () => {

    const { user } = useSelector(state => state.auth)
    const { adminIsLoading, adminIsSuccess, adminIsError, adminErrorMessage, allProducts } = useSelector(state => state.admin)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) return
        if (!user.isAdmin) {
            navigate("/admin")
        }
        dispatch(getAllProducts())
        if (adminIsError && adminErrorMessage) {
            toast.error(adminErrorMessage, { position: 'top-center' })
        }
    }, [user, adminErrorMessage, adminIsError])

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        brand: '',
        categories: [],
        originalPrice: '',
        salePrice: '',
        colors: []
    });

    const [showColorSection, setShowColorSection] = useState(false);
    const [currentColor, setCurrentColor] = useState({
        colorName: '',
        mainImage: null,
        mainImageFile: null, // Store actual file
        images: [],
        imageFiles: [], // Store actual files
        sizes: [{ size: 'S', stock: 0 }]
    });
    const availableSizes = ["S", "M", "L", "XL", "2XL", "3XL"];
    const availableCategories = ["men", "women", "kids", "accessories"];
    const availableBrands = [
        "Adidas", "AllenSolly", "AmericanEagle", "BeingHuman", "Gucci",
        "HM", "JackJones", "Levis", "LouisVuitton", "Mufti",
        "Nike", "Prada", "PeterEngland", "Puma", "Versace"
    ];

    // Handle category toggle
    const toggleCategory = (category) => {
        setProductForm(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }));
    };

    // Add size to current color
    const addSizeToColor = () => {
        setCurrentColor(prev => ({
            ...prev,
            sizes: [...prev.sizes, { size: 'S', stock: 0 }]
        }));
    };

    // Remove size from current color
    const removeSizeFromColor = (index) => {
        setCurrentColor(prev => ({
            ...prev,
            sizes: prev.sizes.filter((_, i) => i !== index)
        }));
    };


    // Update size in current color
    const updateSize = (index, field, value) => {
        setCurrentColor(prev => ({
            ...prev,
            sizes: prev.sizes.map((size, i) =>
                i === index ? { ...size, [field]: value } : size
            )
        }));
    };
    // Add current color to product
    const addColorToProduct = () => {
        if (!currentColor.colorName) {
            toast.error('Please enter a color name');
            return;
        }

        // Validate that at least one size has stock
        const hasStock = currentColor.sizes.some(size => size.stock > 0);
        if (!hasStock) {
            toast.warning('Please add stock for at least one size');
        }

        setProductForm(prev => ({
            ...prev,
            colors: [...prev.colors, { ...currentColor }]
        }));

        toast.success(`${currentColor.colorName} color added!`);

        // Reset current color
        setCurrentColor({
            colorName: '',
            mainImage: null,
            mainImageFile: null,
            images: [],
            imageFiles: [],
            sizes: [{ size: 'S', stock: 0 }]
        });
    };

    // Remove color from product
    const removeColor = (index) => {
        setProductForm(prev => ({
            ...prev,
            colors: prev.colors.filter((_, i) => i !== index)
        }));
        toast.info('Color removed');
    };

    // Handle main image upload
    const handleMainImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Store the actual file for backend upload
            const reader = new FileReader();
            reader.onloadend = () => {
                setCurrentColor(prev => ({
                    ...prev,
                    mainImage: reader.result, // Preview
                    mainImageFile: file // Actual file for upload
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle multiple images upload
    const handleMultipleImagesUpload = (e) => {
        const files = Array.from(e.target.files);

        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCurrentColor(prev => ({
                    ...prev,
                    images: [...prev.images, reader.result], // Preview
                    imageFiles: [...prev.imageFiles, file] // Actual files for upload
                }));
            };
            reader.readAsDataURL(file);
        });
    };

    // Remove image from gallery
    const removeImage = (index) => {
        setCurrentColor(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index),
            imageFiles: prev.imageFiles.filter((_, i) => i !== index)
        }));
    };

    // Submit product
    const handleAddProduct = async () => {
        // Validation
        if (!productForm.name || !productForm.description || !productForm.brand ||
            !productForm.originalPrice || !productForm.salePrice) {
            toast.error('Please fill all basic fields including brand');
            return;
        }
        if (productForm.categories.length === 0) {
            toast.error('Please select at least one category');
            return;
        }
        if (productForm.colors.length === 0) {
            toast.error('Please add at least one color variant');
            return;
        }

        // Create FormData for multipart/form-data
        const formData = new FormData();

        // Add basic fields
        formData.append('name', productForm.name);
        formData.append('description', productForm.description);
        formData.append('brand', productForm.brand);
        formData.append('originalPrice', productForm.originalPrice);
        formData.append('salePrice', productForm.salePrice);
        formData.append('categories', JSON.stringify(productForm.categories));

        // Prepare colors data (without files)
        const colorsData = productForm.colors.map(color => ({
            colorName: color.colorName,
            sizes: color.sizes
        }));
        formData.append('colors', JSON.stringify(colorsData));

        // Add files for each color
        productForm.colors.forEach((color, index) => {
            // Add main image
            if (color.mainImageFile) {
                formData.append(`mainImage_${index}`, color.mainImageFile);
            }

            // Add multiple images
            if (color.imageFiles && color.imageFiles.length > 0) {
                color.imageFiles.forEach(file => {
                    formData.append(`images_${index}`, file);
                });
            }
        });

        console.log('Product to add:', productForm);
        // TODO: Dispatch action to add product
        // dispatch(addProduct(formData));

        toast.success('Product added successfully!');

        // Reset and close
        setProductForm({
            name: '',
            description: '',
            brand: '',
            categories: [],
            originalPrice: '',
            salePrice: '',
            colors: []
        });
        setShowColorSection(false);
        setIsModalOpen(false);
    };

    // Cancel and close modal
    const handleCancel = () => {
        setProductForm({
            name: '',
            description: '',
            brand: '',
            categories: [],
            originalPrice: '',
            salePrice: '',
            colors: []
        });
        setCurrentColor({
            colorName: '',
            mainImage: null,
            mainImageFile: null,
            images: [],
            imageFiles: [],
            sizes: [{ size: 'S', stock: 0 }]
        });
        setShowColorSection(false);
        setIsModalOpen(false);
    };
    if (adminIsLoading) {
        return (

            <Loader loadingMessage={"Admin Panel Loading...."} />
        )
    }
    return (
        <Layout activeMenu="products" pageTitle="Products">
            <div className="space-y-8">
                {/* Product List */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">All Products</h3>
                            <div className="flex items-center gap-3">
                                <input
                                    type="search"
                                    placeholder="Search products..."
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-6 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Brand</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Original Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Sale Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Total Stock</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {allProducts.map((product) => (
                                    <tr key={product._id} className="bg-cover bg-center transition-colors">
                                        <td className="px-6 py-4">
                                            <div style={{ backgroundImage: `url(${product.colors?.[0]?.mainImage})` }} className="w-16 h-16 rounded-lg bg-center bg-cover"></div>
                                        </td>


                                        <td className="px-6 py-4">
                                            <Link to={"/admin/products/:pid"}
                                                className="text-sm font-medium text-violet-600 hover:text-violet-800 hover:underline text-left"
                                            >
                                                {product.name}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {product.categories.join(', ')}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {product.brand}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                                            ₹{product.originalPrice}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                                            ₹{product.salePrice}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {product?.colors?.reduce(
                                                (total, color) =>
                                                    total + color.sizes.reduce((sum, size) => sum + size.stock, 0),
                                                0
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${product.isActive
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                                }`}>
                                                {product.isActive ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Link to={"/admin/products/:pid"}
                                                    className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"

                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-6 border-t border-gray-200 flex items-center justify-between">

                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors">
                                1
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Add Product Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                                <h3 className="text-xl font-bold text-gray-900">Add New Product</h3>
                                <button
                                    onClick={handleCancel}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <X className="w-6 h-6 text-gray-600" />
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Basic Information */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Basic Information</h4>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Product Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={productForm.name}
                                            onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                                            placeholder="Enter product name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Description *
                                        </label>
                                        <textarea
                                            value={productForm.description}
                                            onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                                            rows={3}
                                            placeholder="Enter product description"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                        />
                                    </div>
                                    {/* Brand Dropdown */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Brand *
                                        </label>
                                        <select
                                            value={productForm.brand}
                                            onChange={(e) => setProductForm({ ...productForm, brand: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                        >
                                            <option value="">Select a brand</option>
                                            {availableBrands.map((brand) => (
                                                <option key={brand} value={brand}>
                                                    {brand}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Categories * (Select one or more)
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {availableCategories.map((cat) => (
                                                <button
                                                    key={cat}
                                                    type="button"
                                                    onClick={() => toggleCategory(cat)}
                                                    className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${productForm.categories.includes(cat)
                                                        ? 'border-violet-600 bg-violet-50 text-violet-700'
                                                        : 'border-gray-300 bg-white text-gray-700 hover:border-violet-300'
                                                        }`}
                                                >
                                                    {cat}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Original Price *
                                            </label>
                                            <input
                                                type="number"
                                                value={productForm.originalPrice}
                                                onChange={(e) => setProductForm({ ...productForm, originalPrice: e.target.value })}
                                                placeholder="0.00"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Sale Price *
                                            </label>
                                            <input
                                                type="number"
                                                value={productForm.salePrice}
                                                onChange={(e) => setProductForm({ ...productForm, salePrice: e.target.value })}
                                                placeholder="0.00"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Add Details Button */}
                                {!showColorSection && (
                                    <button
                                        type="button"
                                        onClick={() => setShowColorSection(true)}
                                        className="w-full px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
                                    >
                                        Add Details (Colors & Sizes)
                                    </button>
                                )}

                                {/* Color & Size Details Section */}
                                {showColorSection && (
                                    <div className="space-y-6 border-t pt-6">
                                        <h4 className="text-lg font-semibold text-gray-900">Color & Size Details</h4>

                                        {/* Current Color Being Added */}
                                        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                                            <h5 className="font-semibold text-gray-800">Add Color Variant</h5>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Color Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={currentColor.colorName}
                                                    onChange={(e) => setCurrentColor({ ...currentColor, colorName: e.target.value })}
                                                    placeholder="e.g., Red, Blue, Navy"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                                />
                                            </div>

                                            {/* Main Image Upload */}
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Main Image (VTON Image)
                                                </label>
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-violet-500 transition-colors">
                                                    {currentColor.mainImage ? (
                                                        <div className="relative inline-block">
                                                            <img src={currentColor.mainImage} alt="Main" className="w-32 h-32 object-cover rounded-lg" />
                                                            <button
                                                                onClick={() => setCurrentColor({ ...currentColor, mainImage: null })}
                                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                                            >
                                                                <XCircle className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                            <p className="text-sm text-gray-600">Upload Main Image</p>
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                onChange={handleMainImageUpload}
                                                                className="hidden"
                                                                id="mainImage"
                                                            />
                                                            <label htmlFor="mainImage" className="mt-2 inline-block px-4 py-2 bg-violet-600 text-white rounded-lg cursor-pointer hover:bg-violet-700">
                                                                Choose File
                                                            </label>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Multiple Images Upload */}
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Product Images (Multiple)
                                                </label>
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {currentColor.images.map((img, idx) => (
                                                            <div key={idx} className="relative">
                                                                <img src={img} alt={`Product ${idx}`} className="w-20 h-20 object-cover rounded-lg" />
                                                                <button
                                                                    onClick={() => removeImage(idx)}
                                                                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1"
                                                                >
                                                                    <XCircle className="w-3 h-3" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        multiple
                                                        onChange={handleMultipleImagesUpload}
                                                        className="hidden"
                                                        id="productImages"
                                                    />
                                                    <label htmlFor="productImages" className="inline-block px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700">
                                                        Add Images
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Sizes */}
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Sizes & Stock
                                                </label>
                                                <div className="space-y-2">
                                                    {currentColor.sizes.map((sizeItem, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <select
                                                                value={sizeItem.size}
                                                                onChange={(e) => updateSize(idx, 'size', e.target.value)}
                                                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                                            >
                                                                {availableSizes.map(size => (
                                                                    <option key={size} value={size}>{size}</option>
                                                                ))}
                                                            </select>
                                                            <input
                                                                type="number"
                                                                value={sizeItem.stock}
                                                                onChange={(e) => updateSize(idx, 'stock', parseInt(e.target.value) || 0)}
                                                                placeholder="Stock"
                                                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                                            />
                                                            {currentColor.sizes.length > 1 && (
                                                                <button
                                                                    onClick={() => removeSizeFromColor(idx)}
                                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                                                >
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            )}
                                                        </div>
                                                    ))}
                                                    <button
                                                        type="button"
                                                        onClick={addSizeToColor}
                                                        className="text-sm text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1"
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                        Add More Size
                                                    </button>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={addColorToProduct}
                                                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                                            >
                                                Save This Color
                                            </button>
                                        </div>

                                        {/* Added Colors List */}
                                        {productForm.colors.length > 0 && (
                                            <div className="space-y-2">
                                                <h5 className="font-semibold text-gray-800">Added Colors ({productForm.colors.length})</h5>
                                                {productForm.colors.map((color, idx) => (
                                                    <div key={idx} className="flex items-center justify-between bg-white border border-gray-200 p-3 rounded-lg">
                                                        <div className="flex items-center gap-3">
                                                            {color.mainImage && (
                                                                <img src={color.mainImage} alt={color.colorName} className="w-12 h-12 object-cover rounded" />
                                                            )}
                                                            <div>
                                                                <p className="font-medium text-gray-900">{color.colorName}</p>
                                                                <p className="text-sm text-gray-500">
                                                                    {color.sizes.length} size(s), {color.images.length} image(s)
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => removeColor(idx)}
                                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleAddProduct}
                                    className="px-6 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default AdminProduct