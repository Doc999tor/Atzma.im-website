import React from 'react'
import BtnTryFree from '../btn-try-free/index.jsx'
import LeadContent from '../leads/components/leads_content/index.jsx'
import SendModal from '../contact-us/components/send_modal/index.jsx'
import './no_credit.styl'
const { useState } = React

export default () => {
  const wave1 = config.urls.media + 'wave_1.svg'
  const wave2 = config.urls.media + 'wave_2.svg'
  const wave3 = config.urls.media + 'wave_3.svg'
  const [openedPopup, setOpenedPopupValue] = useState(false)
  const [sendingStatus, setSendingStatus] = useState(false)
  const [sendedStatus, setSendedtatus] = useState(true)
  const handleSetSendingStatus = bool => setSendingStatus(bool)
  const handleSetSendedtatus = bool => setSendedtatus(bool)
  const handleOpeningPopup = () => setOpenedPopupValue(true)
  const handleClosingPopup = () => setOpenedPopupValue(false)
  return (
    <div id='no_credit'>
      <div className={'glow_1' + (config.isRTL ? ' rtr_glow_1' : ' ltr_glow_1')} />
      <div className={'glow_2' + (config.isRTL ? ' rtr_glow_2' : ' ltr_glow_2')} />
      <div className={'glow_3' + (config.isRTL ? ' rtr_glow_3' : ' ltr_glow_3')} />
      <div className={'glow_4' + (config.isRTL ? ' rtr_glow_4' : ' ltr_glow_4')} />
      <img className={'wave_1' + (config.isRTL ? ' rtr_wave_1' : ' ltr_wave_1')} src={wave1} alt='top wave' />
      <img className={'wave_2' + (config.isRTL ? ' rtr_wave_2' : ' ltr_wave_2')} src={wave2} alt='bottom wave' />
      <img className={'wave_3' + (config.isRTL ? ' rtr_wave_3' : ' ltr_wave_3')} src={wave3} alt='bottom wave' />
      {sendingStatus
        ? <SendModal sending={sendedStatus} />
        : <LeadContent
          contactLable={config.translations.no_credits.placeholder_contact}
          nameLable={config.translations.no_credits.placeholder_name}
          btnLabel={config.translations.no_credits.button_label}
          mainTitle={config.translations.no_credits.main_title}
          subtitle={config.translations.no_credits.subtitle}
          onSetSendingStatus={handleSetSendingStatus}
          onSetSendedtatus={handleSetSendedtatus}
          onOpeningPopup={handleOpeningPopup}
          openedPopup={openedPopup}
          phone
        />
      }
      <div className={'img-compound' + (config.isRTL ? ' compound-dir-rtl' : ' compound-dir-ltr')}>
        <picture>
          <source srcSet={`${config.urls.media}${config.isRTL ? 'pic_phone_rtl.webp' : 'pic_phone.webp'}`} className='phone-frame' alt='pic_phone' type='image/webp' loading='lazy' />
          <img className='phone-frame' src={`${config.urls.media}${config.isRTL ? 'pic_phone_rtl.png' : 'pic_phone.png'}`} alt='pic_phone' loading='lazy' />
        </picture>
      </div>
      {openedPopup && <div className='required_fields_popup' onClick={handleClosingPopup} />}
    </div>
  )
}
