import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../../features/cart/cartSlice";
import "./CartPage.css";
import { toast } from "react-toastify";


const CartPage = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [showCheckout, setShowCheckout] = useState(false);
  const [showBill, setShowBill] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("phone");

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
              <h3>{item.name}</h3>
              <p>{item.design}</p>
              <p>Price: ${item.price}</p>
              <p className="cart-total">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
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
          <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>

          <button
            className="checkout-btn"
            onClick={() => setShowCheckout(true)}
          >
            Checkout
          </button>
        </div>
      )}


      {showCheckout && (
        <div className="modal-overlay">
          <div className="checkout-modal">
            <h2>Checkout</h2>

            <div className="checkout-items">
              {items.map((item) => (
                <div key={item.id} className="checkout-row">
                  <span>{item.name} × {item.quantity}</span>
                  <span>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="checkout-total">
              <strong>Grand Total:</strong>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <div className="payment-method">
              <h3>Payment Method</h3>

              <label>
                <input
                  type="radio"
                  value="phone"
                  checked={paymentMethod === "phone"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Phone / UPI
              </label>

              <label>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit / Debit Card
              </label>

              <label>
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery
              </label>
            </div>

            <div className="modal-actions">
              <button onClick={() => setShowCheckout(false)}>
                Cancel
              </button>
              <button
                className="confirm-btn"
                onClick={() => {
                  setShowCheckout(false);
                  setShowBill(true);
                }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}

     
      {showBill && (
        <div className="modal-overlay">
          <div className="bill-modal">
            <h2>Order Successful ✅</h2>
            <p>Payment Method: {paymentMethod}</p>

            <div className="bill-items">
              {items.map((item) => (
                <div key={item.id} className="checkout-row">
                  <span>{item.name} × {item.quantity}</span>
                  <span>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <h3>Total Paid: ${totalPrice.toFixed(2)}</h3>

            <button
              className="confirm-btn"
              onClick={() => {
                setShowCheckout(false);
                setShowBill(false);
                dispatch(clearCart()); 
                toast.success("✅ Order placed successfully!");
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
