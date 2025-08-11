import React from "react";

import "./img.scss"

const Logo = () => {
  return (
    <img
    className="logo"
      src="/images/w.logo.png"  // public folder se direct access
      alt="Site Logo"
    
    />
  );
};

export default Logo;
