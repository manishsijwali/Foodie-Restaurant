import React from "react";
import { CDN_URL } from "../Utils/Constants";

const RestaurantCard = ({ resdata }) => {
  if (!resdata || !resdata.info) {
    return <div>No restaurant data available</div>;
  }

  const { name, cuisines, avgRating, locality, cloudinaryImageId, costForTwo } =
    resdata.info;

  return (
    <div className="m-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
      {/* Image Section */}
      <img
        className="w-full h-56 object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={`Image of ${name}`}
      />

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 truncate">{cuisines.join(", ")}</p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 font-bold text-lg">{avgRating}⭐</span>
          <span className="ml-2 text-gray-500">Rating</span>
        </div>

        {/* Cost & Location */}
        <div className="mt-3 text-gray-700">
          <h4 className="text-sm font-medium">💰 {costForTwo}</h4>
          <h4 className="text-sm font-medium">📍 {locality}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
