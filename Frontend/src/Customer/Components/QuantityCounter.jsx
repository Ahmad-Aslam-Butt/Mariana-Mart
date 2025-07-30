export const QuantityCounter = ({ quantity, setQuantity }) => {
  return (
    <div className='px-16'>
      <div className="flex items-center border-2 border-yellow-400 rounded-full px-4 py-1 bg-gray-100 text-black font-semibold space-x-4">
        <button onClick={() => { if (quantity >= 1) setQuantity(quantity - 1) }}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
};
