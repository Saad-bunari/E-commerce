import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import LoginModal from "../../pages/Login/LoginModal";
import { setModalOpen } from '../../store/modalSlice';
import './BuyButton.scss';

const BuyButton = ({ product }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleBuy = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      setShowConfirm(true);
    }
  };

  const handleConfirm = () => {
    alert('Proceeding to checkout...');
    setShowConfirm(false);
  };

  useEffect(() => {
    dispatch(setModalOpen(showLogin || showConfirm));
  }, [showLogin, showConfirm]);

  return (
    <>
      <Button 
        variant="primary" 
        size="lg" 
        className="buy-button w-100"
        onClick={handleBuy}
      >
        Buy Now - ₨{product?.price.toLocaleString('en-PK')}
      </Button>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        mode="signin"
      />

      <Modal 
        show={showConfirm} 
        onHide={() => setShowConfirm(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to purchase {product?.title}?</p>
          <p className="text-muted">Price: ₨{product?.price.toLocaleString('en-PK')}</p>
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

export default BuyButton;
