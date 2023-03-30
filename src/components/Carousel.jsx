import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../assets/guitar2.jpeg";
import Img2 from "../assets/guitar3.jpeg";
import Img3 from "../assets/guitar4.jpeg";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className="w-full h-[700px] object-contain"
          src={Img1}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="w-full h-[700px] object-contain"
          src={Img2}
          alt="Second slide"
        />
      </div>
      <div>
        <img
          className="w-full h-[700px] object-contain"
          src={Img3}
          alt="Third slide"
        />
      </div>
      <div>
        <img
          className="w-full h-[700px] object-contain"
          src={Img1}
          alt="First slide"
        />
      </div>
      <div>
        <img
          className="w-full h-[700px] object-contain"
          src={Img2}
          alt="Second slide"
        />
      </div>
      <div>
        <img
          className="w-full h-[700px] object-contain"
          src={Img3}
          alt="Third slide"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
