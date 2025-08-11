// src/component/SearchResultOverlay/SearchResultOverlay.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SearchResultOverlay.scss';
import { clearSearch } from '../../store/searchSlice';

const SearchResultOverlay = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);
  const entered = useSelector((state) => state.search.entered);

  const handleReset = () => {
    dispatch(clearSearch());
  };

  if (!query) return null;

  const exactMatches = results.filter(
    (product) => product.title.toLowerCase() === query.toLowerCase()
  );

  const isExact = entered;
  const noResults = isExact && exactMatches.length === 0;

  return (
    <div className="search-result-overlay">
      <Container className="py-5">
        {noResults ? (
          <div className="text-center">
            <h2>
              Product not found for: <span className="text-danger">"{query}"</span>
            </h2>
            <Button className="mt-4" onClick={handleReset}>
              Start Shopping Again
            </Button>
          </div>
        ) : (
          <>
            {isExact && (
              <h3 className="text-center mb-4">
                Showing results for: <span className="text-primary">"{query}"</span>
              </h3>
            )}
            <Row>
              {(isExact ? exactMatches : results).map((product) => (
                <Col
                  key={product.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4"
                >
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
              <Button onClick={handleReset}>Start Shopping Again</Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default SearchResultOverlay;
