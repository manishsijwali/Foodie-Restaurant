import React from "react";
import { CDN_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center border border-gray-200"
        >
          {/* Image & Add Button */}
          <div className="relative w-full flex justify-center">
            <img
              src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : "https://via.placeholder.com/150"}
              className="w-28 h-28 object-cover rounded-md"
              alt={item.card.info.name}
            />
            <button
              className="absolute bottom-1 px-3 py-1 bg-black text-white text-sm rounded-lg shadow-md hover:bg-gray-800 transition"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>

          {/* Item Details */}
          <div className="text-center mt-3 w-full">
            <h2 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h2>
            <p className="text-gray-600 font-medium">₹{(item.card.info.price || item.card.info.defaultPrice) / 100}</p>
            <p className="text-sm text-gray-500 mt-1">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
