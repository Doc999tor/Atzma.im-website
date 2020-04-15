import { default as Swiper } from 'project-components/Swiper/Swiper.js'
import './index.styl'

export default class HeroCarousel extends React.Component {
  state = {
    slides: []
  }

  componentDidMount () {
    this.setState({
      slides: [...config.modules.hero.gallery]
    })
  }

  render () {
    const autoPlay = config.modules.hero.gallery.length > 1 ? config.modules.hero.carousel_time || 2000 : false
    const params = {
      slidesPerView: 1,
      effect: 'fade',
      autoplay: autoPlay,
      spaceBetween: 10,
      autoplayDisableOnInteraction: false,
      loop: true,
      noSwiping: true
    }
    const { slides } = this.state
    return (
      <>
        {slides.length > 0 && <Swiper {...params}>
          {slides.map((item, i) => (
            <div className='titles_carousel' key={i}>
              <div className='hero_title'>
                <h1>{config.translations.hero.carousel_text[i] && config.translations.hero.carousel_text[i].title}</h1>
                <div className='hero-description'>
                  <p>{config.translations.hero.carousel_text[i] && config.translations.hero.carousel_text[i].description}</p>
                </div>
              </div>
              <div className='hero_screen'>
                <picture className='screen-picture'>
                  <source className='screen-img' srcSet={`${config.urls.hero_gallery}${item}.webp`} type='image/webp' />
                  <img className='screen-img' src={`${config.urls.hero_gallery}${item}.jpg`} alt={item} />
                </picture>
              </div>
            </div>
          ))}
        </Swiper>}
      </>
    )
  }
}