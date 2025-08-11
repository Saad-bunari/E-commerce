import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './signupform.scss'


const SignupForm = ({ isOpen, onClose }) => {
  

  return (
   <Container className="login-container-2">
       <Row className="Logi">
         <Col md={12}>
           <h3 className="mb-1">Register with your e-mail</h3>
 
           {/* Plain HTML Form */}
           <form className="Loginright">

                        
               <label htmlFor="email">USERNAME (*)</label>
               <input
                 type="text"
                 placeholder="Username"
                 className="custom-input"
               />
            
               <label htmlFor="email">EMAIL</label>
               <input
                 type="text"
                 placeholder="Email"
                 className="custom-input"
               />
           
 
          
               <label htmlFor="password">PASSWORD</label>
               <input
                 type="password"
                 placeholder="Password"
                 className="custom-input"
               />


               <p className='sigin-paragrap-1'>Awwwards may keep me informed with personalozed emails about products and services. See our <span>Privicy Policy</span> for more details.</p>
         
         <div className='checkboxmian-sign'>
                <div>
               <input type="checkbox" id="remember" />
               <label htmlFor="remember" className="ms-2">Please contact me via e-mail</label>
                </div>

                <div>
               <input type="checkbox" id="remember" />
               <label htmlFor="remember" className="ms-2">I have read and accept the Terms and Conditions</label>
                  </div>
         </div>

         <p className='sigin-paragrap-2'>

This site is procted by reCAPTCHA and the Google Privacy Policy and Terms of Service apply


         </p>
         
              
 
             <Button variant="dark" className="w-100 mb-1 signputformButton" type="submit">
               Create Account
             </Button>
 
             <div className="text-ends ">
               <p >Or sign in with</p>
             </div>
 
             
     <div className="row g-2">
   <div className="col-12 col-md-4">
     <Button className="w-100 d-flex gap-2 align-items-center justify-content-center SignupFormbuttons">
       <img className='svg-logs' src="/images/google-brands.svg" alt="Google" /> Google
     </Button>
   </div>
   <div className="col-12 col-md-4">
     <Button className="w-100 d-flex gap-2 align-items-center justify-content-center SignupFormbuttons">
       <img className='svg-logs' src="/images/facebook-f-brands.svg" alt="Facebook" /> Facebook
     </Button>
   </div>
   <div className="col-12 col-md-4">
     <Button className="w-100 d-flex gap-2 align-items-center justify-content-center SignupFormbuttons">
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

export default SignupForm;
