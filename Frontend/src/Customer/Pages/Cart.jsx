import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div>
      <div className="grid grid-cols-6 mr-8">
        {/* Cart Items */}
        <div className="col-span-4 py-3 px-3 border">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="grid grid-cols-4 text-center font-semibold border-b pb-2">
            <p>Product</p>
            <p>Price</p>
            <p>Item</p>
            <p>Total</p>
          </div>
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
                className="grid grid-cols-4 text-center items-center border-b py-4"
              >
                <div className="flex items-center gap-4 justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-16 object-cover"
                  />
                  <p>{product.name}</p>
                </div>
                <p>${product.price}</p>
                <div className="flex justify-center">
                  <QuantityCounter
                    quantity={product.quantity}
                    setQuantity={setQuantity}
                  />
                </div>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="col-span-2 h-fit border px-7 py-7 sticky top-2">
          <div>
            {/* location */}
            <h2 className=' font-extralight mb-3'>
              Location
            </h2>
            <div className='flex gap-2 cursor-pointer mb-3'>
              <CiLocationOn className=' size-5  ' />
              <p className='text-sm'>Add Shipping Address</p>
            </div>

            {/* Subtotal */}
            <h1 className='text-xl font-semibold mb-3'>Order Summary</h1>
            <div className='flex justify-between  mb-1 font-light '>
              <h3>Subtotal (0 items)</h3>
              <p>${getSubTotal()}</p>
            </div>
            <div className='flex justify-between mb-8 font-light'>
              <h3>Shipping Fee</h3>
              <p> $25</p>

            </div>

            {/* cupon */}
            <div className='mb-6 '>
              <input className='border rounded px-8 py-1' type="text" placeholder='Enter Cupon Code' />
              <button className='border rounded px-10 py-1 ml-2.5 bg-gray-800 hover:bg-black text-white '>Apply</button>
            </div>


          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-6">
              <p className="text-lg font-semibold mb-2">Cart Total</p>
              <p className="text-lg font-semibold mb-2 text-red-500">
                {getCartsTotal()}
              </p>
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
