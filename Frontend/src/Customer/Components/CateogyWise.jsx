import React from 'react';
import { Rating } from './rating';
import { useNavigate } from 'react-router-dom';


export const CateogyWise = ({ name, image, discountPrice, id, totalPrice }) => {
  const nevigate = useNavigate()
  const handleProductClick = (id) => {
    nevigate(`/customer/singleproduct/${id}`);
  };
  return (
    <div
      onClick={() => handleProductClick(id)}
      className="p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 border rounded-lg shadow-sm bg-white">
      <div className="flex justify-center items-center w-52 h-40 mb-4 overflow-hidden">
        {image}
      </div>

      <p className="text-lg font-semibold text-gray-800 mb-1 truncate">{name}</p>

      <div className="flex items-center space-x-2 mb-2">
        <p className="text-red-500 text-lg font-bold">${discountPrice}</p>
        {totalPrice && (
          <p className="line-through text-gray-500 text-sm">${totalPrice}</p>
        )}
      </div>

      <Rating rating={4} />
    </div>
  );
};
