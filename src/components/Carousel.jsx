import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="w-full h-auto object-cover"
          src="https://via.placeholder.com/800x400/000000/FFFFFF/?text=First+Slide"
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="w-full h-auto object-cover"
          src="https://via.placeholder.com/800x400/FF0000/FFFFFF/?text=Second+Slide"
          alt="Second slide"
        />
      </div>
      <div>
        <img
          className="w-full h-auto object-cover"
          src="https://via.placeholder.com/800x400/0000FF/FFFFFF/?text=Third+Slide"
          alt="Third slide"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
