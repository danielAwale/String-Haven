import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Img from '../assets/guitar2.jpeg'
import Img2 from '../assets/guitar3.jpeg'
import Img3 from '../assets/guitar4.jpeg'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 350 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 350, min: 0 }, 
    items: 1
  }
};

const Slider = () => {
  return (
    <div className='container w-full lg:ml-80'>
      <Carousel responsive={responsive}>
      <div className='flex justify-center'>
        <img src={Img} alt="" className='h-[800px] object-contain'/>
      </div>
      <div className='flex justify-center'>
      <img src={Img2} alt="" className='h-[800px] object-contain' />
      </div>
      <div className='flex justify-center'>
      <img src={Img3} alt="" className='h-[800px] object-contain' />
      </div>
      <div className='flex justify-center'>
      <img src={Img} alt="" className='h-[800px] object-contain'/>
      </div>
      </Carousel>;
    </div>
  )
}

export default Slider