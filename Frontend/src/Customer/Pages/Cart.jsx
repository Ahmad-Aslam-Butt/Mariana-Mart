import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { QuantityCounter } from "../Components/QuantityCounter";
import { CiLocationOn } from "react-icons/ci";

export const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartitems")) || [];
    setCartItems(items);
  }, []);

  const handleCheckout = () => {
    navigate(`/customer/checkout`);
  };

  const getSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const getCartsTotal = () => {
    return cartItems.reduce((total, item) => 25 + total + item.price * item.quantity, 0);
  };
  const getTotal = () => {
   return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

        {/* Cart Items */}
        <div className="md:col-span-4 border rounded p-4">
          <div className='flex flex-col md:flex-row justify-between pb-4 items-center'>
            <h1 className="text-2xl font-semibold mb-4 md:mb-0">Shopping Cart</h1>
            <Link to="/Customer">
              <button className='border border-red-500 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white rounded-full w-full md:w-auto'>
                More Shopping
              </button>
            </Link>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-4 text-center font-semibold border-b pb-2">
            <p>Product</p>
            <p>Price</p>
            <p>Item</p>
            <p>Total</p>
          </div>

          {/* Cart Items List */}
          {cartItems.map((product, index) => {
            const setQuantity = (newQty) => {
              let updatedItems = [...cartItems];
              if (newQty === 0) {
                updatedItems.splice(index, 1);
              } else {
                updatedItems[index].quantity = newQty;
              }

              setCartItems(updatedItems);
              localStorage.setItem("cartitems", JSON.stringify(updatedItems));
            };

            return (
              <div
                key={index}
                className="border-b py-4 flex flex-col md:grid md:grid-cols-4 items-center md:text-center"
              >
                {/* Product info */}
                <div className="flex items-center gap-4 mb-4 md:mb-0 justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-16 object-cover"
                  />
                  <p className="text-center md:text-left">{product.name}</p>
                </div>

                {/* Price */}
                <p className="mb-4 md:mb-0">${product.price}</p>

                {/* Quantity counter */}
                <div className="flex justify-center mb-4 md:mb-0">
                  <QuantityCounter
                    quantity={product.quantity}
                    setQuantity={setQuantity}
                  />
                </div>

                {/* Total */}
                <p>${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="md:col-span-2 border rounded p-6 sticky top-2 bg-white">
          <div>
            {/* Location */}
            <h2 className='font-extralight mb-3'>Location</h2>
            <div className='flex gap-2 cursor-pointer mb-3 items-center'>
              <CiLocationOn className='text-xl' />
              <p className='text-sm'>Add Shipping Address</p>
            </div>

            {/* Subtotal */}
            <h1 className='text-xl font-semibold mb-3'>Order Summary</h1>
            <div className='flex justify-between mb-1 font-light'>
              <h3>Subtotal ({getTotal()} items)</h3>
              <p>${getSubTotal().toFixed(2)}</p>
            </div>
            <div className='flex justify-between mb-8 font-light'>
              <h3>Shipping Fee</h3>
              <p>$25</p>
            </div>

            {/* Coupon */}
            <div className='mb-6 flex flex-col md:flex-row gap-2'>
              <input
                className='border rounded px-4 py-2 flex-grow'
                type="text"
                placeholder='Enter Coupon Code'
              />
              <button className='border rounded px-6 py-2 bg-gray-800 hover:bg-black text-white'>
                Apply
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between mb-6">
              <p className="text-lg font-semibold mb-2">Cart Total</p>
              <p className="text-lg font-semibold mb-2 text-red-500">${getCartsTotal().toFixed(2)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full py-2 bg-red-500 hover:bg-red-600 rounded text-white"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
