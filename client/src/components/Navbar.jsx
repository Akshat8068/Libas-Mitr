import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Fake authentication check
    const isLoggedIn = false; // Agar login hai to true, nahi to false

    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-[10vh] bg-white text-black flex items-center shadow-md">
            <div className="mx-auto w-full max-w-7xl px-6 flex items-center justify-between">
                {/* Left: Logo */}
                <Link to={"/"} className="logo-text tracking-widest text-center font-semibold text-3xl">
                    LibasMitr
                </Link>

                {/* Center: Links */}
                <div className="flex-1 hidden lg:flex justify-center items-center gap-8 text-md font-light">
                    <Link to="/men" className="hover:text-gray-400 transition">Men</Link>
                    <Link to="/women" className="hover:text-gray-400 transition">Women</Link>
                    <Link to="/kids" className="hover:text-gray-400 transition">Kids</Link>
                    <Link to="/ethnic" className="hover:text-gray-400 transition">Collections</Link>
                    <Link to="/western" className="hover:text-gray-400 transition">New Arrivals</Link>
                </div>

                {/* Right: Search + Icons */}
                <div className="flex items-center gap-5 relative">
                    {/* Search Bar */}
                    <div className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-2">
                        <Search size={18} className="text-black" />
                        <input
                            type="text"
                            placeholder="Search styles, sarees, kurtas..."
                            className="bg-transparent outline-none text-black text-sm ml-2 w-48"
                        />
                    </div>

                    {/* Cart Icon */}
                    <button className="hover:text-gray-400 transition">
                        <ShoppingCart size={22} />
                    </button>

                    {/* Profile Icon */}
                    <div className="relative">
                        <button
                            className="hover:text-gray-400 transition"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <User size={22} />
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                {isLoggedIn ? (
                                    <>
                                        <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                                            My Profile
                                        </Link>
                                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => {setDropdownOpen(false);}}>
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                        <>
                                            <Link to="/register" className="logo-text block w-full px-4 py-2 text-sm text-black font-medium bg-white rounded-t-md hover:bg-gray-100 transition" onClick={() => setDropdownOpen(false)}>
                                                Register
                                            </Link>
                                            <Link to="/login" className="logo-text block w-full px-4 py-2 text-sm text-white font-medium bg-black rounded-b-md hover:bg-gray-800 transition" onClick={() => setDropdownOpen(false)}>
                                                Login
                                            </Link>
                                        </>
                                        
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
