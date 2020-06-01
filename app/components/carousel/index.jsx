import './index.styl'

export default class HeroCarousel extends React.Component {
  state = {
    current: 0,
    slides: [...config.modules.hero.gallery],
    speed: config.modules.hero.carousel_time || 5000
  }

  componentDidMount () {
    this.startRotation()
  }

  componentWillUnmount () {
    this.stopRotation()
  }

  startRotation = () => {
    this.interval = setInterval(this.next, this.state.speed)
  }

  stopRotation = () => {
    clearInterval(this.interval)
  }

  next = () => {
    const current = this.state.current
    let nextSlide = current + 1

    if (nextSlide > config.modules.hero.gallery.length - 1) {
      nextSlide = 0
    }

    this.setState({
      current: nextSlide
    })
  }

  isActive = slide => this.state.current === slide

  render () {
    const { slides } = this.state
    return (
      <>
        {slides.map((item, i) => (
          <div className={'titles_carousel' + (this.isActive(i) ? ' active' : '')} key={i}>
            <div className='hero_title'>
              <div className='main-title'>
                <h1>{config.translations.hero.carousel_text[i] && config.translations.hero.carousel_text[i].title}</h1>
              </div>
              <div className='hero-description'>
                <p>{config.translations.hero.carousel_text[i] && config.translations.hero.carousel_text[i].description}</p>
              </div>
            </div>
            <div className='hero_screen'>
              <picture className='screen-picture'>
                <source className='screen-img' srcSet={`${config.urls.hero_gallery}${item}.webp`} type='image/webp' />
                <img className='screen-img' src={`${config.urls.hero_gallery}${item}.jpg`} alt={item} />
              </picture>
              <picture className='black_phone'>
                <source className={'iphone-border ' + (config.isRTL ? 'border_rtl' : 'border_ltr')} srcSet={`${config.urls.media}black_phone.webp`} type='image/webp' />
                <img className={'iphone-border ' + (config.isRTL ? 'border_rtl' : 'border_ltr')} src={`${config.urls.media}black_phone.png`} alt={item} />
              </picture>
            </div>
          </div>
        ))}
      </>
    )
  }
}
