import Title from './title.jsx'
import Pics from './pics.jsx'
import './index.styl'

export default class Slide extends React.Component {
  state = {
    current: 0,
    speed: this.props.cycleSpeed || 3000,
    timer: null
  };

  startRotation = () => {
    this.interval = setInterval(this.next, this.state.speed)
  };

  stopRotation = () => {
    clearInterval(this.interval)
    this.setState({
      time: null
    })
  };

  next = () => {
    const current = this.state.current
    let nextSlide = current + 1

    if (nextSlide > config.modules.hero.gallery.length - 1) {
      nextSlide = 0
    }

    this.setState({
      current: nextSlide
    })
  };

  prev = () => {
    const current = this.state.current
    let previousSlide = current - 1
    if (previousSlide < 0) {
      previousSlide = config.modules.hero.gallery.length - 1
    }
    this.setState({
      current: previousSlide
    })
  };

  isActive = slide => {
    return this.state.current === slide
  };

  componentDidMount () {
    this.startRotation()
  }

  componentWillUnmount () {
    this.stopRotation()
  }

  render () {
    const generateSlides = (
      config.modules.hero.gallery_desktop.map((slideName, i) => (
        <Pics name={slideName} current={this.isActive(i)} key={i} />)
      )
    )
    return (
      <div className='slideshow-container'>
        <img className='iphone-wrap' src={config.urls.hero_gallery + 'black_phone.png'} height='860' width='430' loading='lazy' />
        {generateSlides}
      </div>
    )
  }
}
