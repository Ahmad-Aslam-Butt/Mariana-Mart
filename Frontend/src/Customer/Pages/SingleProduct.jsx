import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { FaStar } from 'react-icons/fa';
import { Quantity } from '../Components/Quantity';

export const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantities, setQuantities] = useState(1);

  const productDetail = [
    { id: "1", name: "HAVIT HV-G92 Gamepad", discount: "20%", image: "/product.png", disprice: 18, price: 30 },
    { id: "2", name: "Logitech G F310", discount: "15%", image: "/product.png", disprice: 25, price: 35 },
    { id: "3", name: "Sony DualShock 4", discount: "10%", image: "/product.png", disprice: 40, price: 45 },
    { id: "4", name: "Xbox Controller", discount: "25%", image: "/product.png", disprice: 45, price: 60 },
    { id: "5", name: "Razer Wolverine V2", discount: "30%", image: "/product.png", disprice: 70, price: 100 },
    { id: "6", name: "HAVIT HV-G92 Gamepad", discount: "20%", image: "/product.png", disprice: 18, price: 30 },
    { id: "7", name: "Logitech G F310", discount: "15%", image: "/product.png", disprice: 25, price: 35 },
    { id: "8", name: "Sony DualShock 4", discount: "10%", image: "/product.png", disprice: 40, price: 45 },
    { id: "9", name: "Xbox Controller", discount: "25%", image: "/product.png", disprice: 45, price: 60 },
    { id: "10", name: "Razer Wolverine V2", discount: "30%", image: "/product.png", disprice: 70, price: 100 }
  ];

  useEffect(() => {
    const foundProduct = productDetail.find(item => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const handleAddToCart = (e) => {
    e.preventDefault()

    const cartItems = JSON.parse(localStorage.getItem("cartitems")) || [];
    const newitem = {
      "id": product.id,
      "name": product.name,
      "image": product.image,
      "price": product.disprice,
      "quantity": quantities
    };
 
  const filtered = cartItems.filter((item) => item.id === newitem.id);

  if (filtered.length > 0) {
    cartItems.forEach((item) => {
      if (item.id === newitem.id) {
        item.quantity += newitem.quantity;
      }
    });
  } else {
    cartItems.push(newitem);
  }
    localStorage.setItem("cartitems", JSON.stringify(cartItems))
    navigate('/customer/cart');
  };

  const handleBuy = () => {
    navigate(`/customer/checkout`);
  };

  return (
    <div className="space-y-12 p-8">
      <div className="grid grid-cols-4 gap-6 items-start">
        <div className="col-span-2">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          {/* <div className="flex items-center space-x-2">
            {product.rating}
            <span>Rating</span>
          </div> */}
          <div className="flex items-center space-x-4">
            <span className="text-green-600 font-bold">${product.disprice}</span>
            <span className="line-through text-gray-500">${product.price}</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded">{product.discount} OFF</span>
          </div>
          <div className="mt-4">
            <Quantity quantity={quantities} setQuantity={setQuantities} />
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleAddToCart}
              //   product={product}
              // qty={quantities}
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
