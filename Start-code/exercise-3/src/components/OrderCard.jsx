import React from "react";

export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1); 
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1); 
  };

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{`$ ${price.toFixed(2)}`}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleDecrease}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleIncrease}>+</div>
      </div>
    </div>
  );
}