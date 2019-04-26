
import './showcases.styl'

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
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}bg_showcase.svg')`,
      backgroundRepeat: `no-repeat`
    }
    return (
      <div id='showcases' style={bgrImg}>
        <div className='main-box'>
          <div className='sub-box'>
            <img src={config.urls.media + 'ellipse_showcase_1.svg'} className='ellipse-1'/>
            <img src={config.urls.media + 'ellipse_showcase_1.svg'} className='ellipse-2'/>
            <img src={config.urls.media + 'ellipse_showcase_1.svg'} className='ellipse-3'/>
            <img src={config.urls.media + 'ellipse_showcase_2.svg'} className='ellipse-4'/>
            <img src={config.urls.media + 'ellipse_showcase_2.svg'} className='ellipse-5'/>
            <img src={config.urls.media + 'ellipse_showcase_3.svg'} className='ellipse-6'/>
            <div className='main-desc'>
              <h2>{config.translations.showcases.main_title}</h2>
            </div>
            <div className='desc'>
              <p>{config.translations.showcases.description}</p>
            </div>
            <div className='btn-more'>
              <button>{config.translations.showcases.learn_more}</button>
            </div>
          </div>
          <div className='img-box'>
            <img src={config.urls.media + 'iphone.png'} />
            <img src={config.urls.media + 'iphone.png'} className='second-phone'/>
            <img src={config.urls.media + 'iphone.png'} className='third-phone'/>
            <img src={config.urls.media + 'iphone.png'} className='last-phone'/>
          </div>
        </div>
      </div>
    )
  }
}
