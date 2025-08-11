import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import BuyButton from '../BuyButton/BuyButton'; // ✅ Yeh import sabse upar hona chahiye
import './ProductPage.scss';

const ProductPage = ({ products, onAddToCart, cart = [], onAnyModalOpen }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id.toString() === id);
  const alreadyInCart = cart.some((item) => item.id === product?.id);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Product not found</h2>
      </Container>
    );
  }

  const handleAddToCart = () => {
    if (onAddToCart && !alreadyInCart) onAddToCart(product);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6} className="mb-4">
          <div className="product-image-container">
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-image"
            />
          </div>
        </Col>
        <Col md={6} className="position-relative">
          {/* Close Button */}
          <button
            className="close-product-btn"
            onClick={() => navigate('/products')}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'transparent',
              border: 'none',
              fontSize: '2rem',
              color: '#888',
              cursor: 'pointer',
              zIndex: 2
            }}
          >
            &times;
          </button>
          <Card className="border-0 h-100 d-flex flex-column justify-content-between">
            <Card.Body className="d-flex flex-column h-100">
              <h1 className="product-title mb-3">{product.title}</h1>
              <div className="product-price mb-4">
                ₨{product.price.toLocaleString('en-PK')}
              </div>
              <div className="product-description mb-4">
                <h5>Description</h5>
                <p>{product.description}</p>
              </div>
              <div className="product-category mb-4">
                <h5>Category</h5>
                <p className="text-capitalize">{product.category}</p>
              </div>
              <div className="product-rating mb-4">
                <h5>Rating</h5>
                <div className="d-flex align-items-center">
                  <span className="rating-value">
                    {typeof product.rating === 'number' ? product.rating : product.rating?.rate}
                  </span>
                  {product.rating?.count && (
                    <span className="rating-count">({product.rating.count} reviews)</span>
                  )}
                </div>
              </div>
              <div className="mt-auto">
                <Button 
                  variant="success" 
                  size="lg" 
                  className="w-100 add-to-cart-btn mb-2"
                  onClick={handleAddToCart}
                  disabled={alreadyInCart}
                >
                  {alreadyInCart ? 'Added to Cart' : 'Add to Cart'}
                </Button>

                {/* ✅ Pass modal state updater to BuyButton */}
                <BuyButton 
                  product={product} 
                  onAnyModalOpen={onAnyModalOpen} 
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
