import './business-types.styl'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'

export default class BusinessTypes extends React.Component {
  state = { slideWidth: 0 }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  handleSlides () {
    if (window.innerWidth >= 1600 && window.innerWidth <= 1919) {
      return 3
    }
    else if (window.innerWidth >= 1920) {
      return 4
    }
    else if (window.innerWidth <= 1599 && window.innerWidth >= 1200) {
      return 3
    }
    else if (window.innerWidth <= 1024) {
      return 2
    }
    else if (window.innerWidth >= 1025 && window.innerWidth <= 1199) {
      return 2
    }
  }

  render () {
    const params = {
      slidesPerView: this.handleSlides(),
      containerClass: config.isRTL ? 'right-swipe' : 'left-swipe',
      loop: true,
      slidesPerColumn: 1
    }
    const businessTypes = config.modules.business_types.data
    return (
      <div id='business_types'>
        <div className='header'>
          <div className='main-text'><h2>{config.translations.business_types.main_title}</h2></div>
          <div className='desc'><p>{config.translations.business_types.subtitle}</p></div>
        </div>
        <div className='content-box'>
          <button className={config.isRTL ? 'btn-next-rtl' : 'btn-prev'} onClick={this.goNext}>
            <img src={config.urls.media + 'btn_right.svg'} alt='' />
          </button>
          <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
            {businessTypes.map((item, index) => {
              return (
                <div>
                  <BusinessTypeComponent name={item.name} icon={item.icon} key={index}/>
                </div>
              )
            })}
          </Swiper>
          <button className={config.isRTL ? 'btn-prev-rtl' : 'btn-next'} onClick={this.goPrev}>
            <img src={config.urls.media + 'btn_left.svg'} alt='' />
          </button>
        </div>
      </div>
    )
  }
}
function BusinessTypeComponent ({ name, icon }) {
  return <figure className='slide' key={name}>
    <picture>
      <source srcSet={config.urls.media_business_types + icon + '.webp'} alt={config.translations.business_types.content[name].title} />
      <img src={config.urls.media_business_types + icon + '.jpg'} alt={config.translations.business_types.content[name].title} />
    </picture>
    <figcaption>
      <h3>{config.translations.business_types.content[name].title}</h3>
      <p>{config.translations.business_types.content[name].text}</p>
    </figcaption>
         </figure>
}
