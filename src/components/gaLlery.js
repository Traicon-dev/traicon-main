import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = () => {
  return (
    <>
    <Swiper
  effect={'coverflow'}
  loop={true}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
  breakpoints={{
    0: {
      slidesPerView: 1, // Show 1 slide on very small screens
    },
    768: {
      slidesPerView: 1, // Default behavior for tablets and larger screens
    },
  }}
>
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src= {require("../images/g2.jpg")} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Gallery;