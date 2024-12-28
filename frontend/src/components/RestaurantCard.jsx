import React from "react";
import { CDN_URL } from "../Utils/Constants";

const RestaurantCard = (props) => {
  let { resdata } = props;
  // console.log(resdata);
  let { name, cuisines, avgRating, locality, cloudinaryImageId, costForTwo } =
    resdata?.info;

  return (
    <>
      <div className="m-3 shadow-md h-98 w-60">
        <img className="h-56 w-60" src={CDN_URL + cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>Rating = {avgRating}</h5>
        <h4>{costForTwo}</h4>
        <h4>{locality}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
