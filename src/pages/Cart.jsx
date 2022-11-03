import React from "react";
import { Link } from "react-router-dom";
import Title from "../component/common/Title";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { FaTrash } from "react-icons/fa";
function Cart() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItems);
  console.log(cartItem);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const deleteItem = (id)=>{
    console.log(id,"id");
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <div>
      <Title title="Your Cart" />

      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Product Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
          {cartItem.map((item) => (
            <tr>
              <td className="td">
                <img src={item.image01} alt="" width="50px" height="50px" />
              </td>
              <td>{item.title}</td>
              <td>{item.price}$</td>
              <td>{item.quantity}</td>
              <td onClick={()=>deleteItem(item.id)}>
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<<<<<<< HEAD

      <div className="total_price">
        <span>
          Subtotal: $<span>{totalAmount}</span>
        </span>
        <p>Taxes and shipping will calculate at checkout</p>
=======
     
      <div className="total_price">
        <span>Subtotal: $<span>35</span></span> <br/> <br/>
        <p>Taxes and shipping will calculate at checkout</p> <br/> <br/>
>>>>>>> 5362a82751228174dd8283413da175b5caef4205
        <div className="btn_total">
          <Link>Contiune shopping</Link>
          <Link>Proceed to checkout</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Cart;
