import { ShoppingCart, X, Menu, LogIn, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";




const Navbar = () => {
  const menuItems = ["Men", "Women", "Party", "Mitr"];
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loaction=useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleLogout = () => {
    navigate("/")
    dispatch(logoutUser())
  }
  

  return (
    <>
      <header className={loaction.pathname.includes("admin") ? "hidden" :"bg-white shadow fixed top-0 left-0 w-full z-50"}>
      <div className="container mx-auto flex items-center justify-between py-4 relative">

          <div className="flex-1 flex items-center gap-3">

            {user?.isAdmin ? (
              <>
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden cursor-pointer">
                    
                    <Link to={"/admin"} className="font-semibold text-gray-700">
                      {user?.name?.charAt(0).toUpperCase()}
                    </Link>
                  
                </div>

                {/* Logo */}
                <Link to="/" className="text-3xl font-bold logo-text">
                  LibasMitr
                </Link>
              </>
            ) : (
              <>
                {/* Logo only (no avatar) */}
                <Link to="/" className="text-3xl font-bold logo-text">
                  LibasMitr
                </Link>
              </>
            )}

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
          <button className="relative" onClick={() => setCartOpen(true)}>
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-3 left-3 text-xs text-gray-900 font-bold">0</span>
          </button>

          {/* Login / Logout (Desktop Only) */}
            <div className="hidden md:flex">
              {user ? (<>
                <button onClick={handleLogout} className="flex items-center gap-1 border  p-2 font-semibold bg-red-500  text-white hover:bg-red-700 ">Logout</button>
              </>) : (<>
                  <Link to={"./login"} className="flex items-center gap-1 border  p-2 font-semibold bg-black text-white hover:bg-gray-700 " >
                    Login
                  </Link>
              </>)}
           
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
              {user ? (<>
                <button onClick={() => {  handleLogout(); setMobileMenuOpen(false);}} className="flex w-full items-center gap-1 border  p-2  bg-red-500  text-white hover:bg-red-700  justify-center  text-lg font-medium   rounded py-2 ">Logout</button>
              </>) : (<>
                  <Link to={"./login"} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-1 border w-full  p-2 justify-center font-medium text-lg bg-black text-white hover:bg-gray-700 " >
                  Login
                </Link>
              </>)}
           
          </div>
        </div>
      )}
    </header>
    <CartSidebar isOpen={cartOpen} setIsOpen={setCartOpen} />
     </>

  );
};

export default Navbar;
