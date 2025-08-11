import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setModalOpen } from '../../store/modalSlice';
import LoginLeft from '../../component/LoginLeftside/LoginLeft';
import Loginform from '../../component/Loginform/Loginform';
import SignupForm from '../../component/SignupForm/SignupForm';
import './login.scss';

const LoginModal = ({ isOpen, onClose, mode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModalOpen(isOpen));
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Container fluid className="modal-backdrop">
      <Row className='modal-box'>
        <Col md={6} className='ModalLogosection'>
          <LoginLeft />
        </Col>
        <Col md={6} className='Modaltextsection'>
          {mode === "signin" ? <Loginform /> : <SignupForm />}
        </Col>
      </Row>
      <button className="close-btn" onClick={onClose}>X</button>
    </Container>
  );
};

export default LoginModal;
