import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const CartSidebar = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cart);

    // Get cart items from Redux
    const items = cart?.products || [];

    // Calculate totals
    const subtotal = items.reduce((sum, item) => {
        const price = item.product?.salePrice || 0;
        const quantity = item.qty || 0;
        return sum + (price * quantity);
    }, 0);

    const grandTotal = subtotal;

    if (!isOpen) return null;

    const handleViewCart = () => {
        setIsOpen(false);
        navigate("/cart");
    };

    const handleCheckout = () => {
        setIsOpen(false);
        navigate("/order");
    };

    const handleRemove = async (item) => {
        try {
            await dispatch(removeCart({
                productId: item.product._id,
                colorName: item.colorName,
                size: item.size
            })).unwrap();
            toast.success("Item removed from cart", { position: "top-center" });
        } catch (error) {
            toast.error(error || "Failed to remove item", { position: "top-center" });
        }
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/30 z-40"
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <aside className="fixed top-0 right-0 w-full sm:w-[420px] h-screen bg-white shadow-2xl z-50 flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-bold tracking-wide">Your Cart</h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-500 hover:text-black text-2xl leading-none cursor-pointer"
                    >
                        ×
                    </button>
                </div>

                {/* Cart Content */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <p className="text-gray-500 mb-4">Your cart is empty</p>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate("/products");
                                }}
                                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <ul className="space-y-5">
                            {items.map((item, index) => (
                                <li key={`${item.product?._id}-${item.colorName}-${item.size}-${index}`} className="flex gap-4">

                                    {/* Image wrapper */}
                                    <div className="relative w-20 h-24 rounded overflow-hidden group">
                                        <img
                                            src={item.colorMainImage}
                                            alt={item.product?.name}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Hover X Button */}
                                        <button
                                            onClick={() => handleRemove(item)}
                                            className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-lg"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    {/* Details */}
                                    <div className="flex flex-col justify-evenly flex-1">
                                        <Link
                                            to={`/products/${item.product?._id}`}
                                            onClick={() => setIsOpen(false)}
                                            className="font-medium hover:text-red-500 transition cursor-pointer"
                                        >
                                            {item.product?.name}
                                        </Link>

                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            {item.size && (
                                                <span className="text-gray-800 py-1 px-2 border border-gray-500 rounded-sm font-medium">
                                                    {item.size}
                                                </span>
                                            )}
                                            {item.colorName && (
                                                <span className="text-xs text-gray-600">
                                                    {item.colorName}
                                                </span>
                                            )}
                                        </div>

                                        <span className="text-sm text-gray-600">
                                            {item.qty} x ₹{item.product?.salePrice}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Total + Buttons */}
                {items.length > 0 && (
                    <div className="border-t px-6 py-5 space-y-4">

                        <div className="text-lg font-semibold flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{grandTotal.toFixed(2)}</span>
                        </div>

                        <div className="flex w-full gap-3 mt-4">
                            <button
                                onClick={handleViewCart}
                                className="flex-1 h-11 border border-gray-300 text-gray-800 text-sm font-semibold tracking-wide uppercase rounded-none hover:bg-gray-900 hover:text-white transition"
                            >
                                View Cart
                            </button>
                            
                        </div>
                    </div>
                )}
            </aside>
        </>
    );
};

export default CartSidebar;