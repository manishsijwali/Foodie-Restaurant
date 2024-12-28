import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Navbar = () => {
  const onlineStatus = useOnlineStatus()

  const cart = useSelector((store)=>store.cart.items)
  return (
    <div>
      <nav className="flex justify-between bg-gray-200 shadow-lg mb-2 ">
        <img className="w-28" src={LOGO_URL} alt="" />
        <ul className="flex p-4 m-4 gap-8">
          <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart - ({cart.length})</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
