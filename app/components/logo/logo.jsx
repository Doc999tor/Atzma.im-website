import React from 'react'
import './logo.styl'
export function Logo () {
  const goHome = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <div className='logo' onClick={goHome}>
      <a href={config.urls.home_page.replace('{lang}', lang)} className='logo-text'><img src={`${config.urls.media_logo}logo.svg`} alt={config.translations.hero.logo_label} /></a>
    </div>)
}
