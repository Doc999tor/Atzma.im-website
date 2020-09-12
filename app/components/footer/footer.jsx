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
          <ul>
            {
              config.modules.footer.data.map(({icon, name, link}) => {
                return (
                  <li key={name}>
                    <a href={link}>
                      {icon && <img className='nav_img' src={config.urls.media + icon} alt={icon} />}
                      <span>{config.translations.menu_footer[name]}</span>
                    </a>
                    <div className='footer_line' />
                  </li>
                )
              })
            }
          </ul>
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
