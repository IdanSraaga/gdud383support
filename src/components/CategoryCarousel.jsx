import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";



const CategoryCarousel = () =>{

    
    return(
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="carousel-box">
            <p>Box 1 Content</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-box">
            <p>Box 2 Content</p>
            <button onClick={() => console.log('Button 2 clicked')}>Button 2</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-box">
            <p>Box 3 Content</p>
            <button onClick={() => console.log('Button 3 clicked')}>Button 3</button>
          </div>
        </SwiperSlide>
      </Swiper>
    );
}
export default CategoryCarousel