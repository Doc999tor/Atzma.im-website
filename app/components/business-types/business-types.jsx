import SliderBtn from '../btn-slider/index.jsx'
import './business-types.styl'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'

export default class BusinessTypes extends React.Component {
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
      autoplay: config.modules.hero.carousel_time || 3000,
      autoplayDisableOnInteraction: false,
      rebuildOnUpdate: true,
      observer: true,
      slidesPerView: 4,
      loop: true,
      slidesPerGroup: 4,
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
    const { slides } = this.state
    return (
      <div id='business_types'>
        <header className='header'>
          <h2>{config.translations.business_types.main_title}</h2>
          <p>{config.translations.business_types.subtitle}</p>
        </header>
        <div className='content-box'>
          <div className='wrap_controls'>
            <SliderBtn action={this.goPrev} img='ic_arrow_left.svg' />
          </div>
          {slides.length > 0 && <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
            {slides.map((item, index) => {
              return (
                <div>
                  <BusinessTypeComponent name={item.name} icon={item.icon} key={index}/>
                </div>
              )
            })}
          </Swiper>}
          <div className='wrap_controls'>
            <SliderBtn action={this.goNext} img='ic_arrow_right.svg' />
          </div>
        </div>
      </div>
    )
  }
}
function BusinessTypeComponent ({ name, icon }) {
  return <figure className='slide' key={name}>
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
