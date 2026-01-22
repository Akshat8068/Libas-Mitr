
import  { useEffect, useState } from 'react'
import { User, Mail, Phone, MapPin, CreditCard, Package, Eye, X, ShoppingBag } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import OrderDetailsModal from '../components/OrderDetailsModal'
import CancelOrderModal from '../components/CancelOrderModal'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import { cancelMyOrder, getMyOrder, getMyOrders } from '../features/order/orderSlice'

const Profile = () => {

    const { user } = useSelector(state => state.auth)
    const { order,orders, orderIsLoading, orderIsSuccess, orderIsError, oderIsErrorMessage } = useSelector(state => state.order)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    

 

    const [showOrder, setShowOrder] = useState(false)
    const [showCancelOrder, setShowCancelOrder] = useState(false)
    const [cancleOrderID, setCancleOrderId] = useState(null)

    const handleShowOrder = (orderId) => {
        if (orderId) {
            dispatch(getMyOrder(orderId))
        }
        setShowOrder(!showOrder)
    }

    const handleCancelOrder = (orderId) => {
        setCancleOrderId(orderId)
        setShowCancelOrder(!showCancelOrder)
    }

    const cancleOrder = (orderId) => {
        dispatch(cancelMyOrder(orderId))
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'placed': return 'bg-blue-100 text-blue-700'
            case 'delivered': return 'bg-green-100 text-green-700'
            case 'cancelled': return 'bg-red-100 text-red-700'
            default: return 'bg-gray-100 text-gray-700'
        }
    }
    useEffect(() => {


        dispatch(getMyOrders())
        if (!user) {
            navigate("/login")
        }
        if ( orderIsError && oderIsErrorMessage) {
            toast.error(couponIsErrorMessage, { position: "top-center" })
            setCouponError(true)
        }
    }, [  orderIsError, oderIsErrorMessage,]);
    if (orderIsLoading) {
        <Loader loadingMessage={"Order is loading"} />
    }

    return (
        <div className="min-h-screen mt-8">

            {showOrder && <OrderDetailsModal handleShowOrder={handleShowOrder}  />}
            {showCancelOrder && <CancelOrderModal handleCancelOrder={handleCancelOrder} cancelOrderId={cancleOrderID}  />}

            <div className="max-w-7xl mx-auto px-4 py-12">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Account</h1>
                    <p className="text-gray-600">Manage your profile and track your orders</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* User Profile Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="h-32"></div>

                            <div className="px-6 pb-6">
                                <div className="flex justify-center -mt-16 mb-4">
                                    <div className="bg-white rounded-full p-2 shadow-lg">
                                        <div className="bg-black rounded-full p-4">
                                            <User className="w-16 h-16 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{user.name}</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center text-gray-700">
                                        <Mail className="w-5 h-5 mr-3 text-black" />
                                        <span className="text-sm">{user.email}</span>
                                    </div>

                                    <div className="flex items-center text-gray-700">
                                        <Phone className="w-5 h-5 mr-3 text-black" />
                                        <span className="text-sm">{user.phone}</span>
                                    </div>

                                    <div className="flex items-center text-gray-700">
                                        <MapPin className="w-5 h-5 mr-3 text-black" />
                                        <span className="text-sm">{user.address}</span>
                                    </div>
                                </div>

                                <div className="mt-6 bg-black   rounded-xl p-4 text-white">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <CreditCard className="w-5 h-5 mr-2" />
                                            <span className="text-sm font-medium">Virtual Try Credits</span>
                                        </div>
                                        <span className="text-2xl font-bold">{user.credits}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orders Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center mb-6">
                                <Package className="w-6 h-6 mr-2 text-black" />
                                <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>
                            </div>

                            <div className="space-y-4">
                                {orders.map(item => (
                                    <div key={item._id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Order ID</p>
                                                <p className="font-semibold text-gray-800">{item._id}</p>
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Order Date</p>
                                                <p className="font-medium text-gray-700">{new Date(item.createdAt).toLocaleDateString('en-IN')}</p>
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                                                <p className="font-bold text-gray-800">₹{item.TotalBillAmount}</p>
                                            </div>

                                            <div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                                                    {item.status.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 mt-4">
                                            <button
                                                onClick={() => handleShowOrder(item._id)}
                                                className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                                                <Eye className="w-4 h-4 mr-2" />
                                                View Details
                                            </button>

                                            {item.status === "placed" &&
                                                <button
                                                    onClick={() => handleCancelOrder(item._id)}
                                                    className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all text-sm font-medium">
                                                    <X className="w-4 h-4 mr-2" />
                                                    Cancel Order
                                                </button>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile