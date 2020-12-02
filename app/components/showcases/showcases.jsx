import React, { Component } from 'react'
import BtnTryFree from '../btn-try-free/index.jsx'
import './showcases.styl'
export default class Topnav extends Component {
  render () {
    return (
      <div id='showcases'>
        <div className='main-box'>
          <div className='sub-box'>
            <h2>{config.translations.showcases_desktop.main_title}</h2>
            <p>{config.translations.showcases_desktop.description}</p>
            <BtnTryFree label={config.translations.showcases_desktop.button_label} />
          </div>
          <div className='img-container'>
            {config.modules.showcases_desktop.phones_pics.map((picName, i) => (
              <>
                <picture key={picName}>
                  <source srcSet={`${config.urls.media_showcases}${picName}.webp`} className={'icon-' + (i + 1) + (config.isRTL ? ' rtl-icon-' + (i + 1) : ' ltr-icon-' + (i + 1))} alt={config.translations.showcases_desktop.phones_pics_alt[i]} type='image/webp' loading='lazy' />
                  <img className={'icon-' + (i + 1) + (config.isRTL ? ' rtl-icon-' + (i + 1) : ' ltr-icon-' + (i + 1))} src={`${config.urls.media_showcases}${picName}.png`} alt={config.translations.showcases_desktop.phones_pics_alt[i]} loading='lazy' />
                </picture>
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
