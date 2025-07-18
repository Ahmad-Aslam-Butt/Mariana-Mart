import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Banner = () => {
  const selectedIndex = 0; // default index for selected slide

  return (
    <div className='w-[70vw] mx-auto'>
      <Carousel 
        selectedItem={selectedIndex}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
        autoPlay // Optional: for automatic sliding
        interval={3000} // Optional: 3 seconds delay
      >
        <div className='aspect-auto'>
          <img 
            className='w-full h-full object-cover shadow-lg rounded-lg' 
            src='/banner.png'  
            alt="Banner Slide 1"
          />
        </div>
        <div className='aspect-auto'>
          <img 
            className='w-full h-full object-cover shadow-lg rounded-lg' 
            src='/banner.png'  
            alt="Banner Slide 2"
          />
        </div>
        <div className='aspect-auto'>
          <img 
            className='w-full h-full object-cover shadow-lg rounded-lg' 
            src='/banner.png'  
            alt="Banner Slide 3"
          />
        </div>
        <div className='aspect-auto'>
          <img 
            className='w-full h-full object-cover shadow-lg rounded-lg' 
            src='/banner.png'  
            alt="Banner Slide 4"
          />
        </div>
      </Carousel>
    </div>
  );
};
