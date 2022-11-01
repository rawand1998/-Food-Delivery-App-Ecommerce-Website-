import React, { useState } from "react";
import Title from "../component/common/Title";
import { FaSearch } from "react-icons/fa";
import FoodCard from "../component/common/FoodCard";
function AllFood() {
  const currencies = [
    {
      value: "USD",
      label: "High Pice",
    },
    {
      value: "EUR",
      label: "Low Price",
    },
    {
      value: "BTC",
      label: "Alphabetically A-Z",
    },
    {
      value: "JPY",
      label: "Alphabetically Z-A",
    },
  ];
  let foods = [
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_2.1.f1538554.jpg",
      name: "Vegetarian Pizza",
      price: 100,
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_3.1.9c207cdf.jpg",
      name: "Double Cheese Margherita",
      price: 200,
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_4.1.3c8ecc49.jpg",
      name: "Maxican Green Wave",
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_2.2.4967c9cb.jpg",
      name: "Seafood Pizza",
      price: 80,
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_2.1.f1538554.jpg",
      name: "Vegetarian Pizza",
      price: 100,
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_3.1.9c207cdf.jpg",
      name: "Double Cheese Margherita",
      price: 200,
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_4.1.3c8ecc49.jpg",
      name: "Maxican Green Wave",
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/product_2.2.4967c9cb.jpg",
      name: "Seafood Pizza",
      price: 80,
    },
  ];
  const [currency, setCurrency] = useState("");

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div>
      <Title title="All Foods" />
      <div className="food_nav">
        <div className="search">
          <input type="text" placeholder="I`m looking for ..." />
          <FaSearch />
        </div>
        <div>
          <select
            className="input_select"
            onChange={handleChange}
            value={currency}
          >
            {currencies.map(({ value, label }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>


      <div className="pizza_hot foods_filters">
          {foods.map(({ name, img, price }) => (
            <FoodCard name={name} img={img} price={price} />
          ))}
        </div>

    </div>
  );
}

export default AllFood;
