import React from "react";
import { addItem, removeItem } from "../utils/cartSlice";
import { ITEM_IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";

const FoodItem = ({ item }) => {
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div id="menu-items">
      <div id="item-name">
        <h5>{item?.name}</h5>
        <p>{item?.description}</p>

        <h6>₹ {item?.price / 100}</h6>
      </div>
      <div id="item-add">
        <img src={ITEM_IMG_CDN_URL + item?.imageId} />

        <button onClick={() => removeFoodItem(item)}>-</button>
        <button
          onClick={() => {
            addFoodItem(item);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
