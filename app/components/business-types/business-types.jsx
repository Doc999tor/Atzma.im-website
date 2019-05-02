import './business-types.styl'

export default class BusinessTypes extends React.Component {

  state = {
    slideWidth: 0
  }

  normalizeFragmentSize = () => {
    const sliderTrain = document.getElementById('sliderTrain')
    const count = sliderTrain.offsetWidth <= 700 ? 1 : 3
    // const margin = sliderTrain.offsetWidth <= 700 ? 20 : 20
    this.setState({ slideWidth: sliderTrain.offsetWidth / count - 25 })
  }

  componentDidMount = () => {
    window.onresize = () => {
      this.normalizeFragmentSize()
    }
    this.normalizeFragmentSize()
  }
  goNext = () => {
    let div = document.getElementById('sliderTrain')
    div.scrollLeft += this.state.slideWidth
  }

  goPrev = () => {
    let div = document.getElementById('sliderTrain')
    div.scrollLeft -= this.state.slideWidth
  }
  render () {
    const { slideWidth } = this.state
    const businessTypes = this.props.businessTypes
    return (
      <div id='business-types'>
        <div className='header'>
          <div className='main-text'><h2>{config.translations.business_types.main_title}</h2></div>
          <div className='desc'><p>{config.translations.business_types.subtitle}</p></div>
        </div>
        <div className='content-box'>
          <div className='prev-btn' onClick={this.goPrev}>
            <img src={config.urls.media + 'ic_arrow_left.svg'} />
          </div>
          <div className='slider' id='sliderTrain'>
            {businessTypes.map((i, k) => (
              <figure key={k} style={{ 'min-width': slideWidth }}>
                <picture>
                  <source srcSet={config.urls.media + i.icon} alt={config.translations.business_types.main_title} />
                  <img src={config.urls.media + i.icon_web} alt={config.translations.business_types.main_title} />
                </picture>
                <figcaption>
                  <h3>{i.name}</h3>
                  <p>{i.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className='next-btn' onClick={this.goNext}>
            <img src={config.urls.media + 'ic_arrow_right.svg'} />
          </div>
        </div>
      </div>
    )
  }
}
