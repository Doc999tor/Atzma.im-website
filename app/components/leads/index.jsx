import LeadContent from './components/leads_content/index.jsx'
import SendModal from '../contact-us/components/send_modal/index.jsx'
import './leads.styl'
const { useState } = React

export default () => {
  const [openedPopup, setOpenedPopupValue] = useState(false)
  const [sendingStatus, setSendingStatus] = useState(false)
  const [sendedStatus, setSendedtatus] = useState(true)
  const handleSetSendingStatus = bool => setSendingStatus(bool)
  const handleSetSendedtatus = bool => setSendedtatus(bool)
  const handleOpeningPopup = () => setOpenedPopupValue(true)
  const handleClosingPopup = () => setOpenedPopupValue(false)
  return (
    <div id='leads'>
      <img className='wave_left' src={config.urls.media + 'wave_left.svg'} />
      {sendingStatus
        ? <SendModal sending={sendedStatus} />
        : <LeadContent btnLabel={config.translations.lead.btn_label} subtitle={config.translations.lead.subtitle} mainTitle={config.translations.lead.main_title} onOpeningPopup={handleOpeningPopup} openedPopup={openedPopup} onSetSendingStatus={handleSetSendingStatus} onSetSendedtatus={handleSetSendedtatus} />}
      <img className='wave_right' src={config.urls.media + 'wave_right.svg'} />
      {openedPopup && <div className='required_fields_popup' onClick={handleClosingPopup} />}
    </div>
  )
}
