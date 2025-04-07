'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import MoviesCard from '../Movies_card/MoviesCard';
import { api } from '@/api/api';

export default function MoviesSwiper({ movies }) {
  const [newMovies, setNewMovies] = useState(movies);
  const [page, setPage] = useState(2);
  
  const loadMoreMovies = async () => {
    setPage((prevPage) => prevPage + 1);
    const newMovies = await api.getAllMovies('now_playing', page);
    setNewMovies((prevMovies) => [...prevMovies, ...newMovies]);
  }
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        onReachEnd={loadMoreMovies}
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
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {newMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MoviesCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
