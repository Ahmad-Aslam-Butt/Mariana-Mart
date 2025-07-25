import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Banner } from '../Components/Banner';
import { Product } from '../Components/Product';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CateogyWise } from '../Components/CateogyWise';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { PiBabyDuotone } from "react-icons/pi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GrRun } from "react-icons/gr";

export const CustomerDashboard = () => {
  const nevigate = useNavigate()

  const categoryArr = [
    "Woman’s Fashion", "Man’s Fashion", "Electronic", "Home & Lifestyle",
    "Medicine", "Sports & Outdoor", "Baby’s & Toys", "Groceries & Pets", "Health & Beauty"
  ];

  //  Flash Sales
  const productDetail = [
    { id: "1", name: "HAVIT HV-G92 Gamepad", discount: "20%", image: "/product.png", disprice: "$18", price: "$30", rating: <FaStar /> },
    { id: "2", name: "Logitech G F310", discount: "15%", image: "/product.png", disprice: "$25", price: "$35", rating: <FaStar /> },
    { id: "3", name: "Sony DualShock 4", discount: "10%", image: "/product.png", disprice: "$40", price: "$45", rating: <FaStar /> },
    { id: "4", name: "Xbox Controller", discount: "25%", image: "/product.png", disprice: "$45", price: "$60", rating: <FaStar /> },
    { id: "5", name: "Razer Wolverine V2", discount: "30%", image: "/product.png", disprice: "$70", price: "$100", rating: <FaStar /> },
    { id: "6", name: "HAVIT HV-G92 Gamepad", discount: "20%", image: "/product.png", disprice: "$18", price: "$30", rating: <FaStar /> },
    { id: "7", name: "Logitech G F310", discount: "15%", image: "/product.png", disprice: "$25", price: "$35", rating: <FaStar /> },
    { id: "8", name: "Sony DualShock 4", discount: "10%", image: "/product.png", disprice: "$40", price: "$45", rating: <FaStar /> },
    { id: "9", name: "Xbox Controller", discount: "25%", image: "/product.png", disprice: "$45", price: "$60", rating: <FaStar /> },
    { id: "10", name: "Razer Wolverine V2", discount: "30%", image: "/product.png", disprice: "$70", price: "$100", rating: <FaStar /> }
  ];

  const visibleCount = 5;

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 1;
    if (nextIndex + visibleCount > productDetail.length) {
      setStartIndex(0);
    } else {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 1;
    if (prevIndex < 0) {
      setStartIndex(productDetail.length - visibleCount);
    } else {
      setStartIndex(prevIndex);
    }
  };

  const visibleProducts = productDetail.slice(startIndex, startIndex + visibleCount);

  //  Category 
  const iconDetail = [
    { name: "Men's Fashion", image: <FaMale size={32} /> },
    { name: "Women's Fashion", image: <FaFemale size={32} /> },
    { name: "Babies & Toys", image: <PiBabyDuotone size={32} /> },
    { name: "Medicine", image: <AiOutlineMedicineBox size={32} /> },
    { name: "Sports & Outdoor", image: <GrRun size={32} /> },
    { name: "Men's Fashion", image: <FaMale size={32} /> },
    { name: "Women's Fashion", image: <FaFemale size={32} /> },
    { name: "Babies & Toys", image: <PiBabyDuotone size={32} /> },
    { name: "Medicine", image: <AiOutlineMedicineBox size={32} /> },
    { name: "Sports & Outdoor", image: <GrRun size={32} /> },
  ];

  const showCount = 6;
  const [catIndex, setCatIndex] = useState(0);

  const handleCategoryNext = () => {
    const nextIndex = catIndex + 1;
    if (nextIndex + showCount > iconDetail.length) {
      setCatIndex(0);
    } else {
      setCatIndex(nextIndex);
    }
  };

  const handleCategoryPrev = () => {
    const prevIndex = catIndex - 1;
    if (prevIndex < 0) {
      setCatIndex(iconDetail.length - showCount);
    } else {
      setCatIndex(prevIndex);
    }
  };

  const visibleCategories = iconDetail.slice(catIndex, catIndex + showCount);


  const handleProductClick = (product) => {
    nevigate(`/customer/singleproduct/${product.id}`)
    console.log('working')
  }
  return (
    <div className="mx-24">

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-10">
        <div className="space-y-2 md:col-span-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 my-[4vh]">
          {categoryArr.map((category, index) => (
            <p key={index} className='hover:border-r-2 hover:border-gray-400'>
              <Link to={`/${category}`}>{category}</Link>
            </p>
          ))}
        </div>
        <div className="md:col-span-4">
          <Banner />
        </div>
      </div>

      {/* Flash Sale */}
      <div className="my-20 space-y-7">

        {/* Section Title */}
        <div className="flex gap-3 items-center">
          <div className="h-6 w-3 bg-red-600 rounded-sm"></div>
          <p>Today’s</p>
        </div>

        {/* Header with navigation */}
        <div className="flex justify-between items-center mr-[4vw]">
          <p className="font-semibold text-3xl">Flash Sales</p>
          <div className="flex gap-2 mb-5">
            <button onClick={handlePrev}>
              <IoIosArrowBack className="size-6" />
            </button>
            <button onClick={handleNext}>
              <IoIosArrowForward className="size-6" />
            </button>
          </div>
        </div>

        {/* Custom Carousel */}
        <div className="flex gap-14 overflow-hidden">
          {visibleProducts.map((product, i) => (
            <div key={i} onClick={() => handleProductClick(product)}>
              <Product
                product={product}
              />
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center ">
          <button className="bg-red-500 px-[3vw] py-[1.5vh] mt-10 rounded-md border">
            <Link to="product">View All Products</Link>
          </button>
        </div>
      </div>

      {/* Category */}
      <div className="my-20 space-y-7">

        {/* Section Title */}
        <div className="flex gap-3 items-center">
          <div className="h-6 w-3 bg-red-600 rounded-sm"></div>
          <p>Category</p>
        </div>

        {/* Header with navigation */}
        <div className="flex justify-between items-center mr-[4vw]">
          <p className="font-semibold text-3xl">Browse By Category</p>
          <div className="flex gap-2 mb-5">
            <button onClick={handleCategoryPrev}>
              <IoIosArrowBack className="size-6" />
            </button>
            <button onClick={handleCategoryNext}>
              <IoIosArrowForward className="size-6" />
            </button>
          </div>
        </div>

        {/* Custom Carousel */}
        <div className="flex gap-14 overflow-hidden">
          {visibleCategories.map((icon, i) => (
            <CateogyWise
              key={`${catIndex}-${i}`} 
              name={icon.name}
              image={icon.image}
            />
          ))}
        </div>
      </div>

      {/* This Month Sale */}
      <div className="my-20 space-y-7">

        {/* Section Title */}
        <div className="flex gap-3 items-center">
          <div className="h-6 w-3 bg-red-600 rounded-sm"></div>
          <p>This Month</p>
        </div>

        {/* Header with navigation */}
        <div className="flex justify-between items-center mr-[4vw]">
          <p className="font-semibold text-3xl">Best Selling Products</p>
          <div className="flex gap-2">
            <button className="bg-red-500 text-white px-[1vw] py-[1vh] mb-5 rounded-md border">
              <Link to="product">View All Products</Link>
            </button>
          </div>
        </div>
        <div className="flex gap-14 overflow-hidden">
          {productDetail.slice(0, visibleCount).map((product, i) => (
            <div key={product.id || i + startIndex} onClick={() => handleProductClick(product)}>
              <Product product={product} />
            </div>
          ))}
        </div>

      </div>

      {/* Banner */}
      <div className="my-20 space-y-7">
        <img src="/ban.png" alt="ban" className='w-[98%]' />
      </div>

      {/* Our Product */}
      <div className="my-20 space-y-7">

        {/* Section Title */}
        <div className="flex gap-3 items-center">
          <div className="h-6 w-3 bg-red-600 rounded-sm"></div>
          <p>Our Product</p>
        </div>

        {/* Header with navigation */}
        <div className="flex justify-between items-center mr-[4vw]">
          <p className="font-semibold text-3xl">Explore Our Products</p>
          <div className="flex gap-2">
            <button onClick={handlePrev}>
              <IoIosArrowBack className="size-6" />
            </button>
            <button onClick={handleNext}>
              <IoIosArrowForward className="size-6" />
            </button>
          </div>
        </div>

        {/* Custom Carousel */}
        <div className="flex gap-14 overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div
              key={product.id || index + startIndex}
              onClick={() => handleProductClick(product)}
            >
              <Product product={product} />
            </div>
          ))}
        </div>

        <div className="flex gap-14 overflow-hidden">
          {productDetail.slice(0, visibleCount).map((product, i) => (
            <div key={product.id || i + startIndex} onClick={() => handleProductClick(product)}>
              <Product product={product} />
            </div>
          ))}
        </div>
        {/* View All Products Button */}
        <div className="text-center ">
          <button className="bg-red-500 px-[3vw] py-[1.5vh] mt-9 rounded-md border">
            <Link to="product">View All Products</Link>
          </button>
        </div>
      </div>

      {/* Feature */}
      <div className="grid grid-cols-5 grid-rows-4 gap-5 my-20 ">
        <div className="col-span-3 row-span-4 bg-[#0d0d0d] flex items-center justify-center">
          <div className="bg-[url('/game.png')] bg-contain bg-no-repeat bg-center h-96 text-white w-full flex flex-col justify-end p-4">
            <div >
              <p className='text-2xl font-semibold'>PlayStation 5</p>
              <p className='mr-96 text-sm '>Black and White version of the PS5 coming out on sale.</p>
              <button className=' border-b-[1px]'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-span-2 row-span-2 bg-[#0d0d0d] flex items-center justify-center">
          <div className="bg-[url('/women.png')] bg-contain bg-no-repeat  h-48 w-full bg-right text-white flex flex-col justify-end p-4">
            <div >
              <p className='text-2xl font-semibold'>Women’s Collections</p>
              <p className='mr-44 text-sm '>Featured woman collections that give you another vibe.</p>
              <button className=' border-b-[1px]'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-start-4 row-start-3 row-span-2 bg-[#0d0d0d] flex items-center justify-center">
          <div className="bg-[url('/speaker.png')] bg-contain bg-no-repeat bg-center h-48 w-full text-white flex flex-col justify-end p-4">
            <div>
              <p className='text-xl font-semibold'>Speakers</p>
              <p className='text-sm '>Amazon wireless speakers</p>
              <button className=' border-b-[1px]'>Shop Now</button>
            </div>
          </div>
        </div>

        <div className="col-start-5 row-start-3 row-span-2 bg-[#0d0d0d] flex items-center justify-center">
          <div className="bg-[url('/gucci.png')] bg-contain bg-no-repeat  bg-center h-48 w-full text-white flex flex-col justify-end p-4">
            <div>
              <p className='text-xl font-semibold'>Perfume</p>
              <p className='text-sm '>GUCCI INTENSE OUD EDP</p>
              <button className=' border-b-[1px]'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* information */}
      <div className='flex gap-28 justify-center text-center space-y-2 my-20'>
        <div className='flex flex-col items-center'>
          <TbTruckDelivery className='size-14 p-2 mb-2 bg-black text-white rounded-full border-[#c1c0c1] border-8' />
          <p className='text-lg font-semibold'>FREE AND FAST DELIVERY</p>
          <p className='text-sm'>Free delivery for all orders over $140</p>
        </div>

        <div className='flex flex-col items-center'>
          <MdOutlineHeadphones className='size-14 p-2 mb-2 bg-black text-white rounded-full border-[#c1c0c1] border-8' />
          <p className='text-lg font-semibold'>24/7 CUSTOMER SERVICE</p>
          <p className='text-sm'>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col items-center'>
          <IoShieldCheckmarkOutline className='size-14 p-2 mb-2 bg-black text-white rounded-full border-[#c1c0c1] border-8' />
          <p className='text-lg font-semibold'>MONEY BACK GUARANTEE</p>
          <p className='text-sm'>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
