

import React, { useState, useEffect } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LoginModal from '../../pages/Login/LoginModal'; // ✅ Path confirm karo
import './CartModal.scss';

const CartModal = ({ show, handleClose, cart, onRemove, onIncrement, onDecrement }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyAll = () => {
    if (!isLoggedIn) {
      setShowLogin(true); // ✅ Show login modal only
    } else {
      setShowConfirm(true); // ✅ Proceed to confirmation
    }
  };

  const handleConfirm = () => {
    alert('Proceeding to checkout!');
    setShowConfirm(false);
    handleClose(); // Close Cart Modal
  };

  // ✅ Auto-hide login modal if user logs in
  useEffect(() => {
    if (isLoggedIn && showLogin) {
      setShowLogin(false);
    }
  }, [isLoggedIn]);

  return (
    <>
      {/* ✅ Only show CartModal if LoginModal is not visible */}
      {!showLogin && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Your Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cart.length === 0 ? (
              <div className="text-center text-muted">Your cart is empty.</div>
            ) : (
              <ListGroup variant="flush">
                {cart.map((item) => (
                  <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: 40, height: 40, objectFit: 'contain', marginRight: 12 }}
                      />
                      <div>
                        <strong>{item.title}</strong>
                        <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                          ₨{item.price.toLocaleString('en-PK')} x {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="cart-qty-btn"
                        onClick={() => onDecrement(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="cart-qty-value">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="cart-qty-btn"
                        onClick={() => onIncrement(item.id)}
                      >
                        +
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="cart-remove-btn ms-2"
                        onClick={() => onRemove(item.id)}
                        title="Remove from cart"
                      >
                        &times;
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div className="me-auto fw-bold">Total: ₨{total.toLocaleString('en-PK')}</div>
            <Button variant="primary" disabled={cart.length === 0} onClick={handleBuyAll}>
              Buy All
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* ✅ Login Modal */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        mode="signin"
      />

      {/* ✅ Confirm Purchase Modal */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to purchase all items in the cart?</p>
          <p className="text-muted">Total: ₨{total.toLocaleString('en-PK')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
