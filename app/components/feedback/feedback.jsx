import Swiper from '../../../components-lib/Swiper/Swiper.js'
import './feedback.styl'

export default class Topnav extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    history: PropTypes.object,
    timeline: PropTypes.bool,
    punch: PropTypes.bool,
    color: PropTypes.bool,
    home: PropTypes.bool
  }

  state = {
    isActive: false
  }

  rating = item => {
    const arr = []
    for (let i = 0; i < item.rating; i++) {
      arr.push(<img key={i} src={config.urls.media + 'star.svg'} />)
    }
    return <div className='rating-stars'>{arr}</div>
  }
  componentDidMount = () => {
    this.setState({dev: document.getElementById('kek')})
  }
  render () {
    const feedback = this.props.feedback
    const params = {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerColumn: 2
    }
    return (
      <div id='feedback'>
        <div className='feedback-main'>
          <div className='sub-block'>
            <div className='pic-wrap'>
              <img className='feed-img' src={config.urls.media + 'ill_feedback.svg'} />
            </div>
            <div className='desc-wrap'>
              <h1>{config.translations.feedback.main_title}</h1>
              <p>{config.translations.feedback.subtitle}</p>
              <button>
                {config.translations.feedback.leave_btn_label}
              </button>
            </div>
          </div>
          <div className='sub-block'>
            <div className='swiper-feedback'>
              <Swiper
                {...params}
              >
                {feedback.map((i, k) => (
                  <div key={k} id={'slide ' + i.id}>
                    <picture>
                      <source srcSet={config.urls.media_clients + i.picture} />
                      <img src={config.urls.media_clients + i.picture_web} alt={config.translations.feedback.alt_pic} />
                    </picture>
                    <div className='description-wrap'>
                      <h3>{i.customer_name}</h3>
                      <div className='rating'>
                        {this.rating(i)}
                      </div>
                      <p>{i.text}</p>
                    </div>
                  </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
