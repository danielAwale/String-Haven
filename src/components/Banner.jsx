import React from "react";

import Image from "../assets/guitar.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute ml-4">
        <p className="text-white">Shop the world's finest guitars</p>
        <p className="text-white">Made with 100% Koa</p>
        <button className=" bg-orange-500 px-2 py-2 rounded-md">
          Shop now
        </button>
      </div>
      <img src={Image} alt="" className="lg:height:200px" />
    </div>
  );
};

export default Banner;
