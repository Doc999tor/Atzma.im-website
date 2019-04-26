
import './hero.styl'

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
      backgroundImage: `url('${config.urls.media}bg_top.svg')`
    }
    const secBgr = {
      backgroundImage: `url('${config.urls.media}bg_top_22.svg')`
    }
    return (
      <div id='hero' style={bgrImg}>
        <div className='top'>
          <div className='relative-top'>
            <img className='ellipse-1' src={config.urls.media + 'ellipse1.svg'} />
            <img className='ellipse-2' src={config.urls.media + 'ellipse2.svg'} />
            <img className='ellipse-3' src={config.urls.media + 'ellipse3.svg'} />
            <img className='ellipse-4' src={config.urls.media + 'ellipse4.svg'} />
            <img className='ellipse-5' src={config.urls.media + 'ellipse5.svg'} />
            <img className='ellipse-6' src={config.urls.media + 'ellipse2.svg'} />
            <img className='ellipse-7' src={config.urls.media + 'ellipse5.svg'} />
            <img className='ellipse-8' src={config.urls.media + 'ellipse8.svg'} />
            <img className='ellipse-9' src={config.urls.media + 'ellipse2.svg'} />
          </div>
          <div className='header-wrap'>
            <div className='logo-wrap'>
              <img src={config.urls.media + 'ic_logo.svg'} />
              <div>{config.translations.hero.main_logo}</div>
            </div>
            <nav>
              <a href='/'>{config.translations.navigation.home}</a>
              <a href='/'>{config.translations.navigation.why_us}</a>
              <a href='/'>{config.translations.navigation.showcase}</a>
              <a href='/'>{config.translations.navigation.business_types}</a>
              <a href='/'>{config.translations.navigation.customers}</a>
              <a href='/'>{config.translations.navigation.pricing}</a>
            </nav>
            <div className='log-in'>
              <div className='login-btn'>{config.translations.hero.log_in}</div>
              <div className='sign-in-btn'>{config.translations.hero.sign_up}</div>
            </div>
          </div>
          <div className='header-content'>
            <div className='header-content-wrap'>
              <div className='header-content-wrap-text'>
                <h1>{config.translations.hero.main_title}</h1>
                <div className='header-desc'>
                  <p>{config.translations.hero.description}</p>
                </div>
                <button>
                  <p>{config.translations.hero.join_us}</p>
                </button>
              </div>
            </div>
            <div className='wrap-calendar'>
              <img src={config.urls.media + 'calendar.svg'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
