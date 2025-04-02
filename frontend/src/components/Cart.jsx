import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Clear cart
  const handleClearCart = () => {
    dispatch(clearCart());
    alert("Cart cleared successfully!");
  };

  // Handle place order
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add some items.");
      return;
    }

    alert("Order placed successfully! 🎉 Your food will arrive soon.");
    
    // Clear the cart after placing order
    dispatch(clearCart());

    // Redirect to home after a short delay
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + (item.card.info.price || item.card.info.defaultPrice) / 100,
    0
  );

  return (
    <div className="text-center m-4 p-4 mt-28">
      <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart 🛒</h1>

      <div className="w-full sm:w-8/12 md:w-6/12 mx-auto mt-4 p-4 border border-gray-300 rounded-lg shadow-md">
        {/* Show Total Price if Cart is Not Empty */}
        {cartItems.length > 0 && (
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-700">
              Total: ₹{totalPrice.toFixed(2)}
            </h2>

            <button
              className="mt-2 py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <button
              className="mt-4 py-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        )}

        {/* Empty Cart Message */}
        {cartItems.length === 0 && (
          <div className="mt-4">
            <h1 className="font-bold text-gray-500 text-lg">
              Your cart is empty! 🛍️
            </h1>
            <Link
              to="/"
              className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {/* Item List */}
        {cartItems.length > 0 && <ItemList items={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
