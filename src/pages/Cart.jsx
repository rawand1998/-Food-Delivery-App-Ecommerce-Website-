import React from "react";
import { Link } from "react-router-dom";
import Title from "../component/common/Title";
function Cart() {
  return (
    <div>
      <Title title="Your Cart"/>
      <table>
        <tr>
          <th>Image</th>
          <th>Product Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
    
       
      </table>
      <div className="total_price">
        <span>Subtotal: $<span>35</span></span>
        <p>Taxes and shipping will calculate at checkout</p>
        <div className="btn_total">
          <Link>Contiune shopping</Link>
          <Link>Proceed to checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
