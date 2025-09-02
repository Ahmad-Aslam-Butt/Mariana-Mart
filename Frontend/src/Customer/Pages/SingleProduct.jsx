import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Quantity } from '../Components/Quantity';

export const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantities, setQuantities] = useState(1);
  useEffect(() => {
    axios.get(`http://localhost:3001/singleproduct/${id}`)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  const getUser = () =>{
    const item = localStorage.getItem('user')
    const userObj = JSON.parse(item)
    return userObj
  }

const handleAddToCart = (e) => {
  e.preventDefault();
  const user = getUser();

  if (!user) {  
    navigate('/login');
    return;
  }

  const data = { "id": user.id, 'prodId': id, "qty": quantities };

  axios.post("http://localhost:3001/cart", data)
    .then((result) => {
      console.log("Success:", result.data);
      navigate('/customer/cart');
    })
    .catch((err) => {
      console.error("Error:", err);
    });
};


  const handleBuy = () => {
    navigate(`/customer/checkout`);
  };

  return (
    <div className="space-y-12 p-8">
      <div className="grid grid-cols-4 gap-6 items-start">
        <div className="col-span-2 flex justify-center">
          <img src={product.image} alt={product.name} className="w-auto h-[55vh] aspect-square" />
        </div>
        <div className="col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <div className="flex items-center space-x-4">
            <span className="line-through text-gray-500 text-base">${product.price}</span>
            {product.discount && (
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            )}
          </div>
          <div>
            <span
              className="text-green-600 font-bold text-lg"
            >${product.price - (product.price / 100 * product.discount)}</span>
          </div>
          <div className="mt-4">
            <Quantity quantity={quantities} setQuantity={setQuantities} />
          </div>
          <div className="flex space-x-4 mt-4">
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
