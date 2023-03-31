import React from "react";
import Image from "../assets/story.jpg";

const Story = () => {
  return (
    <div className="mt-20 w-full relative">
      <img
        src={Image}
        alt=""
        className="lg:h-[500px] lg:w-full lg:object-cover"
      />
      <p>Learn About us</p>
    </div>
  );
};

export default Story;
