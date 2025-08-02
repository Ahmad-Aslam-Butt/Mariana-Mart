import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const InfoBar = () => {
  return (
    <div className="bg-black text-white text-sm">
      <div className="flex flex-col md:flex-row md:justify-around items-center px-4 py-2 space-y-1 md:space-y-0">

        {/* Sale Message */}
        <p className="text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <a href="#" className="underline hover:text-red-400 px-2">
            Shop Now
          </a>
        </p>

        {/* Language Selector */}
        <div className="flex items-center justify-center cursor-pointer">
          <span>English</span>
          <RiArrowDropDownLine className="text-xl" />
        </div>

      </div>
    </div>
  );
};
