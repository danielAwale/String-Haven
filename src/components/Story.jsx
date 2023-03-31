import React from "react";
import Image from "../assets/story.jpg";

const Story = () => {
  return (
    <div className="mt-20 w-full relative">
      <div className="w-full h-full bg-white opacity-20 absolute"></div>
      <div className="absolute flex items-center w-full justify-center flex-col">
        <p className="text-white text-[50px] italic">Learn About us</p>
      </div>
      <img
        src={Image}
        alt=""
        className="lg:h-[700px] lg:w-full lg:object-cover"
      />
    </div>
  );
};

export default Story;
