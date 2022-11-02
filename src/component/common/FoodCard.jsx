import React from "react";
import {useDispatch} from 'react-redux'
import{ cartActions} from '../../store/cartSlice'
function FoodCard({ id,image01, title, price }) {
const dispatch = useDispatch()
const addToCart= ()=>{
  dispatch(
    cartActions.addItem({
      id,
      title,
      image01,
      price,
    })
  )

}
  return (
    <div className="pizza_block">
      <img src={image01} alt="" />
      <h3>{title}</h3>
      <div className="pizza_hot_price">
        <span>{price}$</span>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodCard;
