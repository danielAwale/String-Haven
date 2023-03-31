import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Policy from "./components/Policy";
// import Footer from "./components/Footer";
import Carousel from "./components/Slider";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className=" mt-4">
        <Policy />
      </div>
      <div className="flex justify-center w-full items-center mt-6">
        <p className="text-xl font-bold">Shop Our Latest Collection</p>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default App;
