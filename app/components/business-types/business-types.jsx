import './business-types.styl'

export default class BusinessTypes extends React.Component {
  state = { slideWidth: 0 }

  normalizeFragmentSize = () => {
    const sliderTrainWidth = this.sliderTrain.offsetWidth;
    const count = sliderTrainWidth <= 800 ? 1 : 3
    console.log(count)
    const marginWidth = 16;
    const navBtnWidth = 50;
    this.setState({
      slideWidth:
        (sliderTrainWidth - marginWidth - navBtnWidth * 2) / count
        ,
    })
    console.log((sliderTrainWidth - marginWidth - navBtnWidth * 2) / count)
  }

  componentDidMount = () => {
    this.sliderTrain = document.getElementById('sliderTrain')

    setTimeout(() => { console.log(this.sliderTrain.offsetWidth) }, 100)

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
    const businessTypes = config.modules.business_types.data
    return (
      <div id='business_types'>
        <div className='header'>
          <div className='main-text'><h2>{config.translations.business_types.main_title}</h2></div>
          <div className='desc'><p>{config.translations.business_types.subtitle}</p></div>
        </div>
        <div className='content-box'>
          <button className='nav-btn prev-btn' onClick={this.goPrev}>
            <img src={config.urls.media + 'ic_arrow_left.svg'} alt='' />
          </button>
          <div className='slider' id='sliderTrain'>
            {
              businessTypes.map(b_type => <BusinessTypeComponent name={b_type.name} icon={b_type.icon} slideWidth={ this.state.slideWidth } />)
            }
          </div>
          <button className='nav-btn next-btn' onClick={this.goNext}>
            <img src={config.urls.media + 'ic_arrow_right.svg'} alt='' />
          </button>
        </div>
      </div>
    )
  }
}

function BusinessTypeComponent({name, icon, slideWidth}) {
  return <figure key={name} style={{ 'width': slideWidth }}>
    <picture>
      <source srcSet={config.urls.media_business_types + icon + '.webp'} alt={ config.translations.business_types.content[name].title } />
      <img src={config.urls.media_business_types + icon + '.jpg'} alt={ config.translations.business_types.content[name].title } />
    </picture>
    <figcaption>
      <h3>{ config.translations.business_types.content[name].title }</h3>
      <p>{ config.translations.business_types.content[name].text }</p>
    </figcaption>
  </figure>
}
