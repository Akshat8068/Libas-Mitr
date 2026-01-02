// src/pages/Orders.tsx
import Layout from '../../components/Layout';
import { Package } from 'lucide-react';

const AdminOrders=() =>{
    return (
        <Layout activeMenu="orders" pageTitle="Orders">
            <div className="bg-white rounded-xl shadow-md border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">All Orders</h3>
                        <input
                            type="search"
                            placeholder="Search orders..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">User</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Total Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Payment Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1047</td>
                                <td className="px-6 py-4 text-sm text-gray-900">Sarah Johnson</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$284.50</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option>Pending</option>
                                        <option>Processing</option>
                                        <option>Shipped</option>
                                        <option selected>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1046</td>
                                <td className="px-6 py-4 text-sm text-gray-900">Michael Chen</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$532.00</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option>Pending</option>
                                        <option selected>Processing</option>
                                        <option>Shipped</option>
                                        <option>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1045</td>
                                <td className="px-6 py-4 text-sm text-gray-900">Emily Rodriguez</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$195.75</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option selected>Pending</option>
                                        <option>Processing</option>
                                        <option>Shipped</option>
                                        <option>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1044</td>
                                <td className="px-6 py-4 text-sm text-gray-900">David Kim</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$417.25</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option>Pending</option>
                                        <option>Processing</option>
                                        <option>Shipped</option>
                                        <option selected>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1043</td>
                                <td className="px-6 py-4 text-sm text-gray-900">Anna Thompson</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$348.90</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option>Pending</option>
                                        <option selected>Processing</option>
                                        <option>Shipped</option>
                                        <option>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1042</td>
                                <td className="px-6 py-4 text-sm text-gray-900">James Wilson</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$672.30</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option>Pending</option>
                                        <option>Processing</option>
                                        <option selected>Shipped</option>
                                        <option>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1041</td>
                                <td className="px-6 py-4 text-sm text-gray-900">Lisa Martinez</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$823.45</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Paid</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option>Pending</option>
                                        <option>Processing</option>
                                        <option>Shipped</option>
                                        <option selected>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">#ORD-1040</td>
                                <td className="px-6 py-4 text-sm text-gray-900">Robert Anderson</td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-900">$129.99</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Failed</span>
                                </td>
                                <td className="px-6 py-4">
                                    <select className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                        <option>Pending</option>
                                        <option>Processing</option>
                                        <option>Shipped</option>
                                        <option>Delivered</option>
                                        <option selected>Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-xs font-semibold hover:bg-violet-700 transition-colors">
                                        Update Order
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Showing 1 to 8 of 8,392 orders</p>
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

export default AdminOrders