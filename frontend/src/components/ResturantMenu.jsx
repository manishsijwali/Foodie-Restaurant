import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCaregory from "./RestaurantCaregory";

const ResturantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const lat = "30.7740394";
    const lng = "76.7967544";
    const restaurantId = resId;
  
    try {
      const data = await fetch(`http://localhost:3000/api/menu?lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`);
      if (!data.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const json = await data.json();
      // console.log(data.json);
      
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
      alert("An error occurred while fetching the menu. Please try again.");
    }
  };
  

  if (resInfo !== null) {
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
      <div>
        <div className="justify-center bg-cyan-500 text-center p-4 text-lg">
          <h2>{name}</h2>
          <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        </div>
        {categories.map((category, index) => (
          <RestaurantCaregory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default ResturantMenu;
