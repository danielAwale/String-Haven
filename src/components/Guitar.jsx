import React from "react";

const Guitar = ({img}) => {
  return <div>
     <div className='flex justify-center'>
        <img src={img} alt="" className='h-[800px] object-contain'/>
      </div>
  </div>;
};

export default Guitar;
