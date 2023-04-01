import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex justify-between py-4 px-4 items-center w-full ml-3 mr-3">
      <div className="font-thin italic text-[30px] cursor-pointer">
        <span className="font-bold">String</span> Haven
      </div>
      <div className="text-[25px] cursor-pointer flex justify-around items-center w-[50%]">
        {/* <GiHamburgerMenu /> */}
        <p>Acoustic</p>
        <p>Electric</p>
        <p>Bass</p>
        <p>Ukulele</p>
      </div>
    </div>
  );
};

export default Header;
