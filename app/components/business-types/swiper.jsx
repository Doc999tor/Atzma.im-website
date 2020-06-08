import React from 'react'
import Swiper from 'react-id-swiper'
import './swiper.styl'
  const params = {
    loop: true
  }
  const Default = () => (
    <Swiper {...params}>
      <div className='test'>Slide #1</div>
      <div className='test'>Slide #2</div>
      <div className='test'>Slide #3</div>
    </Swiper>
  )
  export default Default