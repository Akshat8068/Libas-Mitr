// src/pages/Users.tsx
import Layout from '../../components/Layout';
import { Eye, Ban } from 'lucide-react';

const AdminUsers=()=> {
    return (
        <Layout activeMenu="users" pageTitle="Users">
            <div className="bg-white rounded-xl shadow-md border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-gray-900">All Users</h3>
                        <input
                            type="search"
                            placeholder="Search users..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">User ID</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1001</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Sarah Johnson</td>
                                <td className="px-6 py-4 text-sm text-gray-600">sarah.j@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1002</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Michael Chen</td>
                                <td className="px-6 py-4 text-sm text-gray-600">m.chen@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1003</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Emily Rodriguez</td>
                                <td className="px-6 py-4 text-sm text-gray-600">emily.r@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1004</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">David Kim</td>
                                <td className="px-6 py-4 text-sm text-gray-600">david.kim@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">Admin</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1005</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Anna Thompson</td>
                                <td className="px-6 py-4 text-sm text-gray-600">anna.t@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Blocked</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1006</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">James Wilson</td>
                                <td className="px-6 py-4 text-sm text-gray-600">james.w@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1007</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Lisa Martinez</td>
                                <td className="px-6 py-4 text-sm text-gray-600">lisa.m@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-900">#USR-1008</td>
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">Robert Anderson</td>
                                <td className="px-6 py-4 text-sm text-gray-600">robert.a@email.com</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Customer</span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="p-6 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Showing 1 to 8 of 2,847 users</p>
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

export default AdminUsers