import React, { useState } from "react";
import Title from "../component/common/Title";
import { FaSearch } from "react-icons/fa";
import FoodCard from "../component/common/FoodCard";
import Footer from "../component/Footer/Footer";
import productsList from "../assets/fakeData/products";
import ReactPaginate from "react-paginate";
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
  const [products, setproducts] = useState(productsList);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const searchedProduct = products.filter((item) => {
    if (search.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <Title title="All Foods" />
      <div className="food_nav">
        <div className="search">
          <input
            type="text"
            placeholder="I`m looking for ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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

      <div className="pizza_hot foods_filters all_food">
        {displayPage.map(({ title, image01, price, id }) => (
          <FoodCard
            key={id}
            id={id}
            title={title}
            image01={image01}
            price={price}
          />
        ))}
      </div>
      <div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName=" paginationBttns "
        />
      </div>
      <Footer />
    </div>
  );
}

export default AllFood;
