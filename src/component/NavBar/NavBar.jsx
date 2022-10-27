import React from "react";
import logo from "../../assets/logo.png";
import { NavLink,Link } from "react-router-dom";
import { FaUserAlt, FaCartArrowDown } from "react-icons/fa";
function NavBar() {
  return (
    <div className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeClassName" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/allfood"
          className={({ isActive }) => (isActive ? "activeClassName" : "default")}
        >
          Food
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "activeClassName" : "default")}
        >
          Cart
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activeClassName" : "default")}
        >
          Contact
        </NavLink>
      </nav>

      <div className="menu">
        <span className="cart">
          <FaCartArrowDown className="icon" />
         
        </span>
        <span className="user_icon">
          <i class="ri-user-line"></i>
          <Link to="login">
          <FaUserAlt  className="icon"/>
          </Link>
          
          <span className="user_icon_no">0</span>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
