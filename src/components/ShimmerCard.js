import React from "react";

const ShimmerCard = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="shimmer-card">
        <div className="shimmerBG media"></div>
        <div className="p-32">
          <div className="shimmerBG title-line"></div>
          <div className="shimmerBG title-line end"></div>
          <div className="shimmerBG content-line end"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
