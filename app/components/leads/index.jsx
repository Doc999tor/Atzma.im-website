import React, { useState } from 'react'
import LeadContent from './components/leads_content/index.jsx'
import SendModal from '../contact-us/components/send_modal/index.jsx'
import './leads.styl'

export default () => {
  const [openedPopup, setOpenedPopupValue] = useState(false)
  const [sendingStatus, setSendingStatus] = useState(false)
  const [sendedStatus, setSendedtatus] = useState(true)
  const handleSetSendingStatus = bool => setSendingStatus(bool)
  const handleSetSendedtatus = bool => setSendedtatus(bool)
  const handleOpeningPopup = () => setOpenedPopupValue(true)
  return (
    <div id='leads'>
      <img className='wave_left' src={config.urls.media + 'wave_left.svg'} alt='' role='presentation' />
      {sendingStatus
        ? <SendModal sending={sendedStatus} />
        : <LeadContent
          contactLable={config.translations.leads.placeholder_contact}
          nameLable={config.translations.leads.placeholder_name}
          mainTitle={config.translations.leads.main_title}
          btnLabel={config.translations.leads.btn_label}
          subtitle={config.translations.leads.subtitle}
          onSetSendingStatus={handleSetSendingStatus}
          onSetSendedtatus={handleSetSendedtatus}
          onOpeningPopup={handleOpeningPopup}
          openedPopup={openedPopup}
        />
      }
      <img className='wave_right' src={config.urls.media + 'wave_right.svg'} alt='' role='presentation' />
    </div>
  )
}
