import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for toggle

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cart = useSelector((store) => store.cart.items);

  return (
    <nav className="bg-gray-200 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div>
          <img className="w-24 rounded-full" src={LOGO_URL} alt="Logo" />
        </div>

        {/* Desktop Menu (Hidden on Small Screens) */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li className={onlineStatus ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </li>
          <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-700">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-700">Contact</Link></li>
          <li>
            <Link to="/cart" className="bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition">
              Cart ({cart.length})
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle Icons */}
        </button>
      </div>

      {/* Mobile Menu (Visible Only When Open) */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-gray-100 py-4`}>
        <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
          <li className={onlineStatus ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
            {onlineStatus ? "✅ Online" : "🔴 Offline"}
          </li>
          <li><Link to="/" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-700" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li>
            <Link 
              to="/cart" 
              className="bg-black text-white px-3 py-1 rounded hover:bg-gray-900 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
