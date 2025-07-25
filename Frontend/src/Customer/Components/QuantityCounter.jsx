import React, { useState } from 'react';

const QuantityCounter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className='px-16'>
    <div className="flex items-center border-2 border-yellow-400 rounded-full px-4 py-1 bg-gray-100 text-black font-semibold space-x-4">
      <button onClick={decrement} className="text-xl">-</button>
      <span>{count}</span>
      <button onClick={increment} className="text-xl">+</button>
    </div>  
    </div>
  );
};

export default QuantityCounter;
