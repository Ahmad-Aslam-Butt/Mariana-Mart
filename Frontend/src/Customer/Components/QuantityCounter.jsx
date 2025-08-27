export const QuantityCounter = ({ item, setCartItems }) => {
  const increaseQty = () => {
    setCartItems(prevItems =>
      prevItems.map(i =>
        i._id === item._id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decreaseQty = () => {
    if (item.qty > 1) {
      setCartItems(prevItems =>
        prevItems.map(i =>
          i._id === item._id ? { ...i, qty: i.qty - 1 } : i
        )
      );
    }
  };

  return (
    <div className='px-16'>
      <div className="flex items-center border-2 border-yellow-400 rounded-full px-4 py-1 bg-gray-100 text-black font-semibold space-x-4">
        <button onClick={decreaseQty}>-</button>
        <span>{item.qty}</span>
        <button onClick={increaseQty}>+</button>
      </div>
    </div>
  );
};
