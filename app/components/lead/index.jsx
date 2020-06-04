import LeadContent from './components/lead_content/index.jsx'
import SendModal from '../contact-us/components/send_modal/index.jsx'
import './lead.styl'
const { useState } = React

export default () => {
  const [sendingStatus, setSendingStatus] = useState(false)
  const [sendedStatus, setSendedtatus] = useState(true)
  const handleSetSendingStatus = bool => setSendingStatus(bool)
  const handleSetSendedtatus = bool => setSendedtatus(bool)
  return (
    <div id='lead'>
      <img className='wave_left' src={config.urls.media + 'wave_left.svg'} />
      {sendingStatus
        ? <SendModal sending={sendedStatus} />
        : <LeadContent onSetSendingStatus={handleSetSendingStatus} onSetSendedtatus={handleSetSendedtatus} />}
      <img className='wave_right' src={config.urls.media + 'wave_right.svg'} />
    </div>
  )
}
