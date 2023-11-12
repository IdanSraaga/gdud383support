// HomeColumnRight.js
import React from 'react';
import ScrollingText from './ScrollingText';
const HomeColumnCenter = () => {
  return (
    <div className="home-column2">
      <div className="home-scrolling-text" id="scroll-container">
        <ScrollingText />
      </div>
    </div>
  );
};

export default HomeColumnCenter;
