import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Acoustic from "../pages/Acoustic";

const Header = () => {
  return (
    <div className="flex justify-around py-4 px-4 items-center max-w-full container">
      <div className="font-thin italic text-[30px] cursor-pointer w-full">
        <span className="font-bold">String</span> Haven
      </div>
      <div className="text-[22px] cursor-pointer flex justify-around items-center w-full">
        {/* <GiHamburgerMenu /> */}
        <Link to={<Acoustic />}>
          <p>Acoustic</p>
        </Link>
        <p>Electric</p>
        <p>Bass</p>
        <p>Ukulele</p>
      </div>
    </div>
  );
};

export default Header;
