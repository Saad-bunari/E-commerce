import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Loginform.scss';

const Loginform = () => {
  return (
    <Container className="login-container">
      <Row className="Logi">
        <Col md={12}>
          <h3 className="mb-4 login-logo">Log in</h3>

          {/* Plain HTML Form */}
          <form className="Loginright">
           
              <label htmlFor="email">EMAIL OR USERNAME</label>
              <input
                type="text"
                placeholder="Email or Username"
                className="custom-input"
              />
          

         
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                placeholder="Password"
                className="custom-input"
              />
        
        <div className='checkboxmian'>

 <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ms-2">Keep me logged in</label>
          

        </div>
        
             

            <Button variant="dark" className="w-100 mb-3  inputformButton logo-button" type="submit">
              Log in now
            </Button>

            <div className="text-end forgot mb-4">
              <a href="#" className="text-muted small">Forgot your password?</a>
            </div>

            <p>Or sign in with</p>
    <div className="row g-2">
  <div className="col-12 col-md-4">
    <Button className="w-100 d-flex gap-2 align-items-center justify-content-center Formbuttons">
      <img className='svg-logs' src="/images/google-brands.svg" alt="Google" /> Google
    </Button>
  </div>
  <div className="col-12 col-md-4">
    <Button className="w-100 d-flex gap-2 align-items-center justify-content-center Formbuttons">
      <img className='svg-logs' src="/images/facebook-f-brands.svg" alt="Facebook" /> Facebook
    </Button>
  </div>
  <div className="col-12 col-md-4">
    <Button className="w-100 d-flex gap-2 align-items-center justify-content-center Formbuttons">
      <img className='svg-logs' src="/images/x-twitter-brands.svg" alt="x-twitter" /> Twitter
    </Button>
  </div>
</div>

          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Loginform;
