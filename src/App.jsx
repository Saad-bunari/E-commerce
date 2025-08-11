// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AppNavbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Jobsapp from "./pages/Jobs.jsx/Jobsapp";
import Market from "./pages/Market/Market";
import LoginModal from "./pages/Login/LoginModal";
import SignupForm from "./component/SignupForm/SignupForm";
import Beprow from "./pages/Beprow/Beprow";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import ProductCard from "./component/ProductCard/ProductCard";
import ProductPage from "./component/ProductPage/ProductPage";
import CartButton from "./component/CartButton/CartButton";
import CartModal from "./component/CartModal/CartModal";
import Footer from "./component/Footer/Footer";
import SearchResultOverlay from "./component/SearchResultOverlay/SearchResultOverlay";
import { Container, Row, Col } from "react-bootstrap";
import { clearSearch } from "./store/searchSlice";

function AppWrapper() {
  const location = useLocation();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const isAnyModalOpen = useSelector((state) => state.modal.isModalOpen);
  const navbarInputRef = useRef(null);
  const dropdownInputRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        const mapped = data.products.map((p) => ({
          ...p,
          image: p.thumbnail || p.images?.[0] || "",
        }));
        setProducts(mapped);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch(clearSearch());
  }, [location.pathname]);

  const handleCartClick = () => setShowCartModal(true);
  const handleCloseCartModal = () => setShowCartModal(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists
        ? prev.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const handleIncrement = (id) =>
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  const handleDecrement = (id) =>
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

  return (
    <>
      <AppNavbar
        navbarInputRef={navbarInputRef}
        dropdownInputRef={dropdownInputRef}
        dropdownOpen={false}
        setDropdownOpen={() => {}}
      />

      <SearchResultOverlay products={products} onReset={() => dispatch(clearSearch())} />

      <CartButton count={cart.length} onCartClick={handleCartClick} isVisible={!isAnyModalOpen} />
      <CartModal
        show={showCartModal}
        handleClose={handleCloseCartModal}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobsapp />} />
        <Route path="/market" element={<Market />} />
        <Route path="/login" element={<LoginModal isOpen={true} onClose={() => {}} mode="signin" />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/bepro" element={<Beprow />} />
        <Route
          path="/product/:id"
          element={<ProductPage products={products} onAddToCart={handleAddToCart} cart={cart} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ScrollToTop />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
