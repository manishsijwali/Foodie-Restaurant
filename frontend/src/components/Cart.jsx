import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from "./ItemList";
import { clearCart } from '../Utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl md:text-3xl font-bold'>Shopping Cart</h1>
      
      <div className='w-full sm:w-8/12 md:w-6/12 mx-auto mt-4 p-4 border border-gray-300 rounded-lg shadow-md'>
        {/* Clear Cart Button */}
        {cartItems.length > 0 && (
          <button 
            className='py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-all'
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}

        {/* Empty Cart Message */}
        {cartItems.length === 0 && (
          <h1 className='font-bold text-gray-500 text-lg mt-4'>Your cart is empty. Add some items!</h1>
        )}

        {/* Item List */}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
