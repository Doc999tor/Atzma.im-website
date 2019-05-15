import './feedback.styl'

function fragmentSizeFactory () {
  const sliderTrain = document.getElementById('slider')
  const count = sliderTrain.offsetWidth >= 700 ? 4 : 3
  const countMax = sliderTrain.offsetWidth >= 600 && 250
  const width = sliderTrain.offsetWidth <= 230 && 230
  const slideWidth = sliderTrain.offsetWidth / count;
  const maxWidth = countMax || (sliderTrain.offsetWidth / 2 - 25);

  return function () {
    return {
      count, countMax, width, slideWidth, maxWidth
    }
  }
}
let getFragmentSize;

export default class Feedback extends React.Component {
  state = {
    slideWidth: 0
  }
  normalizeFragmentSize = () => {
    getFragmentSize = fragmentSizeFactory()
    const { count, countMax, width, slideWidth, maxWidth } = getFragmentSize();
    this.setState({
      slideWidth,
      maxWidth,
      widthPhoneScreen: width
    })
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
    const feedback = this.props.content.data
    const { slideWidth, maxWidth } = this.state
    return (
      <div id='feedback'>
      {
        Array.from({length: 9}).map(DecorativeItem)
      }
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
            {feedback.map((i, k) => FeedbackItem(i, k))}
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

function FeedbackItem(i, k) {
  if (!getFragmentSize) { return false; }

  const { count, countMax, width, slideWidth, maxWidth } = getFragmentSize();
  return (
    <figure key={k} style={{ 'min-width': slideWidth, 'max-width': maxWidth, width }}>
      <picture>
        <source srcSet={config.urls.media_clients + i.picture} alt={config.translations.feedback.alt_pic} />
        <img src={config.urls.media_clients + i.picture_web} alt={config.translations.feedback.alt_pic} />
      </picture>
      <div className='description-wrap'>
        <h3>{i.customer_name}</h3>
        <div className='rating'>
          {Rating(i)}
        </div>
        <p>{i.text}</p>
      </div>
    </figure>
  )
}

function Rating (item) {
  return <div className='rating-stars'>
   {
     Array.from({length: item.rating}).map((r, i) => <img key={i} src={config.urls.media + 'star.svg'} />)
   }
  </div>
}

function DecorativeItem (i) {
  return <img className={`rectangle-${i}`} src={config.urls.media + decorativesUrls[i]} alt='' role='presentation' />
}
const decorativesUrls = [
  'rectangle.svg',
  'rectangle.svg',
  'ellipse_showcase_3.svg',
  'ellipse_showcase_3.svg',
  'ellipse_showcase_3.svg',
  'ellipse_showcase_3.svg',
  'ellipse_showcase_2.svg',
  'ellipse_showcase_2.svg',
  'ellipse_showcase_3.svg',
];
