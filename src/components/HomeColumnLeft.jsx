// HomeColumn1.js
import '../styles/HomeColumns.css'
import React from 'react';
import Box from './Box';
import '../styles/Box.css'
const HomeColumnLeft = () => {
  return (
    <div className="home-column1">
        <div className="home-left-buttons">
        <Box imageSrc="bad-review.png"  alt="תלונת לקוח"/>
        <Box imageSrc="handshake.png" alt="אמנת השירות" />
        <Box imageSrc="chat.png" alt="צור קשר" />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnLeft;