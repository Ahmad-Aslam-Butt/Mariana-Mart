import React from 'react'
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='flex justify-between px-[5vw]  border-b-2 py-4 items-center'>

                {/* Company Name/ Logo */}
                <Link to="dashboard" className='text-xl font-bold '>
                    Mariana Mart
                </Link>
                
                {/* Pages Name */}
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
                            className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                    </div>

                    {/* Wishlist */}
                    <CiHeart className='text-gray-900 text-2xl' />

                    {/* Cart */}
                    <BsCart2 className='text-gray-900 text-2xl' />
                </div>

            {/* Bottom Border */}
            {/* <div className='border-t border-gray-300'></div> */}
        </div>
    )
}
