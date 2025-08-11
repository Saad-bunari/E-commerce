import React, { useState } from 'react';
import './PricingToggle.scss';
import { Container, Form, Card, Button } from 'react-bootstrap';

function PricingToggle() {
  const [isYearly, setIsYearly] = useState(true);
  const handleToggle = () => setIsYearly(!isYearly);

  const plans = [
    {
      title: 'BASIC',
      monthly: 10,
      yearly: 80,
      save: 96,
      discount: '58%',
      perMonth: (80 / 12).toFixed(1),
      description: 'Ideal for freelancers, independent professionals and entrepreneurs.',
      buttonText: 'Select Basic',
      theme: 'dark'
    },
    {
      title: 'PROFESSIONAL',
      monthly: 25,
      yearly: 160,
      save: 144,
      discount: '58%',
      perMonth: (160 / 12).toFixed(1),
      description: 'The gold standard investment for all agencies and studios.',
      buttonText: 'Select Professional',
      recommended: true,
      theme: 'dark'
    },
    {
      title: 'INTERNATIONAL',
      monthly: 400,
      yearly: 1200,
      save: 2772,
      discount: '58%',
      perMonth: (1200 / 12).toFixed(0),
      description: 'The crème de la crème – high impact visibility for bold industry leaders.',
      buttonText: 'Select International',
      theme: 'light'
    }
  ];

  return (
    <Container className="pricing-section text-center my-5">
      <div className="toggle-wrapper d-flex align-items-center justify-content-center gap-2 mb-5">
        <span className={!isYearly ? 'active' : ''}>Billed monthly</span>
        <Form>
          <Form.Check
            type="switch"
            id="price-toggle"
            checked={isYearly}
            onChange={handleToggle}
          />
        </Form>
        <span className={isYearly ? 'active' : ''}>Billed annually</span>
      </div>

      <div className="card-row">
        {plans.map((plan, idx) => (
      <Card
  key={idx}
  className={`plan-card ${plan.theme} ${plan.recommended ? 'recommended-card' : ''} ${plan.title === 'INTERNATIONAL' ? '-aligned' : ''}`}
>

            <Card.Body>
              {plan.recommended && <div className="recommended">RECOMMENDED</div>}
              <div className="top-row">

     <div className="price-block text-end">
                  <span className="price">
                    {isYearly ? `${plan.perMonth}$` : `${plan.monthly}$`}
                    <span className="duration">/month</span>
                  </span>
                  {isYearly && (
                    <>
                      <div className="billed-note">Billed annually</div>
                      <div className="badges ">
                        <span className="badge-save">save ${plan.save}</span>
                        <span className="badge-discount">-{plan.discount}</span>
                      </div>
                    </>
                  )}
                </div>

                <div className='Plane'>
                  <h5 className="plan-title">{plan.title} Plan</h5>
                  <p className="description">{plan.description}</p>
                </div>
           
              </div>
              <Button variant="outline-dark" className="select-btn">
                {plan.buttonText}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default PricingToggle;

