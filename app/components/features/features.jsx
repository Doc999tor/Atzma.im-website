import './features.styl'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
export default class Topnav extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      coefficient: 6
    }
  }

  getCoefficient = () => {
    const swiperWidth = document.getElementById('customSwiperIdCenzo').offsetWidth
    return Math.floor(swiperWidth / 340)
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      this.setState({ coefficient: this.getCoefficient()})
    })
  }

  createSwipeItem = () => {
    const featuresContent = config.modules.features.data
    let elementCounter = 0
    let swipeID = 1
    let swipeItems = { 1: [] }
    featuresContent.forEach(element => {
      if (elementCounter !== this.state.coefficient * 2) {
        swipeItems[swipeID].push(element)
        elementCounter++
      } else {
        elementCounter = 0
        swipeID++
        swipeItems[swipeID] = []
      }
    })
    return swipeItems;
  }

  render () {
    const swipeItems = Object.values(this.createSwipeItem())
    if (!swipeItems[swipeItems.length - 1].length) {
      swipeItems.splice(-1, 1)
    }
    const params = {
      autoplay: 2000,
    }
    return (
      <div id='features'>
        <header>
          <div className='main-text'><h2>{config.translations.features.content.title}</h2></div>
          <div className='desc'><p>{config.translations.features.content.description}</p></div>
        </header>
        <div className='features-content-box' id='customSwiperIdCenzo'>
          <Swiper {...params}>
            {swipeItems.map((item, index) => {
              return (
                <div className="swipeItem" key={index}>
                  {/* {item.map(i => <Feature name={i.name} icon={i.icon}/>)} */}
                  {item.map((element, index) => <Feature name={element.name} icon={element.icon} />)}
                </div>)
            })}
          </Swiper>
        </div>
      </div>
    )
  }
}

function Feature ({name, icon}) {
  return  <figure key={name} className='content-wrap'>
    <img src={config.urls.media_features + icon} alt={config.translations.features.content.data[name].name} />
    <figcaption>{config.translations.features.content.data[name].name}</figcaption>
  </figure>

}