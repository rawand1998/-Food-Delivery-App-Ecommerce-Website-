import React from "react";

function FoodCard({ img, name, price }) {

  return (
    <div className="pizza_block">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <div className="pizza_hot_price">
        <span>{price}$</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodCard;
