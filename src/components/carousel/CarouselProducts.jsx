import React from 'react';
// import data
import {data} from './data';
// import Product_1 from '../../assets/images/product-1.jpg';
// import Product_2 from '../../assets/images/product-2.jpg';
// import Product_3 from '../../assets/images/product-3.jpg';
// import Product_4 from '../../assets/images/product-4.jpg';

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

const CarouselProducts = () => {
  return (
    <div className='carousel mb-5 pb-5'>
      <h1 className='carousel__heading'>
        ΕΒΔΟΜΑΔΙΑΙΕΣ <br /> ΠΡΟΤΑΣΕΙΣ
      </h1>
      <p className='carousel__subheading'>
        Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
        incididunt ut labore id
      </p>
      <Swiper
        // effect='coverflow'
        spaceBetween={0}
        // slidesPerView={1}
        breakpoints={{
          400: {
            width: 300,
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          980: {
            width: 980,
            slidesPerView: 2,
          },
          1200: {
            width: 1200,
            slidesPerView: 3,
          },
          1500: {
            width: 1500,
            slidesPerView: 4,
          },
        }}
        // navigation
        pagination={{clickable: true}}
        // scrollbar={{draggable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {data.map(user => (
          <SwiperSlide key={user.id} className='slide '>
            <div className='slide-content'>
              <div className='user-image'>
                <img className='user-photo' src={user.img} alt='' />
              </div>
              <div className='user-content'>
                <div>
                  <h5 className='user-content--name'>{user.name}</h5>
                  <p className='text-muted user-content--description text-left'>
                    {user.description}
                  </p>
                </div>

                <p className='text-muted user-price'>
                  <del className='mr-1'>
                    <i>{user.priceBefore}</i>
                  </del>
                  <i>${user.price}</i>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProducts;
