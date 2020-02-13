import { Logo } from '../logo/logo.jsx'

import './footer.styl'
export default () => {
  let socialLinks = config.urls.social_networks
  return (
    <div id='footer'>
      <div className='top-block'>
        <Logo />
        <nav className='footer-nav'>
          {
            config.modules.footer.data.map(item => {
              return (<a href={item.link}>
                {config.translations.menu_footer[item.name]}
              </a>)
            })
          }
        </nav>
        <nav className='soc-links'>
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" title={config.translations.footer.social_networks[link.name]} ><img src={config.urls.media_social_networks + link.icon} aria-label={config.translations.footer.social_networks[link.name]} alt={config.translations.footer.social_networks[link.name]} /></a>
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
