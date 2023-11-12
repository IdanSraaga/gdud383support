// HomeColumn3.js
import React from 'react';
import Box from './Box';

const HomeColumnRight = () => {
  return (
    <div className="home-column3">
        <div className="home-right-buttons">
        <Box imageSrc="bad-review.png"  alt="תלונת לקוח"/>
        <Box imageSrc="handshake.png" alt="אמנת השירות" />
        <Box imageSrc="chat.png" alt="צור קשר" />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnRight;