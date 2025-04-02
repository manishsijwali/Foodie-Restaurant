import React, { memo } from "react";
import { CDN_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(`${item?.card?.info?.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="p-4 grid gap-6 grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {items.map((item) => {
          const info = item?.card?.info;
          const imageUrl = info?.imageId ? CDN_URL + info.imageId : "https://via.placeholder.com/150";
          const price = (info?.price ?? info?.defaultPrice ?? 0) / 100;

          return (
            <div
              key={info?.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border border-gray-200 hover:shadow-lg transition"
            >
              {/* Image & Add Button Wrapper */}
              <div className="w-full flex flex-col items-center">
                <img
                  src={imageUrl}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-md"
                  alt={info?.name}
                />
                <button
                  aria-label={`Add ${info?.name} to cart`}
                  className="mt-3 px-4 py-2 bg-black text-white text-sm md:text-base rounded-md shadow-md hover:bg-gray-800 transition w-full sm:w-auto"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>

              {/* Item Details */}
              <div className="text-center mt-3 w-full">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 truncate w-full">
                  {info?.name}
                </h2>
                <p className="text-gray-600 font-medium text-sm md:text-base">₹{price}</p>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2 w-full">
                  {info?.description || "No description available."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(ItemList);
