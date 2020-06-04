import { getCurrentFormatTime } from 'project-services/helpers'
import validatePhone from 'project-components/validate-phone'
import { postService } from 'project-services/send_mail'
import './lead_content.styl'
const { useState } = React

export default ({ onSetSendingStatus, onSetSendedtatus }) => {
  const [nameValue, setName] = useState('')
  const handleSetName = e => {
    const value = e.target.value
    setValidName(true)
    setName(value)
  }
  const [contactValue, setContact] = useState('')
  const handleSetContact = e => {
    const value = e.target.value
    setValidValue(true)
    setContact(value)
  }
  const [contactValid, setValidValue] = useState(true)
  const [nameValid, setValidName] = useState(true)
  const handleValidateContact = () => {
    const regMail = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,6})/
    if (validatePhone(contactValue.trim()) || regMail.test(contactValue.trim())) {
      setValidValue(true)
      return true
    } else {
      setValidValue(false)
      return false
    }
  }
  const handleValidateName = () => nameValue ? setValidName(true) : setValidName(false)
  const handleSubmit = e => {
    e.preventDefault()
    handleValidateContact()
    handleValidateName()
    if (contactValid && nameValid && nameValue && handleValidateContact()) {
      onSetSendingStatus(true)
      setTimeout(() => {
        const body = `name=${nameValue.trim()}&contact_detail=${contactValue.trim()}&added=${getCurrentFormatTime()}`
        postService(config.urls.api_leads, body).then(r => {
          if (r.status === 201) {
            onSetSendedtatus(false)
            setTimeout(() => {
              onSetSendingStatus(false)
            }, 2000)
          }
        })
      }, 1000)
    }
  }
  return (
    <section className='lead_content'>
      <h2 className='lead_title'>{config.translations.lead.main_title}</h2>
      <p className='lead_subtitle'>{config.translations.lead.subtitle}</p>
      <form onSubmit={handleSubmit}>
        <div className='lead_inputs'>
          <input
            className={nameValid ? 'normal_input' : 'warning_name'}
            type='text'
            value={nameValue}
            onChange={handleSetName}
            placeholder={config.translations.lead.placeholder_name}
          />
          <input
            className={contactValid ? 'normal_input' : 'warning_contact'}
            type='text'
            value={contactValue}
            onChange={handleSetContact}
            placeholder={config.translations.lead.placeholder_contact}
          />
        </div>
        <button className={'submit_btn' + (!contactValid || !nameValid ? ' inactive' : '')} type='submit'>
          <span className='icon-send'>
            <svg>
              <use xlinkHref={config.urls.media + 'ic_send_btn.svg#ic_send'} />
            </svg>
          </span>
          <span className='btn_label'>{config.translations.lead.btn_label}</span>
        </button>
      </form>
    </section>
  )
}
