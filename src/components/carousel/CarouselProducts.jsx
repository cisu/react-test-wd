import React from 'react';
import Product_1 from '../../assets/images/product-1.jpg';
import Product_2 from '../../assets/images/product-2.jpg';
import Product_3 from '../../assets/images/product-3.jpg';
import Product_4 from '../../assets/images/product-4.jpg';

import './CarouselProducts.scss';

// Import Swiper React components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

const data = [
  {
    id: 1,
    username: 'user-1',
    testimonial: 'testimonial-1',
  },
  {
    id: 2,
    username: 'user-2',
    testimonial: 'testimonial-2',
  },
  {
    id: 3,
    username: 'user-3',
    testimonial: 'testimonial-3',
  },
  {
    id: 4,
    username: 'user-4',
    testimonial: 'testimonial-4',
  },
  {
    id: 5,
    username: 'user-5',
    testimonial: 'testimonial-5',
  },
  {
    id: 6,
    username: 'user-6',
    testimonial: 'testimonial-6',
  },
];

const CarouselProducts = () => {
  return (
    <div className='App mb-5 pb-5'>
      <h1>Swiper Js</h1>
      <Swiper
        // effect='coverflow'
        spaceBetween={50}
        slidesPerView={4}
        // breakpoints={{
        //   // when window width is >= 640px
        //   640: {
        //     width: 640,
        //     slidesPerView: 1,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     width: 768,
        //     slidesPerView: 4,
        //   },
        // }}
        // navigation
        pagination={{clickable: true}}
        // scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {data.map(user => (
          <SwiperSlide key={user.id} className='slide'>
            <div className='slide-content'>
              <div className='user-image'>
                <img className='user-photo' src={Product_1} alt='' />
              </div>
              <h5>{user.username}</h5>
              <p className='user-testimonial'>
                <i>{user.testimonial}</i>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProducts;
