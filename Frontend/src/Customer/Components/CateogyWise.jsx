import React from 'react';

export const CateogyWise = ({ name, image }) => {
  return (
    <div className='space-y-1'>
      <div className='py-[5vh] px-[1.5vw] cursor-pointer items-center border rounded-md shadow-md text-black bg-white hover:bg-red-500 hover:text-white'>
        <div className='w-28 h-24 flex justify-center items-center text-4xl'>
          {image}
        </div>
        <p className='text-center'>{name}</p>
      </div>
    </div>
  );
};
