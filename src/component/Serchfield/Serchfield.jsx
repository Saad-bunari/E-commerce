
// src/component/Serchfield/Serchfield.jsx
import React, { forwardRef } from 'react';
import './serch.scss';

const Serchfield = forwardRef(({ onClick, onChange, onKeyDown, value }, ref) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        name="query"
        ref={ref}
        value={value}
        onClick={onClick}
        onChange={onChange}
        onKeyDown={onKeyDown}  // 👈 required for Enter key search
      />
    </form>
  );
});

export default Serchfield;
