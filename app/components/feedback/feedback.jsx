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
  render () {
    const businessTypes = this.props.businessTypes
    return (
      <div id='feedback'>
        <div className='feedback-main'>
          <div className='sub-block'>
            <div className='pic-wrap'>
              <img src={config.urls.media + 'ill_feedback.svg'} />
            </div>
            <div className='desc-wrap'>
              <h1>{config.translations.feedback.main_title}</h1>
              <p>{config.translations.feedback.subtitle}</p>
            </div>
          </div>
          <div className='sub-block'>
            <div className='pic-wrap'>
              <img src={config.urls.media + 'ill_feedback.svg'} />
            </div>
            <div className='desc-wrap'>
              <h1>{config.translations.feedback.main_title}</h1>
              <p>{config.translations.feedback.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
