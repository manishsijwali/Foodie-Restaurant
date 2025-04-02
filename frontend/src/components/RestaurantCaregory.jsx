import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="w-full md:w-8/12 lg:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg transition-all duration-300">
      {/* Title & Toggle Button */}
      <div
        className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-100 rounded-md"
        onClick={setShowIndex}
      >
        <span className="font-semibold text-xl text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-lg">{showItems ? "🔼" : "🔽"}</span>
      </div>

      {/* Item List with Smooth Expand Effect */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showItems ? " opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
