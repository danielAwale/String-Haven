import React from "react";

import { FaShippingFast } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { TbTruckReturn } from "react-icons/tb";

const Policy = () => {
  return (
    <div className="bg-slate-300 w-full flex flex-col justify-between px-2 py-2">
      <div className="flex justify-center items-center gap-2">
        <FaShippingFast />
        <p> Free Shipping</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <ImPriceTags />
        <p>Best Price for the quality</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <TbTruckReturn />
        <p>Free returns for 30 days</p>
      </div>
    </div>
  );
};

export default Policy;
