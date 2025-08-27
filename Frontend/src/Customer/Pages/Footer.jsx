import React from 'react'
import { Link } from 'react-router-dom'
import { IoSendOutline } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='bg-black text-white pb-6'>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 md:p-4">

                {/* Grid 1 */}
                <div className="space-y-3 md:space-y-2 text-center md:text-left">
                    <p className='mb-3 md:mb-5'>
                        <Link to="dashboard" className='text-xl font-bold'>Mariana Mart</Link>
                    </p>
                    <p className='text-xl font-medium mb-3 md:mb-5'>Subscribe</p>
                    <p className='text-sm'>Get 10% off your first order</p>
                    <div className="relative w-full max-w-xs mx-auto md:mx-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-black border rounded-md py-2 pl-4 pr-10 text-center md:text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <IoSendOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                    </div>

                </div>

                {/* Grid 2 */}
                <div className="p-6 md:pt-12 space-y-2 text-center">
                    <p className='text-xl font-medium mb-3 md:mb-5'>Support</p>
                    <p className='text-sm'>DevSmaj Road Lahore</p>
                    <p className='text-sm'>ahmadbutt24633@gmail.com</p>
                    <p className='text-sm'>+92 304 956787</p>
                </div>

                {/* Grid 3 */}
                <div className="p-6 md:pt-12 space-y-2 text-center">
                    <p className='text-xl font-medium mb-3 md:mb-5'>Account</p>
                    <p className='text-sm'><Link to="accountDetail"> My Account</Link></p>
                    <p className='text-sm'><Link to="login"> Login / Register</Link></p>
                    <p className='text-sm'><Link to="cart"> Cart</Link></p>
                    <p className='text-sm'><Link to="allProducts"> Shop</Link></p>
                </div>

                {/* Grid 4 */}
                <div className="p-6 md:pt-12 space-y-2 text-center">
                    <p className='text-xl font-medium mb-3 md:mb-5'>Quick Link</p>
                    <p className='text-sm'><Link to="accountDetail"> Privacy Policy</Link></p>
                    <p className='text-sm'><Link to="login"> Terms of Use</Link></p>
                    <p className='text-sm'><Link to="cart"> FAQ</Link></p>
                    <p className='text-sm'><Link to="allProducts"> Contact</Link></p>
                </div>

                {/* Grid 5 */}
                <div className="p-6 md:pt-12 text-center">
                    <p className='text-xl font-medium mb-3 md:mb-5'>Download App</p>
                    <p className='text-sm'>Save $3 with App New User Only</p>

                    {/* QR code and app store images container */}
                    <div className='flex flex-row gap-3 items-center justify-center'>
                        <img src="/qrcode.png" alt="qrcode" className='w-20 md:w-24' />
                        <div className='flex flex-col gap-1'>
                            <img src="/google.png" alt="google" className='w-36 md:w-40' />
                            <img src="/AppStore.png" alt="AppStore" className='w-36 md:w-40' />
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='flex gap-6 mt-5 justify-center text-2xl'>
                        <Link><TiSocialFacebook /></Link>
                        <Link to='#'><CiTwitter /></Link>
                        <Link to='#'><FaInstagram /></Link>
                        <Link to='#'><FaLinkedinIn /></Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
