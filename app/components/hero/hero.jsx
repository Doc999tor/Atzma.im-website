
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
    const bgrBubles = {
      backgroundImage: `url('${config.urls.media}bubbles_top.svg')`
    }
    return (
      <div id='hero'>
        <div className='top' style={bgrImg}>
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
          <div className='header-content' style={bgrBubles}>
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
            <div>
              <img src={config.urls.media + 'calendar.svg'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
