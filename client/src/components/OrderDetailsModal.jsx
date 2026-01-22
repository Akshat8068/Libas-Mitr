import React, { useEffect } from 'react'
import { X, ShoppingBag, Loader2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const OrderDetailsModal = ({ handleShowOrder }) => {
    const { order, orderIsLoading, orderIsError, orderIsErrorMessage } = useSelector(state => state.order)

    useEffect(() => {
        if (orderIsError && orderIsErrorMessage) {
            toast.error(orderIsErrorMessage, { position: "top-center" })
        }
    }, [orderIsError, orderIsErrorMessage])

    // Show loading state
    if (orderIsLoading) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-8">
                    <div className="flex flex-col items-center">
                        <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
                        <p className="mt-4 text-gray-700">Loading order details...</p>
                    </div>
                </div>
            </div>
        )
    }

    // Check if order data exists and has the correct structure
    if (!order || !order.myOrder) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl p-8">
                    <p className="text-red-600 mb-4">No order data available</p>
                    <button
                        onClick={() => handleShowOrder(null)}
                        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    }

    const orderData = order.myOrder

    // Calculate subtotal
    const subTotal = orderData.products?.reduce((acc, item) => {
        return acc + (item.product?.salePrice || 0) * item.qty
    }, 0) || 0

    return (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

                <div className="sticky top-0 bg-black text-white p-6 rounded-t-2xl z-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold">Order Details</h2>
                            <p className="text-gray-300 text-sm mt-1">#{orderData._id}</p>
                        </div>
                        <button
                            onClick={() => handleShowOrder(null)}
                            className="bg-white text-black bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-purple-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Status</p>
                            <p className="font-semibold text-gray-800 capitalize">{orderData.status}</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600 mb-1">Shipping Address</p>
                            <p className="font-semibold text-gray-800">{orderData.shippingAddress}</p>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <ShoppingBag className="w-5 h-5 mr-2 text-purple-600" />
                        Items in Order
                    </h3>

                    <div className="space-y-3 mb-6">
                        {orderData.products?.map((item, index) => (
                            <div key={index} className="flex items-center border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                                <img
                                    src={item.colorMainImage || item.product?.image || 'https://via.placeholder.com/150'}
                                    alt={item.product?.name || 'Product'}
                                    className="w-20 h-20 object-cover rounded-lg mr-4"
                                />

                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800">{item.product?.name || 'Product Name'}</h4>
                                    <p className="text-sm text-gray-600">Color: {item.colorName}</p>
                                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                                    <p className="text-sm text-gray-600">Quantity: {item.qty}</p>
                                </div>

                                <div className="text-right">
                                    <p className="font-bold text-gray-800">₹{item.product?.salePrice || 0}</p>
                                    <p className="text-sm text-gray-500">× {item.qty}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-800">₹{subTotal}</span>
                        </div>
                        {orderData.isDiscounted && (
                            <div className="flex justify-between mb-2 text-green-600">
                                <span>Discount Applied</span>
                                <span>-₹{subTotal - orderData.TotalBillAmount}</span>
                            </div>
                        )}
                        <div className="flex justify-between text-lg font-bold">
                            <span className="text-gray-800">Total</span>
                            <span className="text-purple-600">₹{orderData.TotalBillAmount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsModal