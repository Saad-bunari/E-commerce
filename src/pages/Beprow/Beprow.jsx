import React from 'react'
import './beprow.scss'
import { Container , Row , Col } from 'react-bootstrap';
import PricingToggle from '../../component/PricingToggle/PricingToggle';
import StickyTabs from '../../component/StickyTabs/StickyTabs';

function Beprow() {
  return (
    <>




<section className='Beprow-section'>

<Container fluid>

    <Col md="12" className='d-flex justify-content-center'>

<h6 className='fw-medium'>

Business

</h6>


</Col>



    <Col md="12" className='d-flex justify-content-center beprw-sec-mainheading'>

<h1>
Be Part of
<br />
W.PRO
</h1>


</Col>


    <Col md="12" className=' beprw-sec-mainimage'>
    <img
      src="/images/img-1.png"
      alt="Qubis"
    />




</Col>



    


<Container className='beprow-headings'>
  <Row className=''>

  <h5 className='fw-light'>Professional Planes</h5>
    
    <Col md="7"> 

    <Col md="9">
    
  <h3 >A necessary investment for your studio or your personal brand.</h3>
    
    </Col>
    
    </Col>

  <Col md="4"> 


    <strong>

Awwwards is the ideal showcase for your business or personal brand, a trusted directory where millions of users visit every year, looking for professionals to make their digital vision become a reality.

    </strong>

    <p>


      Your presence in our Directory will get you unparalleled visibility, recognition and leads for your business.



    </p>
    
    </Col>





</Row>
</Container>


<Container fluid>
  
  <Row>

<Col md={12}>

  <PricingToggle/>

  <Col md={12} className='beprowofferc-last-heading d-flex justify-content-center gap-1'>

  <span>Want more info about our plans?</span>

    <img src="/images/arrow-right.svg" alt="" /> 
  
  <a href="#">
    
    Compare Plans
   


  </a>
  
  </Col>


</Col>


  </Row>


</Container>






</Container>




</section>






      <StickyTabs/>





    </>
  )
}

export default Beprow