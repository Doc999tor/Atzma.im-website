import React from 'react'

import './showcases.styl'

const Showcases = () => {
  return (
    <div id='showcases'>
      {config.modules.showcases.data.map(({ en, he }, index) => (
        <div className='main-box' key={index}>
          <header className='sub-box'>
            <h2>{config.translations.showcases.data[index]?.title}</h2>
            <p>{config.translations.showcases.data[index]?.text}</p>
          </header>
          <div className='img-container'>
            <picture>
              <source srcSet={`${config.urls.media_showcases}${config.isRTL ? he : en}.webp`} className='showcases_img' alt={config.translations.showcases.data[index]?.alt} type='image/webp' loading='lazy' />
              <img className='showcases_img' src={`${config.urls.media_showcases}${config.isRTL ? he : en}.jpg`} alt={config.translations.showcases.data[index]?.alt} loading='lazy' />
            </picture>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Showcases
