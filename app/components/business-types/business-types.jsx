import './business-types.styl'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'

export default class BusinessTypes extends React.Component {

  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  render () {
    const params = {
      slidesPerView: 4,
      loop: true,
      slidesPerGroup: 4,
      noSwiping: true,
      breakpoints: {
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        1200: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }
    }
    const businessTypes = config.modules.business_types.data
    return (
      <div id='business_types'>
        <header className='header'>
          <h2>{config.translations.business_types.main_title}</h2>
          <p>{config.translations.business_types.subtitle}</p>
        </header>
        <div className='content-box'>
          <button className={config.isRTL ? 'btn-prev-rtl' : 'btn-next'} onClick={this.goPrev}>
            <img src={config.urls.media + 'btn_left.svg'} alt='' />
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
          <button className={config.isRTL ? 'btn-next-rtl' : 'btn-prev'} onClick={this.goNext}>
            <img src={config.urls.media + 'btn_right.svg'} alt='' />
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
