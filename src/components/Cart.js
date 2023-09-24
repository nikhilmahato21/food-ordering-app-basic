import React from "react";
import { useDispatch, useSelector } from "react-redux";

import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-items">
      <h5>cart Items - {cartItems.length}</h5>
      <button onClick={() => handleClearCart()}>clear cart</button>

      <div id="menu-section">
        {cartItems?.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
