import React from 'react'
import Header from '../header/index.jsx'
import HeroCarousel from '../carousel/index.jsx'

import './hero.styl'
export default () => {
  return (
    <div id='hero'>
      <div className='sup-block'>
        <Header />
        <div className='header-content-wrap'>
          <div className='header-content-wrap-text'>
            <HeroCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}
