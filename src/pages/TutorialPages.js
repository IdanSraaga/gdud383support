// src/TutorialsPage.js
import React from 'react';
import CategoryCarousel from '../components/CategoryCarousel';
import '../styles/TutorialsPage.css';
const BoxCard = () => {
  // Your BoxCard component logic goes here
  return <div className="box-card">Box Card</div>;
};

const TutorialsPage = () => {
  return (
    /*<div className='cards'>
        <div className="card-container">
            {[...Array(12)].map((_, index) => (
                <BoxCard key={index} />
            ))}
        </div>   
    </div>*/
      <CategoryCarousel/>
  );
};

export default TutorialsPage;