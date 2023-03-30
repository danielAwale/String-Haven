import React from "react";

import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="fixed bottom-0 mt-0 py-4 px-3 w-full bg-slate-400">
      <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <p>@2023 String Haven Inc. All Rights Reserved </p>
        <div className="text-[15px]">
          <p className="mb-2">Follow our socials</p>
          <div className="flex justify-between text-[20px]">
            <div>
              <BsInstagram />
            </div>
            <div>
              <BsFacebook />
            </div>
            <div>
              <BsTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
