import React, { useState } from 'react'
import { getCurrentFormatTime } from 'project-services/helpers'
import WarningLable from '../warning_label/index.jsx'
import validatePhone from 'project-components/validate-phone'
import { postService } from 'project-services/send_mail'
import './lead_content.styl'
// const { useState } = React

export default ({ phone, nameLable, contactLable, onSetSendingStatus, onSetSendedtatus, onOpeningPopup, btnLabel, openedPopup, mainTitle, subtitle }) => {
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
        postService(config.urls.api_leads + location.search, body).then(r => {
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
      <h2 className='lead_title'>{mainTitle}</h2>
      <p className='lead_subtitle'>{subtitle}</p>
      <form onSubmit={handleSubmit}>
        <div className='lead_inputs'>
          <div className='name_input_wrap'>
            <input
              className={!nameValid && openedPopup ? 'warning_name' : 'normal_input'}
              type='text'
              value={nameValue}
              onChange={handleSetName}
              aria-label={nameLable}
              placeholder={nameLable}
            />
            {!nameValid && openedPopup && <WarningLable text={config.translations.leads.empty_warning_label} />}
          </div>
          <div className='contact_input_wrap'>
            <input
              className={!contactValid && openedPopup ? 'warning_contact' : 'normal_input'}
              type={phone ? 'tel' : 'text'}
              value={contactValue}
              onChange={handleSetContact}
              aria-label={contactLable}
              placeholder={contactLable}
            />
            {!contactValid && openedPopup && <WarningLable text={contactValue ? config.translations.leads.not_valid_field_label : config.translations.leads.empty_warning_label} />}
          </div>
        </div>
        <button className={'submit_btn' + ((!contactValid || !nameValid) && openedPopup ? ' inactive' : '')} type='submit'>
          <span className='icon-send'>
            <svg xmlns='http://www.w3.org/2000/svg' width='19.178' height='19.007' viewBox='0 0 19.178 19.007'>
              <g id='prefix__ic_send' transform='translate(.579 .507)'>
                <path id='prefix__ic_send-2' d='M17.811 14.353a1.911 1.911 0 0 0-.875-.9L2.708 6.391a1.865 1.865 0 0 0-2.519.9 1.981 1.981 0 0 0-.054 1.56L2.609 15.2.135 21.541a1.956 1.956 0 0 0 1.059 2.519A1.831 1.831 0 0 0 2.708 24l14.228-7.066a1.958 1.958 0 0 0 .875-2.581zM2.16 22.84a.622.622 0 0 1-.84-.3.66.66 0 0 1-.02-.52l2.409-6.179h12.55zm1.551-8.289L1.3 8.372a.64.64 0 0 1 .155-.709.6.6 0 0 1 .7-.109l14.1 7z' data-name='ic_send' transform='translate(0 -6.197)'/>
              </g>
            </svg>
          </span>
          <span className='btn_label'>{btnLabel}</span>
        </button>
      </form>
    </section>
  )
}
