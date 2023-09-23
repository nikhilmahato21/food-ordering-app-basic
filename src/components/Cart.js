import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>cart Items - {cartItems.length}</h1>
    </div>
  );
};

export default Cart;
