import React, { Component } from 'react'
import { Swiper } from 'swiper/js/swiper.esm'
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom'
// import Swiper from 'react-id-swiper'
// import Default from './swiper.jsx'
import SliderBtn from '../btn-slider/index.jsx'
import './business-types.styl'
import 'swiper/css/swiper.css'
// import { default as Swiper } from 'project-components/Swiper/Swiper.js'
// import Swiper from 'react-id-swiper';

export default class BusinessTypes extends Component {
  state = {
    slides: []
  }

  componentDidMount () {
    this.setState({
      slides: [...config.modules.business_types.data]
    })
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  render () {
    const params = {
      // Provide Swiper class as props
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      Swiper,
      spaceBetween: 16,
      slidesPerView: 4,
      slidesPerGroup: 4,
      // noSwiping: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // },
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        // 1920: {
        //   slidesPerView: 4,
        //   slidesPerGroup: 4
        // },
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
      // Add modules you need
      // modules: [Navigation, Pagination],
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // },
      // spaceBetween: 30
    }

    const { slides } = this.state
    return (
      <div id='business_types'>
        <header className='header'>
          <h2>{config.translations.business_types.main_title}</h2>
          <p>{config.translations.business_types.subtitle}</p>
        </header>
        <div className='content-box'>
          {/* <div className='wrap_controls'>
            <SliderBtn action={this.goPrev} img='ic_arrow_left.svg' />
          </div> */}
          {/* {slides.length > 0 && <Swiper {...params} >
            {slides.map((item, index) => {
              return (
                  <BusinessTypeComponent name={item.name} icon={item.icon} key={index}/>
              )
            })}
            <div className='test'>#1</div>
            <div className='test'>#2</div>
            <div className='test'>#3</div>
          </Swiper>} */}
          {/* <Default /> */}
          {slides.length > 0 && <ReactIdSwiperCustom {...params}>
            {slides.map((item, index) => {
              return (
              // <div className='test'>{index}</div>
                // <BusinessTypeComponent name={item.name} icon={item.icon} key={index} />
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
          {/* <div className='wrap_controls'>
            <SliderBtn action={this.goNext} img='ic_arrow_right.svg' />
          </div> */}
        </div>
      </div>
    )
  }
}
function BusinessTypeComponent ({ name, icon }) {
  return <figure key={name}>
    <picture>
      <source srcSet={config.urls.media_business_types + icon + '.webp'} type='image/webp' alt={config.translations.business_types.content[name].title} />
      <img src={config.urls.media_business_types + icon + '.jpg'} alt={config.translations.business_types.content[name].title} />
    </picture>
    <figcaption>
      <h3>{config.translations.business_types.content[name].title}</h3>
      <p>{config.translations.business_types.content[name].text}</p>
    </figcaption>
  </figure>
}
