import React, { useEffect, useState } from "react";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <span className="arrow-up"></span>
    </button>
  ) : null;
};

export default ScrollToTop;
