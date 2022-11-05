import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

function FoodCard({ id, image01, title, price }) {

  const dispatch = useDispatch();
  
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="pizza_block">
      <img src={image01} alt="" />
     <Link to={`/fooddetails/${id}`}><h3>{title}</h3></Link> 
      <div className="pizza_hot_price">
        <span>{price}$</span>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodCard;
