import React from "react";

import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="absolute bottom-0 py-6 px-3">
      <div>
        <p>@2023 String Haven Inc. All Rights Reserved </p>
      </div>
      <div>
        <p>Follow our socials</p>
        <div>
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
  );
};

export default Footer;
