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
  componentDidMount = () => {
    var firstButton = document.createElement('div')
    var secButton = document.createElement('div')
    const url = `${config.urls.media}ic_arrow_left.svg`
    const url2 = `${config.urls.media}ic_arrow_right.svg`
    if (!config.isRTL) {
      firstButton.innerHTML = `<style>
      .swiper-button-prev{
        content: url(${url});
        padding: 4px;
      }
      </style>`
      document.body.appendChild(firstButton)
      secButton.innerHTML = `<style>
      .swiper-button-next{
        content: url(${url2});
        padding: 4px;
      }
      </style>`
      document.body.appendChild(secButton)
    } else {
      firstButton.innerHTML = `<style>
    .swiper-button-prev-rtl{
      content: url(${url});
      padding: 4px;
    }
    </style>`
      document.body.appendChild(firstButton)
      secButton.innerHTML = `<style>
    .swiper-button-next-rtl{
      content: url(${url2});
      padding: 4px;
    }
    </style>`
      document.body.appendChild(secButton)}
  }
  render () {
    const businessTypes = this.props.businessTypes
    const params = {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: '.swiper-pagination'
    }
    return (
      <div id='business-types'>
        <div className='header'>
          <div className='main-text'><h2>{config.translations.business_types.main_title}</h2></div>
          <div className='desc'><p>{config.translations.business_types.subtitle}</p></div>
        </div>
        <div className='content-box'>
          <Swiper
            {...params}
            nextButton={config.isRTL ? '.swiper-button-prev-rtl' : '.swiper-button-next'}
            prevButton={config.isRTL ? '.swiper-button-next-rtl' : '.swiper-button-prev'}
          >
            {businessTypes.map((i, k) => (
              <div key={k} >
                <div className='test1'>
                  <div className='img-wrap'>
                    <picture>
                      <source srcSet={config.urls.media + i.icon} />
                      <img src={config.urls.media + i.icon_web} alt={config.translations.feedback.alt_pic} />
                    </picture>
                  </div>
                  <div className='description-wrap'>
                    <h3>{i.name}</h3>
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
