import React from 'react'

import Networks from '../networks/networks'

import './style.styl'

export default () => {
  return (
    <div id='contact_us'>
      <header>
        <div className='title-wrap'>
          <h2 className='contact_us_title'>{config.translations.contact_us.mobile.main_title}</h2>
          <img className='emoji' src={config.urls.media + 'emoji@2x.png'} alt='' />
        </div>
        <p>{config.translations.contact_us.mobile.subtitle}</p>
      </header>
      <ul className='contact_links'>
        {config.modules.contact_us.data.map(({ name, icon, url, color_text }) => {
          const bgColor = {
            color: color_text
          }
          return (
            <li key={name}>
              <a className='messenger' href={url}>
                <span style={bgColor} className='name'>{config.translations.contact_us.data[name].name}</span>
                <span className='icon_wrap'><img className='icon' src={config.urls.media + icon} alt={icon} /></span>
              </a>
            </li>
          )
        })}
        <li>
          <a className='messenger-email' href={config.urls.contact_us}>
            <span className='name'>{config.translations.contact_us.mobile.create_mail_btn_label}</span>
            <span className='email_wrap'><img className='icon' src={config.urls.media + 'messenger_email.svg'} /></span>
          </a>
        </li>
      </ul>
      <Networks />
    </div>
  )
}
