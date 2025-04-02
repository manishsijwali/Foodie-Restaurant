import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCaregory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const lat = "30.7740394";
    const lng = "76.7967544";

    try {
      const response = await fetch(
        `https://foodie-restaurant0123.onrender.com/api/menu?lat=${lat}&lng=${lng}&restaurantId=${resId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }

      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
      alert("Failed to load menu. Please refresh and try again.");
    }
  };

  if (!resInfo) return <div className="text-center mt-10">Loading...</div>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className=" mx-auto lg:mt-28 mt-16">
      {/* Restaurant Info */}
      <div className="bg-cyan-500 text-white text-center p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-sm">{cuisines?.join(", ")} - {costForTwoMessage}</p>
      </div>

      {/* Category List */}
      <div className="mt-6">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
