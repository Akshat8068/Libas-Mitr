// src/components/Layout.tsx
import {
    LayoutDashboard,
    Users,
    Package,
    Star,
    ShoppingCart,
    Tag,
    LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-6 border-b border-gray-800">
                    <h1 className="text-xl font-bold">Meta Fashion</h1>
                    <p className="text-sm text-gray-400">Admin Panel</p>
                </div>

                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="#"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-violet-600 text-white">
                                <LayoutDashboard className="w-5 h-5" />
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800"
                            >
                                <Users className="w-5 h-5" />
                                <span>Users</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800"
                            >
                                <Package className="w-5 h-5" />
                                <span>Products</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800"
                            >
                                <Star className="w-5 h-5" />
                                <span>Reviews</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Orders</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="#"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800"
                            >
                                <Tag className="w-5 h-5" />
                                <span>Coupons</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                            <span className="text-violet-600 font-semibold">A</span>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900">
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-8">{children}</main>
            </div>
        </div>
    );
}
