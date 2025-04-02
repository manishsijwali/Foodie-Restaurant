import React, { useState, useRef, useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(showItems ? contentRef.current.scrollHeight : 0);
    }
  }, [showItems]);

  return (
    <div className="w-full sm:w-10/12 md:w-8/12  lg:w-9/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg transition-all duration-300">
      {/* Title & Toggle Button */}
      <div
        className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-100 rounded-md transition"
        onClick={setShowIndex}
        role="button"
        aria-expanded={showItems}
      >
        <span className="font-semibold text-lg sm:text-xl text-gray-800 flex-1">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`text-xl sm:text-2xl transform transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          🔽
        </span>
      </div>

      {/* Expandable Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
      >
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
