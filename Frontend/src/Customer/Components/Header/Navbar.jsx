import React, { useState } from 'react';
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="border-b-2 px-[5vw] py-4">
      <div className="flex justify-between items-center">

        {/* Company Logo */}
        <Link to="dashboard" className='text-xl font-bold'>
          Mariana Mart
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu & Search + Icons - Desktop */}
        <div className="hidden md:flex md:items-center md:gap-12">

          {/* Pages Links */}
          <div className='flex gap-12'>
            <Link to="dashboard" className="hover:underline">Home</Link>
            <Link to="contact" className="hover:underline">Contact</Link>
            <Link to="about" className="hover:underline">About</Link>
            <Link to="/sign-up" className="hover:underline">Sign Up</Link>
          </div>

          {/* Search + Icons */}
          <div className='flex gap-3 items-center'>

            {/* SearchBar */}
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>

            {/* Wishlist */}
            <CiHeart className='text-gray-900 text-2xl cursor-pointer' />

            <div className='flex'>
            {/* Cart */}
            <BsCart2 onClick={() => navigate(`/customer/cart`) } className='text-gray-900 text-2xl cursor-pointer' />
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">

          {/* Pages Links */}
          <Link to="dashboard" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="contact" className="hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/sign-up" className="hover:underline" onClick={() => setMenuOpen(false)}>Sign Up</Link>

          {/* Search Bar */}
          <div className="relative w-full max-w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>

          {/* Wishlist + Cart Icons */}
          <div className="flex gap-6 justify-center">
            <CiHeart className='text-gray-900 text-3xl cursor-pointer' />
            <BsCart2 onClick={() => navigate(`/customer/cart`) } className='text-gray-900 text-3xl cursor-pointer' />
          </div>
        </div>
      )}
    </nav>
  );
};
