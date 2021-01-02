import React from 'react'
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
                {item.icon && <img className='nav_img' src={item.icon} alt={item.icon} />}
                <span>{config.translations.menu_footer[item.name]}</span>
              </a>)
            })
          }
        </nav>
        <nav className='soc-links'>
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" title={config.translations.footer.social_networks[link.name]} >
              <svg>
                <use xlinkHref={config.urls.media_social_networks + `${link.icon}#${link.icon.slice(0, -4)}`} />
              </svg>
            </a>
          ))}
        </nav>
      </div>
      <div className='bot-block'>
        <div className='footer-info'>
          <p className='sub-block'>{config.translations.footer.copy_right.replace('{year}', new Date().getFullYear())}</p>
        </div>
      </div>
    </div>
  )
}
