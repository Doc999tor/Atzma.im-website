import React, { useState } from 'react'
import { getCurrentFormatTime } from 'project-services/helpers'
import WarningLable from '../warning_label/index.jsx'
import validatePhone from 'project-components/validate-phone'
import { postService } from 'project-services/send_mail'
import './lead_content.styl'
// const { useState } = React

export default ({ onSetSendingStatus, onSetSendedtatus, onOpeningPopup, openedPopup }) => {
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
    if (!nameValue || !handleValidateContact()) {
      onOpeningPopup()
    }
  }
  return (
    <section className='lead_content'>
      <h2 className='lead_title'>{config.translations.lead.main_title}</h2>
      <p className='lead_subtitle'>{config.translations.lead.subtitle}</p>
      <form onSubmit={handleSubmit}>
        <div className='lead_inputs'>
          <div className='name_input_wrap'>
            <input
              className={!nameValid && openedPopup ? 'warning_name' : 'normal_input'}
              type='text'
              value={nameValue}
              onChange={handleSetName}
              placeholder={config.translations.lead.placeholder_name}
            />
            {!nameValid && openedPopup && <WarningLable text={config.translations.lead.empty_warning_label} />}
          </div>
          <div className='contact_input_wrap'>
            <input
              className={!contactValid && openedPopup ? 'warning_contact' : 'normal_input'}
              type='text'
              value={contactValue}
              onChange={handleSetContact}
              placeholder={config.translations.lead.placeholder_contact}
            />
            {!contactValid && openedPopup && <WarningLable text={contactValue ? config.translations.lead.not_valid_field_label : config.translations.lead.empty_warning_label} />}
          </div>
        </div>
        <button className={'submit_btn' + ((!contactValid || !nameValid) && openedPopup ? ' inactive' : '')} type='submit'>
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
