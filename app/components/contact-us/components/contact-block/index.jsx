import React from 'react'
import './style.styl'
import Messenger from '../messengers/index.jsx'
export default () => {
  return (
    <div id='contact-block'>
      <div className='communicate-sup-block'>
        <p>{config.translations.contact_us.desktop.choose_messenger}</p>
        <div className='messengers'>
          {config.modules.contact_us.data.map(item => <Messenger messenger={item} />) }
        </div>
        <div className='contacts-block'>
          <div>
            <span className='label'>{config.translations.contact_us.desktop.contact_info_email}</span>
            <a href={`mailto:${config.modules.contact_us.email}`}>{config.modules.contact_us.email}</a>
          </div>
          <div>
            <span className='label'>{config.translations.contact_us.desktop.contact_info_phone}</span>
            <a href={`tel:${config.modules.contact_us.phone_number}`}>{config.modules.contact_us.phone_number}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
