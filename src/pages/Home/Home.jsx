// ✅ File: src/pages/Home/Home.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "../../component/ProductCard/ProductCard";
import "./home.scss";

const Home = ({ products = [] }) => {
  const query = useSelector((state) => state.search.query);

  // 🔕 Jab search query ho, Home content mat dikhao (SearchResultOverlay handle karega)
  if (query) return null;

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Featured Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
