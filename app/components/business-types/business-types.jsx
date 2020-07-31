import React, { useState } from 'react'
import { Swiper, Autoplay, Navigation, Pagination } from 'swiper/js/swiper.esm'
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom'
import './business-types.styl'
import 'swiper/css/swiper.css'

const BusinessTypes = () => {
  const [slides, setSlides] = useState([...config.modules.business_types.data])
  const params = {
    Swiper,
    spaceBetween: 16,
    slidesPerView: 4,
    slidesPerGroup: 4,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: config.modules.business_types.carousel_time || 5000,
      disableOnInteraction: false
    },
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },
    noSwiping: true,
    modules: [Navigation, Autoplay, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    renderPrevButton: () => <div className="swiper-button-prev"></div>,
    renderNextButton: () => <div className="swiper-button-next"></div>,
  }
  return (
    <div id='business_types'>
      <header className='header'>
        <h2>{config.translations.business_types.main_title}</h2>
        <p>{config.translations.business_types.subtitle}</p>
      </header>
      <div className='content-box'>
        {slides.length > 0 && <ReactIdSwiperCustom {...params}>
          {slides.map((item, index) => {
            return (
              <figure className='slide' key={index}>
                <picture>
                  <source srcSet={config.urls.media_business_types + item.icon + '.webp'} type='image/webp' alt={config.translations.business_types.content[item.name].title} />
                  <img src={config.urls.media_business_types + item.icon + '.jpg'} alt={config.translations.business_types.content[item.name].title} />
                </picture>
                <figcaption>
                  <h3>{config.translations.business_types.content[item.name].title}</h3>
                  <p>{config.translations.business_types.content[item.name].text}</p>
                </figcaption>
              </figure>
            )
          })}
        </ReactIdSwiperCustom>}
      </div>
    </div>
  )
}
export default BusinessTypes
