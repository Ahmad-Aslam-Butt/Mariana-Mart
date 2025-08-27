// src/pages/Category.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Product } from '../Components/Product';



export const Category = () => {
  const navigate = useNavigate();

  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(categoryName)
    axios.get(`http://localhost:3001/category/${categoryName}`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
        console.log(res.data)
      })
      .catch(err => {
        console.error("Error fetching category products:", err);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

 const handleProductClick = (product) => {
    navigate(`/customer/singleproduct/${product._id || product.id}`);
  };
  return (
    <div className="px-6 md:px-24 my-10">
      <h1 className="text-3xl font-bold mb-6">Category: {categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[60vw]">
        
        {products.length > 0 ? (
          products.map(product => (
            <Product 
            key={product._id} 
            product={product}
            onClick={() => handleProductClick(product)} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div> 
  );
};
