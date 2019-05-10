import './feedback.styl'

export default class Feedback extends React.Component {
  state = {
    slideWidth: 0
  }
  normalizeFragmentSize = () => {
    const sliderTrain = document.getElementById('slider')
    const count = sliderTrain.offsetWidth >= 700 ? 4 : 3
    const countMax = sliderTrain.offsetWidth >= 600 && 250
    const width = sliderTrain.offsetWidth <= 230 && 230
    this.setState({
      slideWidth: sliderTrain.offsetWidth / count,
      maxWidth: countMax || (sliderTrain.offsetWidth / 2 - 25),
      widthPhoneScreen: width
    })
  }
  rating = item => {
    const arr = []
    for (let i = 0; i < item.rating; i++) {
      arr.push(<img key={i} src={config.urls.media + 'star.svg'} />)
    }
    return <div className='rating-stars'>{arr}</div>
  }
  componentDidMount () {
    window.addEventListener('resize', this.normalizeFragmentSize)
    this.normalizeFragmentSize()
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.normalizeFragmentSize)
  }
  goNext = () => {
    let div = document.getElementById('slider')
    div.scrollLeft += this.state.slideWidth
  }

  goPrev = () => {
    let div = document.getElementById('slider')
    div.scrollLeft -= this.state.slideWidth
  }
  render () {
    // console.log(this.state.widthScreen);
    // let widthScreen = this.state.w
    const feedback = this.props.feedback
    const { slideWidth, maxWidth } = this.state
    return (
      <div id='feedback'>
        <img className='rectangle-1' src={config.urls.media + 'rectangle.svg'} alt='' role='presentation' />
        <img className='rectangle-2' src={config.urls.media + 'rectangle.svg'} alt='' role='presentation' />
        <img className='rectangle-3' src={config.urls.media + 'ellipse_showcase_3.svg'} alt='' role='presentation' />
        <img className='rectangle-4' src={config.urls.media + 'ellipse_showcase_3.svg'} alt='' role='presentation' />
        <img className='rectangle-5' src={config.urls.media + 'ellipse_showcase_3.svg'} alt='' role='presentation' />
        <img className='rectangle-6' src={config.urls.media + 'ellipse_showcase_3.svg'} alt='' role='presentation' />
        <img className='rectangle-7' src={config.urls.media + 'ellipse_showcase_2.svg'} alt='' role='presentation' />
        <img className='rectangle-8' src={config.urls.media + 'ellipse_showcase_2.svg'} alt='' role='presentation' />
        <img className='rectangle-9' src={config.urls.media + 'ellipse_showcase_3.svg'} alt='' role='presentation' />
        <div className='feedback-main'>
          <div className='text-block'>
            <div className='pic-wrap'>
              <img className='feed-img' src={config.urls.media + 'ill_feedback.svg'} />
            </div>
            <div className='desc-wrap'>
              <h2>{config.translations.feedback.main_title}</h2>
              <p>{config.translations.feedback.subtitle}</p>
              <a href=''>{config.translations.feedback.leave_btn_label}</a>
            </div>
          </div>
          <div className='slider-feedback' id='slider'>
            {feedback.map((i, k) => (
              <figure key={k} style={{ 'min-width': slideWidth, 'max-width': maxWidth, width: this.state.widthPhoneScreen }}>
                <picture>
                  <source srcSet={config.urls.media_clients + i.picture_web} alt={config.translations.feedback.alt_pic} />
                  <img src={config.urls.media_clients + i.picture} alt={config.translations.feedback.alt_pic} />
                </picture>
                <div className='description-wrap'>
                  <h3>{i.customer_name}</h3>
                  <div className='rating'>
                    {this.rating(i)}
                  </div>
                  <p>{i.text}</p>
                </div>
              </figure>
            ))}
          </div>
        </div>
        {!this.state.widthPhoneScreen && <div className='btn'>
          <div className='buttons'>
            <button className='prev-btn' onClick={this.goPrev}>
              <img src={config.urls.media + 'ic_arrow_left.svg'} />
            </button>
            <button className='next-btn' onClick={this.goNext}>
              <img src={config.urls.media + 'ic_arrow_right.svg'} />
            </button>
          </div>
        </div>}
      </div>
    )
  }
}
