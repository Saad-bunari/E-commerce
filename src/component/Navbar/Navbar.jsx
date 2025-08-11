import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, fetchSearchResults } from "../../store/searchSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../Img/Logo";
import Serchfield from "../Serchfield/Serchfield";
import LoginModal from "../../pages/Login/LoginModal";
import ExploreModal from "../Exploremodal/Exploremodal";
import ProductCard from "../ProductCard/ProductCard";
import { clearSearch } from "../../store/searchSlice";
import "./navbar.scss";

const AppNavbar = ({ dropdownInputRef, navbarInputRef }) => {
  const [sliderItems, setSliderItems] = useState([{ title: "Loading updates...", emoji: "⌛" }]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showExploreModal, setShowExploreModal] = useState(false);
  const [loginMode, setLoginMode] = useState("signin");
  const [paused, setPaused] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        const items = data.posts.map((post, i) => ({
          title: post.title,
          emoji: i % 2 === 0 ? "🗞" : "📢",
        }));
        setSliderItems(items.length ? items : [{ title: "No updates available.", emoji: "❌" }]);
      } catch (error) {
        setSliderItems([{ title: "Failed to load updates.", emoji: "⚠️" }]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(clearSearch());
  }, [location.pathname]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setLoginMode("signin");
    setShowLoginModal(true);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setLoginMode("signup");
    setShowLoginModal(true);
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    setShowExploreModal(true);
    setTimeout(() => {
      if (dropdownInputRef?.current) dropdownInputRef.current.focus();
    }, 100);
  };

  return (
    <>
      <div className={showLoginModal || showExploreModal ? "blurred" : ""}>
        {/* 🔄 Top Slider Bar */}
        <section className="slider-main">
          <div
            className="slider-container"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <p className={`slider-text ${paused ? "paused" : ""}`}>
              {sliderItems.map((item, index) => (
                <span className="slider-item" key={index}>
                  <span className="emoji">{item.emoji}</span> {item.title}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* 🧭 Main Navbar */}
        <section className="navbar">
          <div className="nave-chld">
            <Navbar expand="lg" className="navbar-start">
              <Container fluid>
                <Navbar.Brand>
                  <Logo className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll ">
                  <Nav className="my-2 my-lg-0 align-items-center " navbarScroll>
                    <Nav.Link href="#" onClick={handleExploreClick}>Explore</Nav.Link>
                    <Nav.Link as={Link} to="/">Directory</Nav.Link>
                    <Nav.Link as={Link} to="/about">Acadmia <span className="acadmia"><p>New</p></span></Nav.Link>
                    <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                    <Nav.Link as={Link} to="/market">Market</Nav.Link>

                    <div className="search-wrapper">
                      <Serchfield
                        ref={navbarInputRef}
                        value={query}
                        onChange={(e) => {
                          const value = e.target.value;
                          dispatch(setQuery(value));
                          if (value.trim()) {
                            dispatch(fetchSearchResults(value));
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            dispatch(fetchSearchResults(query));
                          }
                        }}
                      />
                    </div>

                    <Nav.Link href="#" onClick={handleLoginClick} className="fw-bold">Login</Nav.Link>
                    <Nav.Link href="#" onClick={handleSignupClick} className="fw-bold">Sign Up</Nav.Link>

                    <div className="navbuttons">
                      <Nav.Link as={Link} to="/bepro">
                        <Button className="buttonsonnavbar-1">Be Pro</Button>
                      </Nav.Link>
                      <Nav.Link as={Link} to="/submit">
                        <Button className="buttonsonnavbar-2">Submit Website</Button>
                      </Nav.Link>
                    </div>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </section>

        <div className="only-margin"></div>

        {/* Login + Explore Modals */}
        <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} mode={loginMode} />
        <ExploreModal show={showExploreModal} onHide={() => setShowExploreModal(false)} dropdownInputRef={dropdownInputRef} />
      </div>

      {/* 🧠 Live Inline Search Results (not modal) */}
      {query && (
        <Container className="live-results-box">
          {results.length > 0 ? (
            <>
              <h4 className="text-center mb-3">Results for: <span className="text-primary">"{query}"</span></h4>
              <Row>
                {results.map((product) => (
                  <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-decoration-none text-dark"
                      onClick={() => dispatch(setQuery(""))}
                    >
                      <ProductCard product={product} />
                    </Link>
                  </Col>
                ))}
              </Row>
              <div className="text-center mt-4">
                <Button variant="secondary" onClick={() => dispatch(setQuery(""))}>
                  Start Shopping Again
                </Button>
              </div>
            </>
          ) : (
            <>
              <h4 className="text-center text-danger">Product not found for: "{query}"</h4>
              <div className="text-center mt-3">
                <Button variant="primary" onClick={() => dispatch(setQuery(""))}>
                  Start Shopping Again
                </Button>
              </div>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default AppNavbar;
