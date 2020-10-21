import React, { Component } from 'react'
import BtnTryFree from '../btn-try-free/index.jsx'
import './index.styl'

export default class HeroCarousel extends Component {
  render () {
    return (
      <div className='titles_carousel active'>
        <div className='hero_title'>
          <div className='main-title'>
            <h1>{config.translations.hero.main_title}</h1>
          </div>
          <div className='main-description'>
            <p>{config.translations.hero.description}</p>
          </div>
          <BtnTryFree label={config.translations.hero.button_label} />
          <div className='main-strip_wrap'>
            <picture>
              <source className='main-strip_img' srcSet={`${config.urls.media}${config.isRTL ? 'pic_phone_he' : 'pic_phone_en'}.webp`} type='image/webp' alt='' role='presentation' loading='lazy' />
              <img className='main-strip_img' src={`${config.urls.media}${config.isRTL ? 'pic_phone_he' : 'pic_phone_en'}.png`} alt='' role='presentation' loading='lazy' />
            </picture>
          </div>
        </div>
      </div>
    )
  }
}
