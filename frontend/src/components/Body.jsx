import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link, Router } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const response = await fetch(
       "http://localhost:3000/api/restaurants?lat=16.7049873&lng=74.2432527"
      );
      const fetchedData = await response.json();
      // console.log(fetchedData);
      const {
        data: {
          cards: [, { card }],
        },
      } = fetchedData;
      const {
        card: {
          gridElements: { infoWithStyle: { restaurants } },
        },
      } = card;
      setRestaurantList(restaurants);
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurantList.filter(
      (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredRestaurants);
  };

  const handleTopRatedFilter = () => {
    const topRatedRestaurants = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setRestaurantList(topRatedRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus ===  false) return (
  <h1>Check Your Connection</h1>
  );
  return (
    <div className="search">
      <input className="border-2 border-black rounded-md  ml-2"
        type="text"
        placeholder="Search Something"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="text-black border-black border-2 w-19 rounded-md mr-3 ml-1"onClick={handleSearch}>Search</button>
      <span className="text-black border-black border-2 rounded-md ">
        <button onClick={handleTopRatedFilter}>Filter Top Rated Restaurants</button>
      </span>
      <div className="grid gap-4 grid-cols-5 grid-rows-3">
        {restaurantList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
          <RestaurantCard  resdata={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
