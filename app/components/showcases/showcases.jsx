import React from 'react'

import BtnTryFree from '../btn-try-free/index.jsx'
import './showcases.styl'

const Showcases0 = () => {
  const showcase = config.modules.showcases.data[0]
  const texts = config.translations.showcases.data[0]
  console.log({Showcases0: showcase})
  return (
    <div id='showcases'>
      <div className='main-box' key={0}>
        <header className='sub-box'>
          <h2>{texts?.title}</h2>
          <p>{texts?.text}</p>
        </header>
        <div className='img-container'>
          <picture>
            <source srcSet={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.webp`} className='showcases_img' alt={texts?.alt} type='image/webp' loading='lazy' />
            <img className='showcases_img' src={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.jpg`} alt={texts?.alt} loading='lazy' />
          </picture>
        </div>
      </div>
    </div>
  )
}

const Showcases1 = () => {
  const showcase = config.modules.showcases.data[1]
  const texts = config.translations.showcases.data[1]
  console.log({Showcases1: showcase})
  return (
    <div id='showcases'>
      <div className='main-box' key={1}>
        <header className='sub-box'>
          <h2>{texts?.title}</h2>
          <p>{texts?.text}</p>
          <BtnTryFree label={config.translations.hero.button_label} />
        </header>
        <div className='img-container'>
          <picture>
            <source srcSet={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.webp`} className='showcases_img' alt={texts?.alt} type='image/webp' loading='lazy' />
            <img className='showcases_img' src={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.jpg`} alt={texts?.alt} loading='lazy' />
          </picture>
        </div>
      </div>
    </div>
  )
}

const Showcases2 = () => {
  const showcase = config.modules.showcases.data[2]
  const texts = config.translations.showcases.data[2]
  console.log({Showcases2: showcase})
  return (
    <div id='showcases'>
      <div className='main-box' key={2}>
        <header className='sub-box'>
          <h2>{texts?.title}</h2>
          <p>{texts?.text}</p>
        </header>
        <div className='img-container'>
          <picture>
            <source srcSet={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.webp`} className='showcases_img' alt={texts?.alt} type='image/webp' loading='lazy' />
            <img className='showcases_img' src={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.jpg`} alt={texts?.alt} loading='lazy' />
          </picture>
        </div>
      </div>
    </div>
  )
}

const Showcases3 = () => {
  const showcase = config.modules.showcases.data[3]
  const texts = config.translations.showcases.data[3]
  console.log({Showcases3: showcase})
  return (
    <div id='showcases'>
      <div className='main-box' key={3}>
        <header className='sub-box'>
          <h2>{texts?.title}</h2>
          <p>{texts?.text}</p>
        </header>
        <div className='img-container'>
          <picture>
            <source srcSet={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.webp`} className='showcases_img' alt={texts?.alt} type='image/webp' loading='lazy' />
            <img className='showcases_img' src={`${config.urls.media_showcases}${config.isRTL ? showcase.he : showcase.en}.jpg`} alt={texts?.alt} loading='lazy' />
          </picture>
        </div>
      </div>
    </div>
  )
}


export { Showcases0, Showcases1, Showcases2, Showcases3 }
