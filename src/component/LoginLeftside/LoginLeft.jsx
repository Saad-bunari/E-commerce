import React from 'react'
import './loginleft.scss'
import { Row , Col } from 'react-bootstrap'

const LoginLeft = () => {
  return (
    <Row className='loginleftsec'>

        <Col md={12} className='loginLeftsecchild' >



                    <h4>Wlcome! </h4>

      <img
        src="/images/login-img.png"   
      />


      <p><span>Not a mamber yet?</span> <a href="#">Register now</a></p>
        


        </Col>
 


    </Row>
  )
}

export default LoginLeft