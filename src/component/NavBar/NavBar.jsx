import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { BiUser, BiBasket } from "react-icons/bi";
function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h5 className="logo_title">Tasty Treat</h5>
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "activeClassName" : "default"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/allfood"
          className={({ isActive }) =>
            isActive ? "activeClassName" : "default"
          }
        >
          Foods
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "activeClassName" : "default"
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "activeClassName" : "default"
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className="menu">
        <span className="cart">
          <BiBasket className="icon" />
        </span>
        <span className="user_icon">
          <Link to="login">
            <BiUser className="icon" />
          </Link>
          <span className="user_icon_no">1</span>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
