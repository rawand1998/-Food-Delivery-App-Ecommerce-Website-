import React from "react";
import Slider from "react-slick";

function Testimonal() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let slider = [
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/ava-2.11e918c6.jpg",
      name: "Mitchell Marsh",
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!",
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/ava-2.11e918c6.jpg",
      name: "Mitchell Marsh",
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!",
    },
    {
      img: "https://food-delivery-ecommerce-app.netlify.app/static/media/ava-2.11e918c6.jpg",
      name: "Mitchell Marsh",
      describe:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque, quam minus totam maiores laborum! Impedit consectetur illum aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus quis dolorem quas!",
    },
  ];

  return (
    <Slider {...settings}>
      {slider.map(({ img, name, describe }) => (
        <div className="slider_content">
          <p>{describe}</p><br/>
          <div className="slider_client">
            <img src={img} alt="not found" />
            <span>{name}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Testimonal;
