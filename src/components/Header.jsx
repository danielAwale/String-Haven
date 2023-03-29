import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex justify-between py-4 px-4 items-center">
      <div className="font-bold italic text-[30px] cursor-pointer">
        String Haven
      </div>
      <div className="text-[35px] cursor-pointer">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
