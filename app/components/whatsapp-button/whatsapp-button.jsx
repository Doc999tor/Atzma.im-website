import React from 'react'

import './whatsapp-button.styl'

const WSbutton = ({ showButton }) => {
  return (
    <div id='whatsapp-button' className={config.isRTL ? 'position_rtl' : 'position_ltr' + (showButton ? ' show_ws_button' : '')}>
      <img src={`${config.urls.media}ic_whatsapp_btn.svg`} />
    </div>
  )
}

export default WSbutton
