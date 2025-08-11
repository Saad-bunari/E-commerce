import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer-content">
          {/* Left Section */}
          <Col lg={8}>
            <Row className="footer-links">
              <Col xs={6} sm={3}>
                <div className="footer-column">
                  <Link to="/websites">Websites</Link>
                  <Link to="/collections">Collections</Link>
                  <Link to="/elements">Elements</Link>
                </div>
              </Col>
              <Col xs={6} sm={3}>
                <div className="footer-column">
                  <Link to="/academy">Academy</Link>
                  <Link to="/jobs">Jobs</Link>
                  <Link to="/market">Market</Link>
                </div>
              </Col>
              <Col xs={6} sm={3}>
                <div className="footer-column">
                  <Link to="/directory">Directory</Link>
                  <Link to="/conferences">Conferences</Link>
                </div>
              </Col>
              <Col xs={6} sm={3}>
                <div className="footer-column">
                  <Link to="/faqs">FAQs</Link>
                  <Link to="/about-us">About Us</Link>
                  <Link to="/contact-us">Contact Us</Link>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Right Section */}
          <Col lg={4} className="footer-right">
            <div className="conferences-info">
              <span>Next Conferences</span>
              <span className="conference-locations">Berlin, Mumbai & Tokyo</span>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="footer-bottom">
          <Col md={6}>
            <div className="legal-links">
              <Link to="/cookies-policy">Cookies Policy</Link>
              <Link to="/legal-terms">Legal Terms</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="social-links">
              <span>Connect:</span>
              <Link to="https://instagram.com">Instagram</Link>
              <Link to="https://linkedin.com">LinkedIn</Link>
              <Link to="https://twitter.com">Twitter</Link>
              <Link to="https://facebook.com">Facebook</Link>
              <Link to="https://youtube.com">YouTube</Link>
              <Link to="https://tiktok.com">TikTok</Link>
              <Link to="https://pinterest.com">Pinterest</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
 