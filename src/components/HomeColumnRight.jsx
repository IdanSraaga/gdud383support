// HomeColumn3.js
import React from 'react';
import Box from './Box';
import BadReview from "../imgs/bad-review.png"
import Handshake from "../imgs/handshake.png"
import Chat from "../imgs/chat.png"
const HomeColumnRight = () => {
  return (
    <div className="home-column1">
        <div className="home-right-buttons">
        <Box imageSrc={BadReview}  alt="תלונת לקוח" title="תלונת לקוח"/>
        <Box imageSrc={Handshake} alt="אמנת השירות" title="אמנת השירות" />
        <Box imageSrc={Chat} alt="צור קשר" title="צור קשר" />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnRight;