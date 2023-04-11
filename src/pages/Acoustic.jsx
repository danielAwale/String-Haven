import React from "react";

import Img from "../assets/guitar2.jpeg";

const Acoustic = () => {
  return (
    <section className="container m-auto grid">
      <div className="flex flex-col items-center border border-sky-600">
        <div className="flex">
          <img src={Img} alt="" className="h-[600px]" />
        </div>
        <div className="flex flex-col items-center">
          <p>StringMaster</p>
          <p>2053</p>
        </div>
      </div>
    </section>
  );
};

export default Acoustic;
