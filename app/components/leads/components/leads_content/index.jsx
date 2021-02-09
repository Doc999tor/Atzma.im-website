import React, { useState } from 'react'
import { getCurrentFormatTime } from 'project-services/helpers'
import WarningLable from '../warning_label/index.jsx'
import { postService, postValidateService } from 'project-services/send_mail'
import './lead_content.styl'

export default ({ nameLable, contactLable, onSetSendingStatus, onSetSendedtatus, onOpeningPopup, btnLabel, openedPopup, mainTitle, subtitle }) => {
  const [nameValue, setName] = useState('')
  const handleSetName = e => {
    const value = e.target.value
    setValidName(true)
    setName(value)
  }
  const [contactValue, setContact] = useState('')
  const handleSetContact = e => {
    const value = e.target.value
    setContact(value)
  }
  const [statusOutsideValidation, setStatusOutsideValidation] = useState(false)
  const [incorrectNumber, setIncorrectNumber] = useState(false)

  const handleBlurPhone = ({ target }) => {
    const { value } = target
    if (value) {
      const url = config.urls.validate_api
      const body = `phone=${value}`
      setStatusOutsideValidation(true)
      postValidateService(body, url)
        .then(({ status }) => {
          if (status === 200) {
            setIncorrectNumber(false)
          }
          if (status === 422) {
            setIncorrectNumber(true)
          }
        })
        .catch(error => console.log({ error }))
        .finally(() => {
          setStatusOutsideValidation(false)
        })
    }
  }
  const [nameValid, setValidName] = useState(true)
  const handleValidateContact = () => {
    if (contactValue?.trim() !== '' && !statusOutsideValidation && !incorrectNumber) {
      return true
    }
    return false
  }
  const handleValidateName = () => nameValue ? setValidName(true) : setValidName(false)
  const handleSubmit = e => {
    e.preventDefault()
    handleValidateName()
    if (nameValid && nameValue && handleValidateContact() && !statusOutsideValidation) {
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
    if ((!nameValue || !handleValidateContact()) && !statusOutsideValidation) {
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
              className={((contactValue?.trim() && incorrectNumber) || (contactValue?.trim() === '' && !incorrectNumber && openedPopup)) ? 'warning_contact' : 'normal_input'}
              type='tel'
              value={contactValue}
              onBlur={handleBlurPhone}
              onChange={handleSetContact}
              aria-label={contactLable}
              placeholder={contactLable}
            />
            {((contactValue?.trim() && incorrectNumber) || (contactValue?.trim() === '' && !incorrectNumber && openedPopup)) && <WarningLable text={contactValue ? config.translations.leads.not_valid_field_label : config.translations.leads.empty_warning_label} />}
          </div>
        </div>
        <button className={'submit_btn' + ((incorrectNumber || !nameValid) && openedPopup ? ' inactive' : '')} type='submit'>
          <span className='icon-send'>
            <svg>
              <use xlinkHref={config.urls.media + 'ic_send_btn.svg#ic_send'} />
            </svg>
          </span>
          <span className='btn_label'>{btnLabel}</span>
        </button>
      </form>
    </section>
  )
}
