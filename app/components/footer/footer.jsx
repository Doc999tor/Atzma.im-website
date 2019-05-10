import './footer.styl'
export default class Footer extends React.Component {
  render () {
    let socialLinks = config.urls.social_networks
    return (
      <div id='footer'>
        <div className='top-block'>
          <div className='logo'>
            <img src={config.urls.media + 'ic_logo.svg'} />
            <div className='logo-text'>
              <p>{config.translations.hero.main_logo}</p>
            </div>
          </div>
          {/* <nav>
            <a href='/'>{config.translations.navigation.home}</a>
            <a href='/'>{config.translations.navigation.features}</a>
            <a href='/'>{config.translations.navigation.about}</a>
            <a href='/'>{config.translations.navigation.support}</a>
            <a href='/'>{config.translations.navigation.contact}</a>
          </nav> */}
          <nav>
            {socialLinks.map((i, k) => (
              <a key={k} href=''><img src={config.urls.media + i.icon} aria-label={i.alt} /></a>
            ))}
            {/* <a aria-label='Twitter'><img src={config.urls.media + 'ic_twitter.svg'} /></a>
            <a aria-label='Facebook'><img src={config.urls.media + 'ic_facebook.svg'} /></a>
            <a aria-label='Instagram'><img src={config.urls.media + 'ic_instagram.svg'} /></a> */}
          </nav>
        </div>
        <div className='bot-block'>
          <div className='footer-info'>
            <div className='sub-block'>{config.translations.navigation.footer_info}</div>
          </div>
        </div>
      </div>
    )
  }
}
