import React from "react";
import header from "../../assets/header.png";
import { Link } from "react-router-dom";
import {FaCarAlt,FaCheckCircle}  from "react-icons/fa";
function Header() {
  return (
    <div className="header_container">
      <div className="header_content">
        <h5>Easy way to make an order</h5>
        <h1>
          <span>HUNGRY?</span> Just wait <br /> food at <span> your door</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
          delectus tenetur autem, sint veritatis!
        </p>
        <div className="header_btn">
          <Link className="order_header">Order now </Link>
          <Link to="allfood" className="food_header">See all foods</Link>
        </div>

        <div className="header_para">
          <p>
            <span>
             <FaCarAlt className="para_icon"/>
            </span>
            No shipping charge
          </p>
          <p>
            <span>
              <FaCheckCircle className="para_icon"/>
            </span>
            100% secure checkout
          </p>
        </div>
      </div>
      <div className="header_image">
        <img src={header} alt="" />
      </div>
    </div>
  );
}

export default Header;
