import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useMenuItems from "../utils/useMenuItems";
import { IMG_CDN_LINK, ITEM_IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const param = useParams();
  const { id } = param;

  const restaurantMenu = useRestaurantMenu(id);
  const menuItems = useMenuItems(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return !restaurantMenu ? (
    <ShimmerCard />
  ) : (
    <>
      <div id="restaurant-section">
        <div id="restaurant-info">
          <div>
            {/* <h1> restaurant id :{id} </h1> */}

            <img
              style={{ width: 200 }}
              src={IMG_CDN_LINK + restaurantMenu?.cloudinaryImageId}
            />
            <h5> {restaurantMenu?.name} </h5>

            <h6 style={{ color: "gray" }}>{restaurantMenu?.locality}</h6>
            <h6 style={{ color: "gray" }}>{restaurantMenu?.areaName}</h6>
            <h6>{restaurantMenu?.costForTwoMessage}</h6>
          </div>
          <div id="rating">
            <div id="restaurant-rating">
              <h6>
                {" "}
                <i
                  style={{
                    color:
                      restaurantMenu?.avgRatingString < "4" ? "red" : "#1d923c",
                  }}
                  className="fa fa-star checked m-1"
                />
                {restaurantMenu?.avgRatingString}
              </h6>
              <h6>{restaurantMenu?.totalRatingsString}</h6>
            </div>
          </div>
        </div>

        <div id="menu-section">
          <h2>Menu Recommended ({menuItems.length})</h2>
          {menuItems?.map((item, index) => (
            <div key={index} id="menu-items">
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
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
