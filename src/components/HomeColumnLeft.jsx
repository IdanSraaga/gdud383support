// HomeColumn1.js
import '../styles/HomeColumns.css'
import React from 'react';
import Box from './Box';
import Survey from '../imgs/survey.png'
import Tutorials from '../imgs/tutorials.png'
// import X from '../imgs/X.png'
import '../styles/Box.css'
const HomeColumnLeft = () => {
  return (
    <div className="home-column3">
        <div className="home-left-buttons">
        <Box imageSrc={Tutorials} title="מדריכים ונהלים" />
        <Box imageSrc={Survey} title="סקר לקוח" />
        <Box imageSrc="chat.png"  />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnLeft;