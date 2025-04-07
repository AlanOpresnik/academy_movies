'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import ActorCard from '../ActorCard/ActorCard';

export default function ActorSwiper({actors}) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        breakpoints={
            {
                512: {
                    slidesPerView: 1.7
                },
                643: {
                    slidesPerView: 2
                },
                700: {
                    slidesPerView: 2.5
                },
                818: {
                    slidesPerView: 2.8
                },
                858: {
                    slidesPerView: 2.8
                },
                890: {
                    slidesPerView: 3.2
                },
                990: {
                    slidesPerView: 3.6
                },
                1200: {
                    slidesPerView: 5.2  
                },
                1400: {
                    slidesPerView: 7.1
                }
            }
        }
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {actors.map((actor) => (
          <SwiperSlide key={actor.id}>
            <ActorCard actor={actor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
