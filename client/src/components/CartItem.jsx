import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCart, updateCart } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()

    // ✅ Now removes only specific variant
    const handleRemove = () => {
        dispatch(removeCart({
            productId: item.product._id,
            colorName: item.colorName,
            size: item.size
        }))
    }

    // ✅ Update quantity for specific variant
    const handleUpdateQuantity = async (newQty) => {
        if (newQty < 1) {
            dispatch(removeCart({
                productId: item.product._id,
                colorName: item.colorName,
                size: item.size
            }));
            return;
        }

        try {
            await dispatch(updateCart({
                productId: item.product._id,
                colorName: item.colorName,
                size: item.size,
                qty: newQty
            })).unwrap();
        } catch (err) {
            toast.error(err || "Failed to update quantity", { position: "top-center" });
        }
    }

    return (
        <tr className="border-t">
            <td className="p-4">
                <div className="flex gap-4">
                    <Link to={`/products/${item.product?._id}`}>
                        <img
                            src={item.colorMainImage}
                            className="w-20 h-20 rounded object-cover"
                            alt={item.product?.name}
                        />
                    </Link>
                    <div>
                        <Link
                            to={`/products/${item.product?._id}`}
                            className="font-semibold hover:underline cursor-pointer"
                        >
                            {item.product?.name}
                        </Link>
                        <div className="text-sm text-gray-600 flex gap-3 mt-1">
                            <span>Size: {item.size}</span>
                            <span className="flex gap-1 items-center">
                                Color: {item.colorName}
                            </span>
                        </div>
                    </div>
                </div>
            </td>

            <td className="p-4">₹{item.product?.salePrice}</td>

            <td className="p-4">
                <div className="flex gap-2 items-center">
                    <button
                        type="button"
                        onClick={() => handleUpdateQuantity(item.qty - 1)}
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                        −
                    </button>
                    <input
                        readOnly
                        value={item.qty}
                        className="w-10 text-center border rounded"
                    />
                    <button
                        type="button"
                        onClick={() => handleUpdateQuantity(item.qty + 1)}
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>
            </td>

            <td className="p-4 font-semibold">
                ₹{(item.product?.salePrice * item.qty).toFixed(2)}
            </td>

            <td className="p-4">
                <button
                    onClick={handleRemove}
                    type="button"
                    className="text-red-500 font-bold hover:text-red-700"
                >
                    X
                </button>
            </td>
        </tr>
    )
}

export default CartItem