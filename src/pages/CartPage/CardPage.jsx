import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../features/cart/cartSlice";

import "./CartPage.css";

const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>
      {items.length === 0 && <h2>Your cart is empty</h2>}

      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>

            <img src={item.images.front} alt={item.name} />

            <div className="cart-details">
              <h3 className="cart-name">{item.name}</h3>
              <p className="cart-design">{item.design}</p>
              <p className="cart-price">${item.price}</p>
            </div>

            <div className="cart-quantity">
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>

            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Items: {items.length}</p>
          <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>

          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
