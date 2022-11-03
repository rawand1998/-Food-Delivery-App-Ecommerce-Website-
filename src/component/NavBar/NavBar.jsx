import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUser, BiBasket } from "react-icons/bi";
import{useSelector} from 'react-redux'
function NavBar() {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    // return () => window.removeEventListener("scroll");
  }, []);

  const toggleMenu = () => {
    console.log("togglemenu");
    menuRef.current.classList.toggle("show__menu");
  };

  return (
    <div className="nav" ref={headerRef}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h5 className="logo_title">Tasty Treat</h5>
      </div>

      <nav ref={menuRef} onClick={toggleMenu}>
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
          <span className="user_icon_no">{totalQuantity}</span>
        </span>
        <span className="mobile__menu">
          <AiOutlineMenu onClick={toggleMenu} />
        </span>
      </div>
    </div>
  );
}

export default NavBar;
