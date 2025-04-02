import React from "react";
import { CDN_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(`${item.card.info.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="p-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border border-gray-200 hover:shadow-lg transition"
          >
            {/* Image & Add Button */}
            <div className="relative w-full flex justify-center">
              <img
                src={
                  item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : "https://via.placeholder.com/150"
                }
                className="w-28 h-28 object-cover rounded-md"
                alt={item.card.info.name}
              />
              <button
                className="absolute bottom-2 px-3 py-1 bg-black text-white text-sm rounded-md shadow-md hover:bg-gray-800 transition"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>

            {/* Item Details */}
            <div className="text-center mt-3 w-full">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.card.info.name}
              </h2>
              <p className="text-gray-600 font-medium">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </p>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.card.info.description || "No description available."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
