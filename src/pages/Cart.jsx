import React from "react";
import { Link } from "react-router-dom";
import Title from "../component/common/Title";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { FaTrash } from "react-icons/fa";
import Footer from '../component/Footer/Footer'
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
                <FaTrash className="trash_icon"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total_price">
        <span>
          Subtotal: $<span>{totalAmount}</span><br/>
        </span><br/>
        <p>Taxes and shipping will calculate at checkout</p><br/>
        <div className="btn_total">
          <Link to="/allfood">Contiune shopping</Link>
          <Link>Proceed to checkout</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Cart;