import React, { useState, useEffect } from 'react'
import { Swiper, Autoplay, Navigation, Pagination } from 'swiper/js/swiper.esm'
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom'

import './features.styl'
import 'swiper/css/swiper.css'

const Features = () => {
  const [slides, setSlides] = useState([])
  useEffect(
    () => {
      const array = config.modules.features.data
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
    autoplay: {
      delay: config.modules.features.carousel_time || 5000,
      disableOnInteraction: false
    },
    spaceBetween: 0,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    loop: true,
    noSwiping: false,
    modules: [Autoplay, Pagination, Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    renderPrevButton: () => <div className='swiper-button-prev swiper-no-swiping'><img src={config.urls.media + 'ic_arrow_left.svg'} /></div>,
    renderNextButton: () => <div className='swiper-button-next swiper-no-swiping'><img src={config.urls.media + 'ic_arrow_right.svg'} /></div>
  }
  return (
    <div id='features'>
      <header>
        <h2>{config.translations.features.main_title}</h2>
        <p id="starting_from">{config.translations.features.starting_from}</p>
        <p>{config.translations.features.subtitle}</p>
      </header>
      <div className='features-content-box'>
        {slides.length > 0 && <ReactIdSwiperCustom {...params}>
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                <div className='features-container'>
                  {slide.map((item, index) => (<figure key={index} className='slide-item'>
                    <div className='outer_border'>
                      <div className='inner_wrap'>
                        <img src={config.urls.media_features + item.icon} alt={config.translations.features.content.data[item.name].name} />
                      </div>
                    </div>
                    <figcaption>
                      <p>{config.translations.features.content.data[item.name].name}</p>
                      <span>{config.translations.features.content.data[item.name].description}</span>
                    </figcaption>
                  </figure>)
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
export default Features
