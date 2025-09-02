import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Banner } from '../Components/Banner';
import { Product } from '../Components/Product';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFace, MdOutlineHeadphones } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaFemale, FaBaby, FaCat, FaFootballBall, FaSpa, FaTv, FaCar, FaBook, FaHome, FaBrush } from "react-icons/fa";
import axios from "axios";

export const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [catIndex, setCatIndex] = useState(0);
  const [sellingProduct, setSellingProduct] = useState([]);

  const categorys = [
    "Woman’s Fashion",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Sports & Outdoor",
    "Health & Beauty",
    "Electronic",
    "Automotive",
    "Stationery & Entertainment",
    "Beauty & Personal Care",
    "Home & Living",
  ];

  useEffect(() => {
    axios.get("http://localhost:3001/allproducts")
      .then(res => setProductDetail(res.data))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3001/purchase")
      .then(res => setSellingProduct(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const iconDetail = [
    { name: "Woman’s Fashion", image: <FaFemale size={32} /> },
    { name: "Baby’s & Toys", image: <FaBaby size={32} /> },
    { name: "Groceries & Pets", image: <FaCat size={32} /> },
    { name: "Sports & Outdoor", image: <FaFootballBall size={32} /> },
    { name: "Health & Beauty", image: <FaSpa size={32} /> },
    { name: "Electronic", image: <FaTv size={32} /> },
    { name: "Automotive", image: <FaCar size={32} /> },
    { name: "Stationery & Entertainment", image: <FaBook size={32} /> },
    { name: "Beauty & Personal Care", image: <MdFace size={32} /> },
    { name: "Home & Living", image: <FaHome size={32} /> },
  ];

  const showCount = 5;

  const handleCategoryNext = () => {
    const nextIndex = catIndex + 1;
    if (nextIndex + showCount > iconDetail.length) {
      setCatIndex(0); // loop to start
    } else {
      setCatIndex(nextIndex);
    }
  };

  const handleCategoryPrev = () => {
    const prevIndex = catIndex - 1;
    if (prevIndex < 0) {
      setCatIndex(iconDetail.length - showCount); // loop to end
    } else {
      setCatIndex(prevIndex);
    }
  };


  const visibleCategories = iconDetail.slice(catIndex, catIndex + showCount);

  const handleProductClick = (product) => {
    navigate(`/customer/singleproduct/${product._id || product.id}`);
  };

  return (
    <div className="md:mx-24">

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-10">
        <div className="hidden md:block space-y-2 md:col-span-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 my-[4vh]">
          {categorys.map((category, index) => (
            <p key={index} className='hover:border-r-2 hover:border-gray-400'>
              <Link to={`/customer/category/${encodeURIComponent(category)}`}>
                {category}
              </Link>
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
        <div className="flex justify-between items-center ">
          <p className="font-semibold text-3xl">Flash Sales</p>
          <div className="flex gap-2 mb-5">
            <button onClick={handlePrev}>
              <IoIosArrowBack size={24} />
            </button>
            <button onClick={handleNext}>
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        {/* Custom Carousel */}
        <div className="flex justify-between overflow-hidden">
          {visibleProducts.map((product, i) => (
            <div key={product._id || product.id || i} onClick={() => handleProductClick(product)}>
              <Product product={product} />
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center ">
          <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full px-[3vw] py-[1.5vh] mt-10">
            <Link to="/customer/allproducts">View All Products</Link>
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
        {/* Header with navigation */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-3xl">Browse By Category</p>
          <div className="flex gap-2 mb-5">
            <button onClick={handleCategoryPrev}>
              <IoIosArrowBack size={24} />
            </button>
            <button onClick={handleCategoryNext}>
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        {/* Category Cards - Horizontal Scroll Controlled by Buttons */}
        <div className="flex justify-between overflow-hidden">
          {visibleCategories.map((icon, i) => (
            <Link
              to={`/customer/category/${encodeURIComponent(icon.name)}`}
              key={i}
              className="flex flex-col items-center justify-center p-6 border rounded-lg shadow hover:shadow-lg transition cursor-pointer w-52 h-48 flex-shrink-0"
            >
              <div className="text-4xl mb-3">{icon.image}</div>
              <h2 className="font-semibold text-lg text-center">{icon.name}</h2>
            </Link>
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
        <div className="flex justify-between items-center">
          <p className="font-semibold text-3xl">Best Selling Products</p>
          <div className="flex gap-2">
            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-[1vw] py-[1vh] mb-5 rounded-md ">
              <Link to="/customer/allproducts">View All Products</Link>
            </button>
          </div>
        </div>

        <div className="flex justify-between overflow-hidden">
          {sellingProduct.slice(0, visibleCount).map((product, i) => (
            <div key={product._id || product.id || i} onClick={() => handleProductClick(product)}>
              {console.log(sellingProduct)}
              
              <Product product={product} />
            </div>
          ))}
        </div>

      </div>

      {/* Banner */}
      <div className="my-20 space-y-7">
        <img src="/ban.png" alt="banner" className='w-[98%]' />
      </div>

      {/* Our Product */}
      <div className="my-20 space-y-7">

        {/* Section Title */}
        <div className="flex gap-3 items-center">
          <div className="h-6 w-3 bg-red-600 rounded-sm"></div>
          <p>Our Product</p>
        </div>

        {/* Header with navigation */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-3xl">Explore Our Products</p>
          <div className="flex gap-2">
            <button onClick={handlePrev}>
              <IoIosArrowBack size={24} />
            </button>
            <button onClick={handleNext}>
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        {/* Custom Carousel */}
        <div className="flex justify-between overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div
              key={product._id || product.id || index}
              onClick={() => handleProductClick(product)}
            >
              <Product product={product} />
            </div>
          ))}
        </div>
{/* 
        <div className="flex justify-between overflow-hidden">
          {productDetail.slice(0, visibleCount).map((product, i) => (
            <div key={product.id || i + startIndex} onClick={() => handleProductClick(product)}>
              <Product product={product} />
            </div>
          ))}
        </div> */}

        {/* View All Products Button */}
        <div className="text-center ">
          <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-full px-[3vw] py-[1.5vh] mt-9 ">
            <Link to="/customer/allproducts">View All Products</Link>
          </button>
        </div>
      </div>

      {/* Feature */}
      <div className="grid grid-cols-5 grid-rows-4 gap-5 my-20 ">
        <div className="col-span-3 row-span-4 bg-[#0d0d0d] flex items-center justify-center">
          <div className="bg-[url('/game.png')] bg-contain bg-no-repeat bg-center h-96 text-white w-full flex flex-col justify-end p-4">
            <div>
              <p className='text-2xl font-semibold'>PlayStation 5</p>
              <p className='mr-96 text-sm '>Black and White version of the PS5 coming out on sale.</p>
              <button className=' border-b-[1px]'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-span-2 row-span-2 bg-[#0d0d0d] flex items-center justify-center">
          <div className="bg-[url('/women.png')] bg-contain bg-no-repeat  h-48 w-full bg-right text-white flex flex-col justify-end p-4">
            <div>
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
