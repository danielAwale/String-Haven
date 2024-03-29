import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Policy from "../components/Policy";
import Footer from "../components/Footer";
import Carousel from "../components/Slider";
import Story from "../components/Story";

const Home = () => {
  return (
    <>
      <Banner />
      <div className=" mt-4">
        <Policy />
      </div>
      <div className="flex justify-center w-full items-center mt-6">
        <p className="text-xl font-bold">Shop Our Latest Collection</p>
      </div>
      <Carousel />
      <div className="h-[800px]">
        <Story />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
