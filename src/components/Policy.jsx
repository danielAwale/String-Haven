import React from "react";

import { FaShippingFast } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { TbTruckReturn } from "react-icons/tb";

const Policy = () => {
  return (
    <div className="bg-slate-400 w-full flex justify-between px-2 py-2">
      <div>
        <FaShippingFast />
        <p>Free Shipping</p>
      </div>
      <div>
        <ImPriceTags />
        <p>Best Price for the quality</p>
      </div>
      <div>
        <TbTruckReturn />
        <p>Free returns for 30 days</p>
      </div>
    </div>
  );
};

export default Policy;
