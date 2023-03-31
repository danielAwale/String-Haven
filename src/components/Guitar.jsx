import React from "react";

const Guitar = ({image}) => {
  return <div>
     <div className='flex flex-col justify-center items-center'>
        <img src={image} alt="" className='h-[800px] object-contain'/>
          <p className="text-[20px] font-semibold">Model SH-3</p>
          <p className="text-[18px] font-semibold">$1,350</p>
          <button className="py-2 px-4 bg-amber-500 rounded-xl mt-2">More Info</button>
      </div>
  </div>;
};

export default Guitar;
