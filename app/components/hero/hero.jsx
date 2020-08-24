import React from 'react'
import Header from '../header/index.jsx'
import HeroCarousel from '../carousel/index.jsx'

import './hero.styl'
export default () => {
  return (
    <div id='hero'>
      <picture>
        <source className='hero_background' srcSet={`${config.urls.media}hero_background.webp`} type='image/webp' alt='' loading='lazy' role='presentation' />
        <img className='hero_background' src={`${config.urls.media}hero_background.jpg`} alt='' loading='lazy' role='presentation' />
      </picture>
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
