import './features.styl'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
export default class Topnav extends React.Component {
  state = {
    slides: []
  }

  componentDidMount () {
    const array = config.modules.features.data
    const result = []
    while (array.length) result.push(array.splice(0, 6))
    this.setState({
      slides: [...result]
    })
  }

  render () {
    const params = {
      autoplay: config.modules.hero.carousel_time || 3000,
      spaceBetween: 0,
      noSwiping: true,
      loop: true
    }
    const { slides } = this.state
    return (
      <div id='features'>
        <header>
          <h2>{config.translations.features.content.title}</h2>
          <p>{config.translations.features.content.description}</p>
        </header>
        <div className='features-content-box'>
          {slides.length > 0 && <Swiper {...params}>
            {slides.map((slide, index) => {
              return (
                <div key={index}>
                  <Feature slide={slide} />
                </div>
              )
            })}
          </Swiper>}
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
