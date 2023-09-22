import { useEffect, useState } from "react";
import { List } from "../config";
import FoodCard from "./FoodCard";
import ShimmerGrid from "./ShimmerGrid";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import Modal from "./Modal";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <Modal />;
  }

  return restaurants?.length === 0 ? (
    <ShimmerGrid />
  ) : (
    <>
      <div className="row justify-content-center m-4">
        <div className="col-12 col-md-6">
          <form className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button
              className="btn btn-primary"
              id="search-button"
              onClick={(e) => {
                const data = filterData(searchText, restaurants);
                setFilteredRestaurants(data);
                e.preventDefault();
              }}
            >
              Search
            </button>
          </form>
          {filteredRestaurants?.length === 0 && (
            <p className="justify-content-center ">
              no match found for "{searchText}"
            </p>
          )}
        </div>
      </div>

      <div className="container   ">
        <div className="row d-flex justify-content-center ">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <Link
                  key={restaurant.info.id}
                  style={{ textDecoration: "none" }}
                  to={"/restaurant/" + restaurant.info.id}
                >
                  <FoodCard {...restaurant.info} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
