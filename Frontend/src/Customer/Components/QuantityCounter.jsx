import axios from "axios";
import React, { useState} from "react";

export const QuantityCounter = ({ item, setCartItems }) => {
  const [newqty, setNewqty] = useState(item.qty);

  const apiCall = (qty) => {
    const localStorageItem = localStorage.getItem("user")
    const user = JSON.parse(localStorageItem)
    const data = { "id": user.id, 'prodId': item._id, "qty": qty }

    axios.post(`http://localhost:3001/cart`, data)
      .then((res) => {
        console.log("Quantity updated")
      })
      .catch((err) => console.log(err));
  }

  const increaseQty = () => {
    let updatedQty = newqty + 1;
    setNewqty(updatedQty);

    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i._id === item._id ? { ...i, qty: updatedQty } : i
      )
    );

    apiCall(updatedQty)
  };

const decreaseQty = () => {
  if (newqty > 1) {
    const updatedQty = newqty - 1;
    setNewqty(updatedQty);

    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i._id === item._id ? { ...i, qty: updatedQty } : i
      )
    );

    apiCall(updatedQty);
  }
};

  return (
    <div className="px-16">
      <div className="flex items-center border-2 border-yellow-400 rounded-full px-4 py-1 bg-gray-100 text-black font-semibold space-x-4">
        <button onClick={decreaseQty}>-</button>
        <span>{newqty}</span>
        <button onClick={increaseQty}>+</button>
      </div>
    </div>
  );
};
