import React from "react";
import wishempty from "../../assets/empty-wishlist.png";

const Empty = () => {
  return (
    <div className="empty">
      <img src={wishempty} alt="" />
    </div>
  );
};

export default Empty;
