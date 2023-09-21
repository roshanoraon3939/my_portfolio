import React from 'react'
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const data = [
  {
    id: 1,
    text: 'A Computer Geek.'
  },
  {
    id: 2,
    text: 'A Frontend Developer.'
  },
  {
    id: 3,
    text: 'An Eager Knowledge Seeker.'
  },
  {
    id: 4,
    text: 'A Problem Solver.'
  }
]

const Tags = () => {
  return (
    <div>

      <Swiper className='text-light'
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }} >
        {
          data.map(({ text }) => {
            return (
              <SwiperSlide className='tagses'>
                <h5 className='tag_text'>{text}</h5>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Tags
