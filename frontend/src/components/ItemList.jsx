import React from "react";
import { CDN_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  // console.log(items);
const handleAddItem = (item) =>{
    dispatch(addItem(item))
}
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="font-bold py-2">
              <span>{item.card.info.name}</span>
            </div>
            <div className="font-bold">
              <span>
                Rs -{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-1rounded-lg bg-black text-white shadow-lg "
              onClick={()=>handleAddItem(item)} >
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
