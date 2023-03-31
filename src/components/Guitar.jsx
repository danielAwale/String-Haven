import React from "react";

const Guitar = ({image}) => {
  return <div>
     <div className='flex justify-center'>
        <img src={image} alt="" className='h-[800px] object-contain'/>
      </div>
  </div>;
};

export default Guitar;
