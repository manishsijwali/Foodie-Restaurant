import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Set the filtered restaurants to the full list when the data is loaded
    setFilteredRestaurants(restaurantList);
  }, [restaurantList]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://foodie-restaurant0123.onrender.com/api/restaurants?lat=16.7049873&lng=74.2432527"
      );
      const fetchedData = await response.json();

      console.log("Full API Response:", fetchedData);

      if (!fetchedData?.data?.cards) {
        console.error("Error: 'cards' array is missing.");
        return;
      }

      // Dynamically find the correct card containing restaurant data
      const restaurantCard = fetchedData.data.cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card;

      console.log("Restaurant Card:", restaurantCard);

      if (!restaurantCard) {
        console.error("Error: No valid restaurant data found.");
        return;
      }

      const restaurants = restaurantCard.gridElements.infoWithStyle.restaurants;
      console.log("Extracted Restaurants:", restaurants);

      setRestaurantList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    if (!searchText) {
      setFilteredRestaurants(restaurantList);
      return;
    }
    const filtered = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRatedFilter = () => {
    const topRated = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setFilteredRestaurants(topRated);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Check Your Connection</h1>;

  return (
    <div className="search p-4">
      <input
        className="border-2 border-black rounded-md p-2 mr-2"
        type="text"
        placeholder="Search for a restaurant..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="border-black border-2 p-2 rounded-md bg-gray-200 hover:bg-gray-300"
        onClick={handleSearch}
      >
        Search
      </button>
      <button
        className="border-black border-2 p-2 ml-2 rounded-md bg-green-200 hover:bg-green-300"
        onClick={handleTopRatedFilter}
      >
        Filter Top Rated
      </button>

      <div className="grid gap-4 grid-cols-5 grid-rows-3 mt-4">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              <RestaurantCard resdata={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
