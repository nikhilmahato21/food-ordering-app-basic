import { useEffect, useState } from "react";
import { RESTAURANT_TYPE_KEY, swiggy_menu_api_URL } from "../config";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(swiggy_menu_api_URL + id);
    const json = await data.json();
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;

    setRestaurantMenu(restaurantData);
  }
  return restaurantMenu;
};

export default useRestaurantMenu;
