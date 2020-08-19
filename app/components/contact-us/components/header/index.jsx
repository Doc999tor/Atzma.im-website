import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../../logo/logo.jsx'
import DropDownMenu from './dropdown_menu/index.jsx'
import './style.styl'

export default ({ links }) => {
  const [open, setIsOpen] = useState(false)
  const openMenu = () => {
    document.querySelector('html').classList.add('no-scroll')
    setIsOpen(true)
  }
  const closeMenu = () => {
    document.querySelector('html').classList.remove('no-scroll')
    setIsOpen(false)
  }
  const stopClick = e => e.stopPropagation()
  return (
    <div id='header'>
      <header className='contact_head'>
        <Logo />
        <div className='navigation_container'>
          <button type='button' className='menu_btn' onClick={openMenu}>
            <img src={config.urls.media + 'ic_menu.svg'} alt='menu' />
          </button>
          <div className='menu_img-wrap'>
            <nav className='top-nav'>
              {
                Object.keys(config.navigation).map(item => {
                  if (item === 'hero' || item === 'feedback') return false
                  if (item === 'pricing') {
                    return <Link to={config.baseUrl + '/pricing'}>
                      {config.translations.navigation[item].name}
                    </Link>
                  }
                  return (<a key={item} href={`${config.baseUrl}${config.navigation[item].link}`}>
                    {config.translations.navigation[item]?.name}
                  </a>)
                }
                )
              }
            </nav>
            <div className='log-in'>
              <a className='sign-in-btn active-btn' href={config.urls.signup}><span>{config.translations.hero.sign_up}</span></a>
              <a className='login-btn' href={config.urls.login}>{config.translations.hero.log_in}</a>
              <div className='lang-block'>
                <div className='lang_dropdown'>
                  <svg>
                    <use xlinkHref={config.urls.media + 'ic_language.svg#ic_language'} />
                  </svg>
                  <div className='lang-text'>
                    {Object.keys(config.translations.languages).find(i => i === lang)}
                  </div>
                  <DropDownMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && <div className='menu-container' onClick={closeMenu}>
          <nav className='mobile-nav'>
            <ul>
              {
                Object.keys(config.navigation).map(item => {
                  if (item === 'hero' || item === 'feedback') return false
                  if (item === 'pricing') {
                    return <li><Link to={config.baseUrl + '/pricing'}>
                      {config.translations.navigation[item].name}
                    </Link></li>
                  }
                  return (<li><a key={item} href={`${config.baseUrl}${config.navigation[item].link}`}>
                    {config.translations.navigation[item]?.name}
                  </a></li>)
                }
                )
              }
                <li><a className='menu-sign-in' href={config.urls.signup}><span>{config.translations.hero.sign_up}</span></a></li>
                <li><a className='menu-login-btn' href={config.urls.login}>{config.translations.hero.log_in}</a></li>
            </ul>
          </nav>
        </div>}
      </header>
    </div>
  )
}
