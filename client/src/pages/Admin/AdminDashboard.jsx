// src/pages/Dashboard.tsx
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { Users, Package, ShoppingCart, Tag, TrendingUp, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { getAllOrders, getAllUsers } from '../../features/admin/adminSlice';

function Dashboard() {

    const { user } = useSelector(state => state.auth)
    const { adminIsLoading, adminIsSuccess, adminIsError, adminErrorMessage, allProducts, allOrders, allUsers, allCoupons } = useSelector(state => state.admin)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user) return
        if (!user.isAdmin) {
            navigate("/admin")
        }
        dispatch(getAllUsers())
        dispatch(getAllOrders())
        if (adminIsError && adminErrorMessage) {
    toast.error(adminErrorMessage,{position:'top-center'})
}

       

    }, [user,adminErrorMessage,adminIsError])
    if (adminIsLoading) {
        return (
            <Loader loadingMessage={"Admin Panel Loading...."} />
        )
    }


    return (
        <Layout activeMenu="dashboard" pageTitle="Dashboard">
            <div className="space-y-8">
                <div className="grid grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <Users className="w-6 h-6 text-violet-600" />
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">Total Users</h3>
                        <p className="text-3xl font-bold text-gray-900">{allUsers.length}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <Package className="w-6 h-6 text-violet-600" />
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">Total Products</h3>
                        <p className="text-3xl font-bold text-gray-900">{allProducts.length}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <ShoppingCart className="w-6 h-6 text-violet-600" />
                            </div>
                            <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">Total Orders</h3>
                        <p className="text-3xl font-bold text-gray-900">{allOrders.length}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center">
                                <Tag className="w-6 h-6 text-violet-600" />
                            </div>
                            <Clock className="w-5 h-5 text-violet-500" />
                        </div>
                        <h3 className="text-gray-600 text-sm font-medium mb-1">Active Coupons</h3>
                        <p className="text-3xl font-bold text-gray-900">{allCoupons.length}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-md border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-900">#ORD-1047</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">Sarah Johnson</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">$284.50</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-900">#ORD-1046</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">Michael Chen</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">$532.00</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Processing</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-900">#ORD-1045</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">Emily Rodriguez</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">$195.75</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-900">#ORD-1044</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">David Kim</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">$417.25</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Delivered</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-gray-900">#ORD-1043</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">Anna Thompson</td>
                                        <td className="px-6 py-4 text-sm text-gray-900">$348.90</td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-violet-100 text-violet-800">Processing</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900">Recent Users</h3>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {
                                    allUsers.map((user) => {
                                        return (
                                            <div key={user._id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                                                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-violet-600 font-semibold">{user.name[0]}</span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                                                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                                </div>
                                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;