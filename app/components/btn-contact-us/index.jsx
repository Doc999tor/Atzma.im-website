import React from 'react'
import './style.styl'

export default () => {
  return (
    <div id='contact_us'>
      <div className='btn-contact'>
        <a className='btn-contact-wrap' href={config.urls.contact_us}>
          <div className='title-wrap'>
            <img src={config.urls.media + 'ic_mail.svg'} alt='email' />
            <span className='title-btn-contact'>{config.translations.button_contact_us.contact_us}</span>
          </div>
          <p className='subtitle-btn-contact'>{config.translations.button_contact_us.questions}</p>
        </a>
      </div>
    </div>
  )
}
