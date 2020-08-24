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
          <div className='main-strip_wrap'>
            <img src={config.urls.media + 'main-strip.png'} alt='' role='presentation' />
          </div>
          <BtnTryFree label={config.translations.hero.button_label} />
        </div>
      </div>
    )
  }
}
