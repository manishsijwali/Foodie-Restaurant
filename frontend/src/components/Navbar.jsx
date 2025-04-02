import { useState, useEffect } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cart = useSelector((store) => store.cart.items);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow-lg z-50">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div>
            <img className="w-24 rounded-full" src={LOGO_URL} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <li className={onlineStatus ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
              {onlineStatus ? "✅ Online" : "🔴 Offline"}
            </li>
            <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-700">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-700">Contact</Link></li>
            <li>
              <Link to="/cart" className="relative bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition flex items-center">
                <FaShoppingCart className="text-xl" />
                <span className="ml-2">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Mobile - Cart & Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            {/* Cart Button with Badge */}
            <Link to="/cart" className="relative bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition text-sm flex items-center">
              <FaShoppingCart className="text-xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button className="text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Mobile Menu (Slide In) */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 p-6 flex flex-col ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center space-y-6 text-lg font-medium mt-10">
            <li className={onlineStatus ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
              {onlineStatus ? "✅ Online" : "🔴 Offline"}
            </li>
            <li><Link to="/" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link 
                to="/cart" 
                className="bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingCart className="text-xl" />
                <span className="ml-2">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Padding to prevent content from hiding behind the navbar */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
