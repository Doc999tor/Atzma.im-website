import Swiper from '../../../components-lib/Swiper/Swiper.js'
import './feedback.styl'

export default class Feedback extends React.Component {
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
      spaceBetween: 30,
      slidesPerColumn: 2
    }
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
              <a href=''>
                <button>
                  {config.translations.feedback.leave_btn_label}
                </button>
              </a>
            </div>
          </div>
          <div className='swiper-block'>
            <div className='swiper-feedback'>
              <Swiper
                {...params}
              >
                {feedback.map((i, k) => (
                  <div key={k} id={'slide ' + i.id}>
                    <picture>
                      <source srcSet={config.urls.media_clients + i.picture} alt={config.translations.feedback.alt_pic} />
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
