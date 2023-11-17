// HomeColumn1.js
import '../styles/HomeColumns.css'
import React from 'react';
import Box from './Box';
import '../styles/Box.css'
const HomeColumnLeft = () => {
  return (
    <div className="home-column3">
        <div className="home-left-buttons">
        <Box imageSrc="bad-review.png"  />
        <Box imageSrc="handshake.png"  />
        <Box imageSrc="chat.png"  />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnLeft;