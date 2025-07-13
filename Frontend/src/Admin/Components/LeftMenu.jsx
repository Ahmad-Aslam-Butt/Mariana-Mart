import React, { useState } from 'react'
import { MenuItem } from './MenuItem'
import { Link } from 'react-router-dom'

export const LeftMenu = () => {
    const [isOpen, setIsOpen] = useState(null)

    return (
        <div className='md:overflow-visible md:bg-[#14171c] md:text-white md:h-screen relative z-10'>
            {/* Logo */}
            <div className='px-4 pt-4 pb-6'>
                <Link to='/admin/dashboard'><h1 className='font-bold text-xl'>Mariana Mart</h1></Link>
                <p className='text-xs'>Ecommerce Store Admin Panel</p>
            </div>

            {/* Menu Items */}
            <p className='px-4 text-sm text-[#ffffff65]'>Home</p>
            <MenuItem title='Dashboard' link='/admin/dashboard' />

            <p className='px-4 mt-3 text-sm text-[#ffffff65]'>Reports & Analysis</p>
            <div
                className='relative block'
                onMouseEnter={() => setIsOpen('reports')}
                onMouseLeave={() => setIsOpen(null)}
            >
                <MenuItem title='Reports' link='/admin/reports' />
                <div className={`absolute top-0 left-full w-48 z-50 ${isOpen === 'reports' ? 'block bg-[#DB4444]' : 'hidden'}`}>
                    <MenuItem title='Sales' link='/admin/sales' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Products' link='/admin/products' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Customers' link='/admin/customers' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Inventory Levels' link='/admin/inventory' />
                </div>
            </div>

            <p className='px-4 mt-3 text-sm text-[#ffffff65]'>Management Menu</p>
            <div
                className='relative block'
                onMouseEnter={() => setIsOpen('product')}
                onMouseLeave={() => setIsOpen(null)}
            >
                <MenuItem title='Product Management' link='/admin/product-management' />
                <div className={`absolute top-0 left-full w-48 z-50 ${isOpen === 'product' ? 'block bg-[#DB4444]' : 'hidden'}`}>
                    <MenuItem title='All Products' link='/admin/all-products' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Add Product' link='/admin/add-product' />
                </div>
            </div>

            <div
                className='relative block'
                onMouseEnter={() => setIsOpen('order')}
                onMouseLeave={() => setIsOpen(null)}
            >
                <MenuItem title='Order Management' link='/admin/order-management' />
                <div className={`absolute top-0 left-full w-48 z-50 ${isOpen === 'order' ? 'block bg-[#DB4444]' : 'hidden'}`}>
                    <MenuItem title='All Orders' link='/admin/all-orders' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Add Order' link='/admin/add-order' />
                </div>
            </div>

            <div
                className='relative block'
                onMouseEnter={() => setIsOpen('customers')}
                onMouseLeave={() => setIsOpen(null)}
            >
                <MenuItem title='Customer Management' link='/admin/customer-management' />
                <div className={`absolute top-0 left-full w-48 z-50 ${isOpen === 'customers' ? 'block bg-[#DB4444]' : 'hidden'}`}>
                    <MenuItem title='All Customers' link='/admin/all-customers' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Add Customer' link='/admin/add-customer' />
                </div>
            </div>

            <div
                className='relative block'
                onMouseEnter={() => setIsOpen('shipping')}
                onMouseLeave={() => setIsOpen(null)}
            >
                <MenuItem title='Shipping Management' link='/admin/shipping-management' />
                <div className={`absolute top-0 left-full w-48 z-50 ${isOpen === 'shipping' ? 'block bg-[#DB4444]' : 'hidden'}`}>
                    <MenuItem title='Shipping Services' link='/admin/shipping-services' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Add Shipping Service' link='/admin/add-shipping-service' />
                </div>
            </div>

            <MenuItem title='Drop Shipping Management' link='/admin/drop-shipping' />

            <div
                className='relative block'
                onMouseEnter={() => setIsOpen('coupons')}
                onMouseLeave={() => setIsOpen(null)}
            >
                <MenuItem title='Coupons' link='/admin/coupons' />
                <div className={`absolute top-0 left-full w-48 z-50 ${isOpen === 'coupons' ? 'block bg-[#DB4444]' : 'hidden'}`}>
                    <MenuItem title='All Coupons' link='/admin/all-coupons' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Add Coupon' link='/admin/add-coupon' />
                </div>
            </div>

            <p className='px-4 mt-3 text-sm text-[#ffffff65]'>Setting</p>
            <div
                className='relative block'
                onMouseEnter={() => setIsOpen('settings')}
                onMouseLeave={() => setIsOpen(null)}
            >
                <MenuItem title='Settings' link='/admin/setting' />
                <div className={`absolute top-0 left-full w-48 z-50 ${isOpen === 'settings' ? 'block bg-[#DB4444]' : 'hidden'}`}>
                    <MenuItem title='Manage Profile' link='/admin/profile' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Users' link='/admin/users' />
                    <hr className="my-1 border-gray-300 opacity-40" />
                    <MenuItem title='Change Password' link='/admin/change-password' />
                </div>
            </div>
        </div>
    )
}
