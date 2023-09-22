import React, { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, swiggy_menu_api_URL } from "../config";

const useMenuItems = (id) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(swiggy_menu_api_URL + id);
    const json = await data.json();

    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    setMenuItems(menuItemsData);
  }
  return menuItems;
};

export default useMenuItems;
