import React from 'react';
import { OrderSummary } from '../Components/OrderSummary';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import QuantityCounter from '../Components/QuantityCounter';

export const Cart = () => {
  const navigate = useNavigate();

  // Dummy cart product data
  // const productDetail = [
  //   { id: "1", name: "HAVIT HV-G92 Gamepad", image: "/product.png", price: 30, quantity: 1 },
  //   { id: "2", name: "Logitech G F310", image: "/product.png", price: 35, quantity: 2 },
  // ];
const productDetail = [
    { id: "1", name: "HAVIT HV-G92 Gamepad", discount: "20%", image: "/product.png", disprice: "$18", price: "30", rating: <FaStar />, quantity: 1 },
    { id: "2", name: "Logitech G F310", discount: "15%", image: "/product.png", disprice: "$25", price: "35", rating: <FaStar /> , quantity: 1  },
    { id: "3", name: "Sony DualShock 4", discount: "10%", image: "/product.png", disprice: "$40", price: "45", rating: <FaStar /> , quantity: 1  },
    { id: "4", name: "Xbox Controller", discount: "25%", image: "/product.png", disprice: "$45", price: "60", rating: <FaStar /> , quantity: 1  },
    { id: "5", name: "Razer Wolverine V2", discount: "30%", image: "/product.png", disprice: "$70", price: "100", rating: <FaStar /> , quantity: 1  },
    { id: "6", name: "HAVIT HV-G92 Gamepad", discount: "20%", image: "/product.png", disprice: "$18", price: "30", rating: <FaStar /> , quantity: 1  },
    { id: "7", name: "Logitech G F310", discount: "15%", image: "/product.png", disprice: "$25", price: "35", rating: <FaStar /> , quantity: 1  },
    { id: "8", name: "Sony DualShock 4", discount: "10%", image: "/product.png", disprice: "$40", price: "45", rating: <FaStar /> , quantity: 1  },
    { id: "9", name: "Xbox Controller", discount: "25%", image: "/product.png", disprice: "$45", price: "60", rating: <FaStar /> , quantity: 1  },
    { id: "10", name: "Razer Wolverine V2", discount: "30%", image: "/product.png", disprice: "$70", price: "100", rating: <FaStar /> , quantity: 1  }
  ];
  const handleCheckout = () => {
    navigate(`/customer/checkout`);
  };

  const getTotal = () => {
    return productDetail.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <div className='grid grid-cols-6 mr-8'>
        {/* Cart Items */}
        <div className='col-span-4 py-3 px-3 border'>
          <h1 className='text-2xl font-semibold mb-4'>Shopping Cart</h1>
          <div className='grid grid-cols-4 text-center font-semibold border-b pb-2'>
            <p>Product</p>
            <p>Price</p>
            <p>Item</p>
            <p>Total</p>
          </div>
          {productDetail.map((item) => (
            <div
              key={item.id}
              className='grid grid-cols-4 text-center items-center border-b py-4'
            >
              <div className='flex items-center gap-4 justify-center'>
                <img src={item.image} alt={item.name} className='w-20 h-16 object-cover' />
                <p>{item.name}</p>
              </div>
              <p>${item.price}</p>
              <p><QuantityCounter /></p>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className='col-span-2 h-fit border px-7 py-7 sticky top-2'>
          <OrderSummary />
          <div className='mt-4'>
            <p className='text-lg font-semibold mb-2'>Cart Total: ${getTotal()}</p>
            <button
              onClick={handleCheckout}
              className='w-full py-2 bg-red-500 hover:bg-red-600 rounded text-white'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
