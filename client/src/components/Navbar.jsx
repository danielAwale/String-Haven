import React from "react";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between p-4 text-white bg-orange-500">
      <div class="flex items-center">
        <h1 class="ml-2 font-medium">String Haven</h1>
      </div>
      <div class="flex">
        <a href="#" class="px-4 py-2 hover:bg-gray-800">
          About
        </a>
        <a href="#" class="px-4 py-2 hover:bg-gray-800">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
