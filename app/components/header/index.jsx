import React, { useState } from 'react'
import { Logo } from '../logo/logo.jsx'
import DropDownMenu from './dropdown_menu/index.jsx'
import './style.styl'

export default () => {
  const [open, setIsOpen] = useState(false)
  const [closeAnimation, setCloseAnimationValue] = useState(false)
  const [closeLangAnimation, setCloseLangAnimationValue] = useState(false)
  const [openLang, setopenLangValue] = useState(false)
  const openMenu = () => {
    document.querySelector('html').classList.add('no-scroll')
    setIsOpen(true)
  }
  const closeMenu = () => {
    document.querySelector('html').classList.remove('no-scroll')
    setCloseAnimationValue(true)
    setopenLangValue(false)
    setTimeout(() => {
      setCloseAnimationValue(false)
      setIsOpen(false)
    }, 500)
  }
  const preventClick = e => e.stopPropagation()
  const changeLang = () => {
    setopenLangValue(true)
    setCloseLangAnimationValue(false)
  }
  const closeLang = () => {
    setCloseLangAnimationValue(true)
    setTimeout(() => {
      setopenLangValue(false)
    }, 500)
  }
  const langClick = () => {
    if (openLang) {
      closeLang()
    } else {
      changeLang()
    }
  }
  return (
    <div id='header'>
      <header className='contact_head'>
        <Logo />
        <div className='navigation_container'>
          <a className='signup_link' href={config.urls.signup}>{config.translations.hero.sign_up}</a>
          <button type='button' className='menu_btn' onClick={openMenu}>
            <img src={config.urls.media + 'ic_menu.svg'} alt='menu' />
          </button>
        </div>
        {open && <div className={'menu-container' + (closeAnimation ? ' bgr_animation' : '')} onClick={closeMenu}>
          <nav className={'mobile-nav' + (closeAnimation ? ' close_animation' : '')}>
            <ul className='nav' onClick={preventClick}>
              <li><a className='menu-contact-us' href={config.urls.contact_us}><span>{config.translations.navigation.contact_us.name}</span></a></li>
              <li><a className='menu-pricing' href={config.urls.pricing}>{config.translations.navigation.pricing.name}</a></li>
              <li><a className='menu-sign-in' href={config.urls.signup}><span>{config.translations.hero.sign_up}</span></a></li>
              <li><a className='menu-login-btn' href={config.urls.login}>{config.translations.hero.log_in}</a></li>
              <li onClick={langClick} className='lang-strip'><p><img className='menu-lang-btn' src={config.urls.media + 'ic_language.svg'} /><span>{ config.translations.languages[lang] }</span></p></li>
              {openLang && <li><DropDownMenu closeLangAnimation={closeLangAnimation} /></li>}
            </ul>
          </nav>
        </div>}
      </header>
    </div>
  )
}
