import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllOrders, orderUpdate } from '../../features/admin/adminSlice';
import { Loader } from 'lucide-react';
import { toast } from 'react-toastify';


const AdminOrders = () => {
    
    const { user } = useSelector(state => state.auth)
    const { adminIsLoading, adminIsSuccess, adminIsError, adminErrorMessage, allOrders } = useSelector(state => state.admin)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleOrderUpdate = (orderdetailes) => {
        dispatch(orderUpdate(orderdetailes))
    }
    useEffect(() => {
        if (!user) return
        if (!user.isAdmin) {
            navigate("/admin")
        }
        dispatch(getAllOrders())
        
    }, [user])
    useEffect(() => {
        if (adminIsError && adminErrorMessage) {
            toast.error(adminErrorMessage, { position: 'top-center' })
        }
    }, [adminErrorMessage, adminIsError])
    if (adminIsLoading) {
        return (
            <Loader loadingMessage={"Users Loading...."} />
        )
    }

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
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Total Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Shipped Address</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Payment Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                allOrders.map((order) => {
                                    return (
                                          <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">#{ order._id}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{order.user.name}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{order.products[0]?.product?.name}</td>
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-900">₹{order.TotalBillAmount}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">{order.shippingAddress }</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Failed</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select onChange={(e)=>{handleOrderUpdate({orderId:order._id,status:e.target.value})}} defaultValue={order.status} className="px-3 py-1 text-xs font-semibold rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500">
                                            <option value={"placed"}>Placed</option>
                                            <option value={"dispatched"}>Dispatched</option>
                                            <option value={"delivered"}>Delivered</option>
                                            <option selected value={"cancelled"}>Cancelled</option>
                                        </select>
                                    </td>
                                    
                                </tr>
                                    )
                                })
                            }
                        
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