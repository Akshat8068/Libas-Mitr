import React from 'react'
import { User, Mail, Phone, MapPin, CreditCard, Package, Eye, X, ShoppingBag } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { cancelMyOrder } from '../features/order/orderSlice'
import { toast } from 'react-toastify'

const CancelOrderModal = ({ handleCancelOrder, cancelOrderId }) => {
    const dispatch =useDispatch()
    const cancleOrder = (orderId) => {
        dispatch(cancelMyOrder(orderId))
        handleCancelOrder(null)
        toast.success("Order Cancle")
        }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                <div className="text-center mb-6">
                    <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <X className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Cancel Order</h2>
                    <p className="text-gray-600">Are you sure you want to cancel this order?</p>
                    <p className="text-sm text-gray-500 mt-2">Order ID: <span className="font-semibold">{cancelOrderId}</span></p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => handleCancelOrder(null)}
                        className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                        Keep Order
                    </button>

                    <button
                        onClick={()=>cancleOrder(cancelOrderId)}
                        className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                        Yes, Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CancelOrderModal
