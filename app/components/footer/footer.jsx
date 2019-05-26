import './footer.styl'
export default class Footer extends React.Component {
  render () {
    let socialLinks = config.urls.social_networks
    return (
      <div id='footer'>
        <div className='top-block'>
          <div className='logo'>
            <img src={config.urls.media + 'ic_logo.svg'} alt={config.translations.hero.main_logo_label} />
            <div className='logo-text'>
              <p>{config.translations.hero.main_logo}</p>
            </div>
          </div>
          <a href={config.urls.old_website} target="_blank">{config.translation.footer.old_website}</a>
          <nav>
            {socialLinks.map((i, k) => (
              <a key={k} href={i.url}><img src={config.urls.media + i.icon} aria-label={config.translations.footer[i.name]} /></a>
            ))}
          </nav>
        </div>
        <div className='bot-block'>
          <div className='footer-info'>
            <div className='sub-block'>{config.translations.footer.copy_right.replace('{year}', new Date().getFullYear())}</div>
          </div>
        </div>
      </div>
    )
  }
}
