import { ShoppingCart, X, Menu, LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoggedIn = true; // change to true to test logged in
  const menuItems = ["Men", "Women", "Party", "Mitr"];

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 relative">

        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-3xl font-bold logo-text">
            LibasMitr
          </Link>
        </div>

        {/* Desktop Menu (center) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-10">
            {menuItems.map((item) => (
              <li key={item} className="relative group">
                <a
                  href="/"
                  className="text-xl font-semibold text-gray-900 pb-1 relative
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:bg-red-500 after:w-full
                  after:origin-left after:scale-x-0
                  after:transition-transform after:duration-300
                  group-hover:after:scale-x-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section (Desktop: Search + Cart + Login/Logout) */}
        <div className="flex items-center gap-4">

          {/* Search bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-full px-4 py-1 w-48 outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Cart */}
          <button className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-3 left-3 text-xs text-gray-900 font-bold">0</span>
          </button>

          {/* Login / Logout (Desktop Only) */}
          <div className="hidden md:flex">
            <Link
              to={isLoggedIn ? "/logout" : "/login"}
              className="flex items-center gap-1 text-gray-900 hover:text-red-500 transition"
            >
              {isLoggedIn ? <LogOut className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
              <span>{isLoggedIn ? "Logout" : "Login"}</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>

        </div>
      </div>

      {/* Search bar (mobile + tablet only) */}
      <div className="block lg:hidden px-6 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-full px-4 py-1 outline-none focus:ring-1 focus:ring-red-500"
        />
      </div>

      {/* Mobile Slide Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-4 px-6">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="text-lg font-semibold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login / Logout (Mobile Only) */}
          <div className="mt-auto px-6 pb-6">
            <Link
              to={isLoggedIn ? "/logout" : "/login"}
              className="flex items-center justify-center gap-2 text-lg font-medium text-white bg-black rounded py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isLoggedIn ? <LogOut className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
              <span>{isLoggedIn ? "Logout" : "Login"}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
