import React from "react";

import Image from "../assets/guitar.jpg";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="w-full h-full bg-black absolute opacity-50"></div>
      <div className="absolute flex flex-col w-full h-full items-center justify-center">
        <p className="text-white text-[25px] lg:text-[50px] font-semibold italic">
          Shop the world's finest guitars
        </p>
        <p className="text-white text-[45px] lg:text-[80px]">
          Made with 100% Koa
        </p>
        <button className=" bg-orange-500 px-2 py-2 rounded-md lg:px-4 lg:py-4">
          Shop now
        </button>
      </div>
      <img src={Image} alt="" className="lg:w-full lg:h-[600px] object-cover" />
    </div>
  );
};

export default Banner;
