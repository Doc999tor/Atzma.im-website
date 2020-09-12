import React, { useState, useEffect } from 'react'
import { Swiper, Autoplay, Pagination } from 'swiper/js/swiper.esm'
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom'

import './business-types.styl'
import 'swiper/css/swiper.css'

const BusinessTypes = () => {
  const [slides, setSlides] = useState([])
  useEffect(
    () => {
      const array = config.modules.business_types.data
      const result = []
      for (let i = 0; i < array.length; i += 4) {
        result.push(array.slice(i, i + 4))
      }
      setSlides([...result])
    },
    []
  )

  const params = {
    Swiper,
    // autoplay: {
    //   delay: config.modules.features.carousel_time || 5000,
    //   disableOnInteraction: false
    // },
    spaceBetween: 0,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true,
    noSwiping: false,
    modules: [Autoplay, Pagination]
  }
  return (
    <div id='business_types'>
      <header className='header'>
        <h2>{config.translations.business_types_mobile.main_title}</h2>
        <p>{config.translations.business_types_mobile.subtitle}</p>
      </header>
      <div className='business_types-content-box'>
        {slides.length > 0 && <ReactIdSwiperCustom {...params}>
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                <div className='business_types-container'>
                  {slide.map(({ name, icon }, index) => (<div key={index} className='slide-item'>
                    <figure className='slide'>
                      <picture>
                        <source srcSet={config.urls.media_business_types + icon + '.webp'} type='image/webp' alt={config.translations.business_types.content[name].title} />
                        <img src={config.urls.media_business_types + icon + '.jpg'} alt={config.translations.business_types.content[name].title} />
                      </picture>
                      <figcaption>
                        {config.translations.business_types.content[name].title}
                      </figcaption>
                    </figure>
                  </div>)
                  )}
                </div>
              </div>
            )
          })}
        </ReactIdSwiperCustom>}
      </div>
    </div>
  )
}
export default BusinessTypes
