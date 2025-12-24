// src/pages/Dashboard.tsx

import {
    Users,
    Package,
    ShoppingCart,
    Tag,
    TrendingUp,
    Clock,
} from "lucide-react";
import Layout from "../components/Admin/Layout";


const AdminDashboard=()=> {
    return (
        <Layout>
            <div className="space-y-8">
                {/* Top Stats */}
                <div className="grid grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <Users className="w-6 h-6 text-violet-600" />
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">
                            Total Users
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">1,248</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <Package className="w-6 h-6 text-violet-600" />
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">
                            Total Products
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">342</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <ShoppingCart className="w-6 h-6 text-violet-600" />
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">
                            Total Orders
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">896</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <Tag className="w-6 h-6 text-violet-600" />
                            </div>
                            <Clock className="w-5 h-5 text-violet-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">
                            Active Coupons
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">18</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Recent Orders */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">
                                Recent Orders
                            </h3>
                        </div>

                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Order ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Customer
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Amount
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm">#ORD-1047</td>
                                    <td className="px-6 py-4 text-sm">Sarah Johnson</td>
                                    <td className="px-6 py-4 text-sm">$284.50</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                            Delivered
                                        </span>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm">#ORD-1046</td>
                                    <td className="px-6 py-4 text-sm">Michael Chen</td>
                                    <td className="px-6 py-4 text-sm">$532.00</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs rounded-full bg-violet-100 text-violet-800">
                                            Processing
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Recent Users */}
                    <div className="bg-white rounded-xl shadow-md border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">
                                Recent Users
                            </h3>
                        </div>

                        <div className="p-6 space-y-4">
                            {["Akshat Yadav", "Rohit Sharma", "Neha Patel"].map(
                                (name, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                                            <span className="text-violet-600 font-semibold">
                                                {name[0]}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-gray-900">
                                                {name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                user@email.com
                                            </p>
                                        </div>

                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AdminDashboard;
