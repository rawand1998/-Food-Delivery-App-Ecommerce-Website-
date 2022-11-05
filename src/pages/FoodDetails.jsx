import React from "react";
import Title from "../component/common/Title";
import { useParams } from "react-router-dom";
import productsList from "../assets/fakeData/products";
import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import FoodCard from "../component/common/FoodCard";
import Footer from "../component/Footer/Footer";
function FoodDetails() {
  const { id } = useParams();
  console.log(id);
  const product = productsList.find((item) => item.id === id);
  console.log(product, "product");
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        title: product.title,
        image01: product.image01,
        price: product.price,
      })
    );
  };
  const catgeoryProduct = productsList.filter(
    (item) => item.category === product.category
  );
  console.log(catgeoryProduct, "cat");
  return (
    <div>
      <Title title={product.title} />
      <div className="product_details">
        <div className="image_cloumn">
          <img src={product.image01} alt="" />
          <img src={product.image02} alt="" />
          <img src={product.image03} alt="" />
        </div>
        <div className="big_image">
          <img src={product.image01} alt="" />
        </div>
        <div className="product_details_content">
          <h2>{product.title}</h2>
          <span className="product_price">
            Price: <span>{product.price}$</span>
          </span>
          <span className="product_catgeory">
            Category: <span>{product.category}</span>
          </span>
          <button onClick={addProduct}>Add to Cart</button>
        </div>
      </div>

      <div className="descrition">
        <span>Description</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et
          est, fugiat repudiandae neque illo delectus commodi magnam explicabo
          autem voluptates <br /> eaque velit vero facere mollitia. Placeat rem,
          molestiae error obcaecati enim doloribus impedit aliquam, maiores qui
          minus neque.
        </p>
      </div>

      <div className="may_like_section">
        <h2>You might also like</h2>
        <div className="pizza_hot foods_filters all_food">
          {catgeoryProduct.map(({ id, title, image01, price }) => (
            <FoodCard
              key={id}
              id={id}
              title={title}
              image01={image01}
              price={price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FoodDetails;
