import SliderBtn from '../btn-slider/index.jsx'
import Pagination from '../pagination/index.jsx'
import './features.styl'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
export default class Topnav extends React.Component {
  state = {
    slides: []
  }

  componentDidMount () {
    const array = config.modules.features.data
    const result = []
    for (let i = 0; i < array.length; i += 6) {
      result.push(array.slice(i, i + 6))
    }
    this.setState({
      slides: [...result]
    })
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  handleSlideChangeEnd = e => this.setState({ activeIndex: e.realIndex })

  handleInit = e => this.setState({ activeIndex: e.realIndex })

  render () {
    const params = {
      autoplay: config.modules.hero.carousel_time || 3000,
      spaceBetween: 0,
      initialSlide: 0,
      autoplayDisableOnInteraction: false,
      onSlideChangeEnd: this.handleSlideChangeEnd,
      onInit: this.handleInit,
      noSwiping: true,
      loop: true
    }
    const { slides, activeIndex } = this.state
    return (
      <div id='features'>
        <header>
          <h2>{config.translations.features.content.title}</h2>
          <p>{config.translations.features.content.description}</p>
        </header>
        <div className='features-content-box'>
          <div className='wrap_controls'>
            <SliderBtn action={this.goPrev} img='ic_arrow_left.svg' />
          </div>
          {slides.length > 0 && <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
            {slides.map((slide, index) => {
              return (
                <div key={index}>
                  <Feature slide={slide} />
                </div>
              )
            })}
          </Swiper>}
          <div className='wrap_controls'>
            <SliderBtn action={this.goNext} img='ic_arrow_right.svg' />
          </div>
        </div>
        <div className='features_pagination'>
          <div className='pagination'>
            {slides.length > 0 && <Pagination slides={slides} activeIndex={activeIndex} />}
          </div>
        </div>
      </div>
    )
  }
}

function Feature ({ slide }) {
  return slide.map((item, index) => (<figure key={index} className='slide-item'>
    <img src={config.urls.media_features + item.icon} alt={config.translations.features.content.data[item.name].name} />
    <figcaption>{config.translations.features.content.data[item.name].name}</figcaption>
</figure>)
  )
}
