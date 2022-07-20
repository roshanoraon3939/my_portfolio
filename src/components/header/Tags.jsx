import React from 'react'
// import Swiper core and required modules
import { Pagination , Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
 
const data = [
    {
        id:1,
        text:'a computer geek.'

    },
    {
        id:2,
        text:'a  Web/Android developer. '
    },
    {
        id:3,
        text:'an eager Knowledge seeker.'
    },
    {
      id:4,
      text:'a keen Gamer.'
  }

]

const Tags = () => {
  return (
    <div>
      
      <Swiper className='text-light'
      modules={[ Pagination , Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      autoplay={{delay: 2500 }}
      pagination={{ clickable: true }} >
        {
          data.map(({text})=>{
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
