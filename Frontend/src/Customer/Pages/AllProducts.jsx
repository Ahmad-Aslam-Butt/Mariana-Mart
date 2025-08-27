import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CateogyWise } from '../Components/CateogyWise';

export const AllProducts = () => {
  const [productDetail, setproductDetail] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/allproducts")
      .then(res => {
        console.log(res.data);
        setproductDetail(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-24'>
      <h1 className='text-xl sm:text-2xl font-semibold my-4'>All Products</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productDetail.map((product) => (
          <CateogyWise
            key={product._id}
            id={product._id}
            name={product.name}
            image={<img src={product.image} alt={product.name} className='w-full h-auto object-cover' />}
            discountPrice={product.price - (product.price / 100 * product.discount)}
            totalPrice={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};
