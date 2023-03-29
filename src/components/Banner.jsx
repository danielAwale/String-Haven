import React from "react";

import Image from "../assets/guitar.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <button className="">Learn More</button>
      </div>
      <img src={Image} alt="" className="opacity-70" />
    </div>
  );
};

export default Banner;
