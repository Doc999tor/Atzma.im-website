
import './footer.styl'

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
    return (
      <div id='footer'>
        <div className='top-block'>
          <div className='logo'>
            <img src={config.urls.media + 'ic_logo.svg'} />
            <div className='logo-text'>
              <p>{config.translations.hero.main_logo}</p>
            </div>
          </div>
          <nav>
            <a href='/'>{config.translations.navigation.home}</a>
            <a href='/'>{config.translations.navigation.features}</a>
            <a href='/'>{config.translations.navigation.about}</a>
            <a href='/'>{config.translations.navigation.support}</a>
            <a href='/'>{config.translations.navigation.contact}</a>
          </nav>
          <div className='social-links'>
            <div><img src={config.urls.media + 'ic_twitter.svg'} /></div>
            <div><img src={config.urls.media + 'ic_facebook.svg'} /></div>
            <div><img src={config.urls.media + 'ic_instagram.svg'} /></div>
          </div>
        </div>
        <hr />
        <div className='bot-block'>
          <div className='footer-info'>
            <div className='sub-block'>{config.translations.navigation.footer_info}</div>
          </div>
        </div>
      </div>
    )
  }
}
