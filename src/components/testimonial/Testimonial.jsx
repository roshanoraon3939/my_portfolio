import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assests/profile.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id:1,
    avatar:{AVTR1},
    client: 'Raju Rastogi' ,
    client_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore adipisci incidunt'
  },
  {
    id:2,
    avatar:{AVTR1},
    client: 'Raju Rastogi' ,
    client_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore adipisci incidunt'
  },
  {
    id:3,
    avatar:{AVTR1},
    client: 'Raju Rastogi' ,
    client_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore adipisci incidunt'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} >
        {
          data.map(({avatar,client,client_review})=>{
            return (
              <SwiperSlide className='testimonial'>
                <div className='client_avatar'>
                  <img src ={avatar} alt='Avatar' />
                </div>
                <h5 className='client_name'>{client}</h5>
                <small className='client_review'>{client_review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
