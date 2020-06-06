import React, { useState } from 'react'
import LeadContent from './components/lead_content/index.jsx'
import SendModal from '../contact-us/components/send_modal/index.jsx'
import './lead.styl'
// const { useState } = React

export default () => {
  const [openedPopup, setOpenedPopupValue] = useState(false)
  const [sendingStatus, setSendingStatus] = useState(false)
  const [sendedStatus, setSendedtatus] = useState(true)
  const handleSetSendingStatus = bool => setSendingStatus(bool)
  const handleSetSendedtatus = bool => setSendedtatus(bool)
  const handleOpeningPopup = () => setOpenedPopupValue(true)
  const handleClosingPopup = () => setOpenedPopupValue(false)
  return (
    <div id='lead'>
      <img className='wave_left' src={config.urls.media + 'wave_left.svg'} />
      {sendingStatus
        ? <SendModal sending={sendedStatus} />
        : <LeadContent onOpeningPopup={handleOpeningPopup} openedPopup={openedPopup} onSetSendingStatus={handleSetSendingStatus} onSetSendedtatus={handleSetSendedtatus} />}
      <img className='wave_right' src={config.urls.media + 'wave_right.svg'} />
      {openedPopup && <div className='required_fields_popup' onClick={handleClosingPopup} />}
    </div>
  )
}
