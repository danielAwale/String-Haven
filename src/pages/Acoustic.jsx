import React from "react";

import Img from "../assets/guitar2.jpeg";

const Acoustic = () => {
  return (
    <section className="flex">
      <div>
        <div>
          <img src={Img} alt="" className="h-[800px]" />
        </div>
        <div>
          <p>StringMaster</p>
          <p>2053</p>
        </div>
      </div>
    </section>
  );
};

export default Acoustic;
