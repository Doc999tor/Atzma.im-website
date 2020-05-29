import './benefit.styl'

export default class Benefit extends React.Component {
  state = {
    current: 0,
    speed: config.modules.main_benefit.carousel_time,
  };

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

    if (nextSlide > config.translations.main_benefit.content.data.length - 1) {
      nextSlide = 0
    }

    this.setState({
      current: nextSlide
    })
  }

  isActive = slide => this.state.current === slide

  render () {
    return (
      <div id='benefit'>
        {config.modules.main_benefit.data.map((item, index) => {
          return (
            <div key={index} className={'slide' + (this.isActive(index) ? ' active' : '')}>
              <div className='pic_container'>
                <img src={config.urls.media_benefit + item.pic} alt={config.translations.main_benefit.content.data[index]?.alt} />
              </div>
              <div className='texts'>
                <div className='title-container'>
                  <h2>{config.translations.main_benefit.content.data[index]?.title}</h2>
                </div>
                <div className='text-container'>
                  <p>{config.translations.main_benefit.content.data[index]?.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
