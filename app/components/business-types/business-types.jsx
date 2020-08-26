import React from 'react'
import './business-types.styl'
import 'swiper/css/swiper.css'

const BusinessTypes = () => {
  return (
    <div id='business_types'>
      <header className='header'>
        <h2>{config.translations.business_types_mobile.main_title}</h2>
        <p>{config.translations.business_types_mobile.subtitle}</p>
      </header>
      <div className='content-box'>
        <img src={config.urls.media + 'business_types.png'} alt='' role='presentation' />
      </div>
    </div>
  )
}
export default BusinessTypes
