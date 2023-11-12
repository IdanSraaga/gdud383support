// HomeContainer.js
import React from 'react';
import HomeColumnRight from './HomeColumnRight';
import HomeColumnCenter from './HomeColumnCenter';
import HomeColumnLeft from './HomeColumnLeft';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <HomeColumnRight />
      <HomeColumnCenter />
      <HomeColumnLeft />
    </div>
  );
};

export default HomeContainer;