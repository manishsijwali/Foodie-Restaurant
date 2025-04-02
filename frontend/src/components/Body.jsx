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
    setFilteredRestaurants(restaurantList);
  }, [restaurantList]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://foodie-restaurant0123.onrender.com/api/restaurants?lat=16.7049873&lng=74.2432527"
      );
      const fetchedData = await response.json();

      console.log("Full API Response:", fetchedData);

      const restaurantCard = fetchedData?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card;

      if (!restaurantCard) {
        console.error("Error: No valid restaurant data found.");
        return;
      }

      const restaurants = restaurantCard.gridElements.infoWithStyle.restaurants || [];
      console.log("Extracted Restaurants:", restaurants);

      setRestaurantList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (!searchText) {
        setFilteredRestaurants(restaurantList);
        return;
      }
      const filtered = restaurantList.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }, 300); // Debounce input

    return () => clearTimeout(delayDebounce);
  }, [searchText, restaurantList]);

  const handleTopRatedFilter = () => {
    setFilteredRestaurants(restaurantList.filter((r) => r.info.avgRating > 4.5));
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1 className="text-red-500 text-center mt-6">Check Your Connection</h1>;

  return (
    <div className="p-4 max-w-full mx-auto mt-28">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4">
        <input
          className="w-full sm:w-auto border-2 border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm md:text-base"
          type="text"
          placeholder="Search for a restaurant..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="w-full sm:w-auto border-2 border-gray-500 p-2 px-6 rounded-md bg-gray-200 hover:bg-gray-300 transition-all text-sm md:text-base"
          onClick={() => setFilteredRestaurants(restaurantList)}
        >
          Reset
        </button>
        <button
          className="w-full sm:w-auto border-2 border-green-500 p-2 rounded-md bg-green-200 hover:bg-green-300 transition-all text-sm md:text-base"
          onClick={handleTopRatedFilter}
        >
          Filter Top Rated
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resdata={restaurant} />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
