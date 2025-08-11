import React from 'react';
import './CartButton.scss';

const CartButton = ({ count, onCartClick, isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className="cart-btn-fixed">
      <button className="cart-btn" onClick={onCartClick}>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{count}</span>
      </button>
    </div>
  );
};

export default CartButton;
