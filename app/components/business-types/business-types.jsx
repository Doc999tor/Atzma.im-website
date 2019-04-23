import Swiper from '../../../components-lib/Swiper/Swiper.js'
import './business-types.styl'

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
      <div id='business-types'>
        <div className='header'>
          <div className='main-text'><h1>{config.translations.business_types.main_title}</h1></div>
          <div className='desc'><p>{config.translations.business_types.subtitle}</p></div>
        </div>
        <div className='content-box'>
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={30}
            pagination='.swiper-pagination'
          >
            {businessTypes.map((i, k) => (
              <div key={k} >
                <div className='test1'>
                  <div className='img-wrap'><img src={i.icon} /></div>
                  <div className='description-wrap'>
                    <h2>{i.name}</h2>
                    <p>{i.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    )
  }
}
