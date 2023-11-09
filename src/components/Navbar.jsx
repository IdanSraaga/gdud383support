import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="header">
        <div className="left-element" >Left</div>
        <div className="center-element" id="timestamp" style="direction: rtl;"></div>
        <div className="right-element">Right</div>
    </div>
  );
};

export default Navbar;