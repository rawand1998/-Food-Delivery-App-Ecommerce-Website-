import React, { useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiUser, BiBasket } from "react-icons/bi";
import { useSelector } from "react-redux";
function NavBar() {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const removeShadw = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
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
    menuRef.current.classList.toggle("show__menu");
  };
  const hide_menu = () => {
    console.log("hi");
    removeShadw.current.classList.remove("show__menu");
  };

  return (
    <>
      <div className="show__menu" ref={removeShadw}></div>
      <div className="nav" ref={headerRef}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h5 className="logo_title">Tasty Treat</h5>
        </div>

        <nav ref={menuRef} onClick={toggleMenu} className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "activeClassName" : "default"
            }
            onClick={hide_menu}
          >
            Home
          </NavLink>
          <NavLink
            to="/allfood"
            className={({ isActive }) =>
              isActive ? "activeClassName" : "default"
            }
            onClick={hide_menu}
          >
            Foods
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "activeClassName" : "default"
            }
            onClick={hide_menu}
          >
            Cart
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "activeClassName" : "default"
            }
            onClick={hide_menu}
          >
            Contact
          </NavLink>
        </nav>

        <div className="menu">
          <span className="cart">
            <Link to="/cart"><BiBasket className="icon" /></Link>
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
    </>
  );
}

export default NavBar;
