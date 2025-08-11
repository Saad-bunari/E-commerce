import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import './CartNotification.scss';

const CartNotification = ({ show, product }) => {
  if (!show || !product) return null;

  const handleBuy = () => {
    // Yahan aap buy ka logic laga sakte hain (jaise checkout page par le jana)
    alert('Proceeding to buy!');
  };

  return (
    <div className="cart-notification-bar">
      <Alert variant="success" className="d-flex align-items-center justify-content-between mb-0">
        <div>
          <strong>{product.title}</strong> added to cart!
        </div>
        <Button variant="primary" size="sm" onClick={handleBuy}>
          Buy
        </Button>
      </Alert>
    </div>
  );
};

export default CartNotification; 