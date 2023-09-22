import { useContext } from "react";
import { IMG_CDN_LINK } from "../config";
import userContext from "../utils/userContext";

const FoodCard = ({ cloudinaryImageId, name, cuisines, avgRatingString }) => {
  const { user } = useContext(userContext);
  return (
    <div className="card h-100   p-1 m-2 ">
      <img
        src={IMG_CDN_LINK + cloudinaryImageId}
        className="card-img-top"
        alt="Restaurant Image"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <h6 className="card-text">{cuisines.join(", ")}</h6>

        <p className="card-text">
          <i
            style={{ color: avgRatingString < "4" ? "red" : "#1d923c" }}
            className="fa fa-star checked m-1"
          />
          {avgRatingString}
        </p>
        <span style={{ opacity: "0.5", fontSize: "10px" }}>
          wanna eat {user.name}
        </span>
      </div>
    </div>
  );
};

export default FoodCard;
