import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import {Quantity} from '../Components/Quantity'

export const SingleProduct = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  useEffect(() => {
    const foundProduct = productDetail.find(item => item.id === id);
    setProduct(foundProduct);
    console.log(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const handleAddToCart = () => {
    navigate(`/customer/cart`);
    console.log('Navigating to cart...');
  };

   const handleBuy = () => {
    navigate(`/customer/checkout`);
    console.log('Buying product...');
  };

  return (
    <div className="space-y-12 p-8">
      <div className="grid grid-cols-4 gap-6 items-start">
        <div className="col-span-2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <div className="flex items-center space-x-2">
            {product.rating}
            <span>Rating</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-green-600 font-bold">{product.disprice}</span>
            <span className="line-through text-gray-500">{product.price}</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded">{product.discount} OFF</span>
          </div>
          <div className='mr-96'>
            <Quantity />
          </div>
      <div className="flex space-x-4">
        <button 
          onClick={handleAddToCart} 
          className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleBuy} 
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Buy Now
        </button>
      </div>
        </div>
      </div>
        <div className='ml-12'>
        <h3 className='text-xl font-semibold mb-2'>Description</h3>
          <p className="text-gray-600">
            {product.description || "No description available for this product."}
          </p>
        </div>
    </div>
  );
};
