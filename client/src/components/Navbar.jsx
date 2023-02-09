import React from "react";

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div class="flex items-center">
        <img src="logo.svg" alt="Logo" class="h-8 w-8" />
        <h1 class="ml-2 font-medium">My Website</h1>
      </div>
      <div class="flex">
        <a href="#" class="px-4 py-2 hover:bg-gray-800">
          Home
        </a>
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
