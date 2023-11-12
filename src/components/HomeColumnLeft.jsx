// HomeColumn1.js
import React from 'react';

const HomeColumnLeft = () => {
  return (
    <div className="home-column1">
        <div className="home-right-buttons">
        <Box imageSrc="bad-review.png"  alt="תלונת לקוח"/>
        <Box imageSrc="handshake.png" alt="אמנת השירות" />
        <Box imageSrc="chat.png" alt="צור קשר" />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnLeft;