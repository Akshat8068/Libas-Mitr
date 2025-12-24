// src/pages/Products.tsx

import { Edit2, Trash2, Plus, Image } from 'lucide-react';
import Layout from '../components/Admin/Layout';

function AdminProducts() {
    return (
        <Layout activeMenu="products" pageTitle="Products">
            <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Add / Update Product</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        id="productName"
                                        placeholder="Enter product name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    >
                                        <option>Select category</option>
                                        <option>Men's Fashion</option>
                                        <option>Women's Fashion</option>
                                        <option>Accessories</option>
                                        <option>Shoes</option>
                                        <option>Bags</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        id="price"
                                        placeholder="0.00"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="stock" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        id="stock"
                                        placeholder="0"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    placeholder="Enter product description"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Product Image
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-violet-500 transition-colors">
                                    <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
                                    <input type="file" className="hidden" />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    className="px-6 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Product
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Update Product
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">All Products</h3>
                            <input
                                type="search"
                                placeholder="Search products..."
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Image</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Stock</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Classic Leather Jacket</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Men's Fashion</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">$299.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">45</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">In Stock</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Designer Handbag</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Bags</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">$459.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">23</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">In Stock</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Running Sneakers Pro</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Shoes</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">$149.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">0</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Out of Stock</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Silk Evening Dress</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Women's Fashion</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">$599.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">12</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Low Stock</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Luxury Watch Collection</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Accessories</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">$899.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">8</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Low Stock</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Denim Jacket Vintage</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Men's Fashion</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">$179.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">67</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">In Stock</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                        <p className="text-sm text-gray-600">Showing 1 to 6 of 1,245 products</p>
                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors">
                                1
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                2
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                3
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AdminProducts;