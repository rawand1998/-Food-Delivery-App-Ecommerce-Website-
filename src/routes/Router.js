import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import AllFood from "../pages/AllFood";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FoodDetails from "../pages/FoodDetails";


const Router = 
{
  routes:[
    { path: "/", element: <Home /> },
   { path:"/cart" , element:<Cart />},
   {path:"/allfood",  element:<AllFood /> },
   {path:"/checkout",  element:<Checkout /> },
   {path:"/login",  element:<Login /> },
   {path:"/register",  element:<Register /> },
   {path:"/fooddetails/:id",  element:<FoodDetails /> },
   {path:"/contact",  element:<Contact /> },
]
}
    

  




export default Router;
