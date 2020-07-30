import React from 'react'
// import Swiper from 'react-id-swiper'
import { Swiper, Navigation } from 'swiper/js/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import './swiper.styl'
import 'swiper/css/swiper.css';
  // const params = {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   slidesPerGroup: 3,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  // }
  const params = {
    // Provide Swiper class as props
    Swiper,
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    // Add modules you need
    modules: [Navigation],
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
  const Default = () => (
    <ReactIdSwiperCustom {...params}>
      <div className='test'>Slide #1</div>
      <div className='test1'>Slide #2</div>
      <div className='test2'>Slide #3</div>
      <div className='test3'>Slide #4</div>
      <div className='test4'>Slide #5</div>
    </ReactIdSwiperCustom>
  )
  export default Default
