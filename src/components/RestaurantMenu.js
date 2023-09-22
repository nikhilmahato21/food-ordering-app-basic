import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useMenuItems from "../utils/useMenuItems";
import { IMG_CDN_LINK } from "../config";

const RestaurantMenu = () => {
  const param = useParams();
  const { id } = param;

  const restaurantMenu = useRestaurantMenu(id);
  const menuItems = useMenuItems(id);

  return !restaurantMenu ? (
    <ShimmerCard />
  ) : (
    <>
      <div>
        <h1> restaurant id :{id} </h1>
        <h1> {restaurantMenu?.name} </h1>
        <img
          style={{ width: 200 }}
          src={IMG_CDN_LINK + restaurantMenu?.cloudinaryImageId}
        />

        <h6>{restaurantMenu?.costForTwoMessage}</h6>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {menuItems?.map((item, index) => (
            <li key={index}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
