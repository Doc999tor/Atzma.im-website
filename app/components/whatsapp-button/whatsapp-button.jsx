import React from 'react'

import './whatsapp-button.styl'

const WSbutton = ({ showButton }) => {
  return (
    <a href={config.urls.wa_api.replace('{phone}', config.modules.contact_us.phone_number.slice(1))} target='_blank' id='whatsapp-button' className={(config.isRTL ? 'position_rtl' : 'position_ltr') + (showButton ? ' show_ws_button' : '')}>
      <img src={`${config.urls.media}ic_whatsapp_btn.svg`} />
    </a>
  )
}

export default WSbutton
