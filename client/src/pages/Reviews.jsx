// src/pages/Reviews.tsx
import Layout from '../components/Admin/Layout';
import { Star, Trash2 } from 'lucide-react';

function Reviews() {
    return (
        <Layout activeMenu="reviews" pageTitle="Reviews">
            <div className="bg-white rounded-xl shadow-md border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">All Product Reviews</h3>
                        <input
                            type="search"
                            placeholder="Search reviews..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Product Name</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">User</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Rating</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Comment</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Classic Leather Jacket</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Sarah Johnson</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">5.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Absolutely love this jacket! The quality is outstanding and fits perfectly.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-15</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Designer Handbag</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Emily Rodriguez</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 text-gray-300" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">4.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Beautiful bag, but a bit pricey. Overall satisfied with the purchase.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-14</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Running Sneakers Pro</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Michael Chen</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 text-gray-300" />
                                        <Star className="w-4 h-4 text-gray-300" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">3.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Decent shoes but sizing runs small. Had to return and exchange.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-13</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Silk Evening Dress</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Lisa Martinez</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">5.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Stunning dress! Received so many compliments at the event.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-12</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Luxury Watch Collection</td>
                                <td className="px-6 py-4 text-sm text-gray-600">David Kim</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 text-gray-300" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">4.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Great watch with excellent craftsmanship. Worth the investment.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-11</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Denim Jacket Vintage</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Anna Thompson</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">5.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Perfect vintage look! The fit and fabric quality exceeded expectations.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-10</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Classic Leather Jacket</td>
                                <td className="px-6 py-4 text-sm text-gray-600">James Wilson</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 text-gray-300" />
                                        <Star className="w-4 h-4 text-gray-300" />
                                        <Star className="w-4 h-4 text-gray-300" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">2.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Not what I expected. The leather feels different from the description.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-09</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Designer Handbag</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Robert Anderson</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="ml-2 text-sm font-semibold text-gray-900">5.0</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                    Bought this as a gift for my wife. She absolutely loves it!
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">2024-01-08</td>
                                <td className="px-6 py-4">
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Showing 1 to 8 of 1,892 reviews</p>
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
        </Layout>
    );
}

export default Reviews;