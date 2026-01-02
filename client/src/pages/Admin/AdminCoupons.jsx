// src/pages/Coupons.tsx
import Layout from '../../components/Layout';
import { Plus, Ban } from 'lucide-react';

const AdminCoupons=()=> {
    return (
        <Layout activeMenu="coupons" pageTitle="Coupons">
            <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Create Coupon</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="couponCode" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Coupon Code
                                    </label>
                                    <input
                                        type="text"
                                        id="couponCode"
                                        placeholder="e.g., SUMMER2024"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="discount" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Discount Percentage
                                    </label>
                                    <input
                                        type="number"
                                        id="discount"
                                        placeholder="0"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="date"
                                        id="expiryDate"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="minOrder" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Minimum Order Amount
                                    </label>
                                    <input
                                        type="number"
                                        id="minOrder"
                                        placeholder="0.00"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="button"
                                    className="px-6 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors flex items-center gap-2"
                                >
                                    <Plus className="w-4 h-4" />
                                    Create Coupon
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-gray-900">All Coupons</h3>
                            <input
                                type="search"
                                placeholder="Search coupons..."
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Code</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Discount</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Min Order</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Expiry Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">SUMMER2024</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">25%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$100.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2024-08-31</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">NEWYEAR15</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">15%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$50.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2024-02-15</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Expired</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">WELCOME10</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">10%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$0.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2024-12-31</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">FLASH50</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">50%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$200.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2024-03-01</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">SPRING20</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">20%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$75.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2024-05-31</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">BLACKFRIDAY30</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">30%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$150.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2023-11-30</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Expired</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">LOYALTY5</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">5%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$0.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2025-12-31</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">VIP40</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">40%</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">$500.00</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">2024-12-31</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                                            <Ban className="w-4 h-4" />
                                            Disable
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                        <p className="text-sm text-gray-600">Showing 1 to 8 of 32 coupons</p>
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
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AdminCoupons