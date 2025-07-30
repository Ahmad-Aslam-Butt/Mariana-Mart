import React from 'react';

export const Quantity = ({ quantity, setQuantity }) => {

  return (
    <div>
      <div className="border border-gray-600 hover:border-blue-700 rounded-md px-3 py-1 inline-block bg-gray-100">
        <label className="text-sm font-medium mr-2">Quantity:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-transparent outline-none text-sm"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};


