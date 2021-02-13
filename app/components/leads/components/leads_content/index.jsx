import React, { useState } from 'react'
import { getCurrentFormatTime } from 'project-services/helpers'
import { postService, postValidateService } from 'project-services/send_mail'
import './lead_content.styl'

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
    setIncorrectNumber(false)
    setContact(value)
  }

  const [nameValid, setValidName] = useState(true)
  const [statusOutsideValidation, setStatusOutsideValidation] = useState(false)
  const [incorrectNumber, setIncorrectNumber] = useState(false)

  const handleBlurPhone = () => {
    const value = contactValue
    if (value) {
      const url = config.urls.validate_api
      const body = `phone=${value}`
      setStatusOutsideValidation(true)
      return postValidateService(body, url)
        .then(({ status }) => {
          if (status === 200) {
            setIncorrectNumber(false)
            return true
          }
          if (status === 422) {
            setIncorrectNumber(true)
            onSetSendingStatus(false)
            return false
          }
        })
        .catch(error => console.log({ error }))
        .finally(() => {
          setStatusOutsideValidation(false)
        })
    }
  }

  const handleValidateContact = () => {
    if (contactValue?.trim() !== '' && !statusOutsideValidation && !incorrectNumber) {
      setIncorrectNumber(false)
      return true
    } else {
      setIncorrectNumber(true)
      return false
    }
  }

  const handleValidateName = () => nameValue ? setValidName(true) : setValidName(false)
  const handleSubmit = e => {
    e.preventDefault()
    handleValidateContact()
    handleValidateName()
    if (nameValid && nameValue && handleValidateContact()) {
      handleBlurPhone().then(res => {
        if (res) {
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
        } else {
          onOpeningPopup()
        }
      })
    }
    if (!nameValue || !handleValidateContact()) {
      onOpeningPopup()
    }
  }

  return (
    <section className='lead_content'>
      <img className='wave_left' src={config.urls.media + 'wave.svg'} alt='' role='presentation' />
      <div className='title-wrap'>
        <h2 className='lead_title'>{mainTitle}</h2>
        <img className='emoji' src={config.urls.media + 'pic_emoji@2x.png'} alt='' />
      </div>
      <p className='lead_subtitle'>{subtitle}</p>
      <div className='form_container'>
        <form onSubmit={handleSubmit}>
          <div className='lead_inputs'>
            <div className={'name_input_wrap' + (!nameValid && openedPopup ? ' warning_input' : '')}>
              <img src={config.urls.media + 'ic_user.svg'} alt='' />
              <input
                className={!nameValid && openedPopup ? 'warning_name' : 'normal_input'}
                type='text'
                value={nameValue}
                onChange={handleSetName}
                aria-label={nameLable}
                placeholder={nameLable}
              />
            </div>
            <div className={'contact_input_wrap' + (incorrectNumber && openedPopup ? ' warning_input' : '')}>
              <img src={config.urls.media + 'ic_phone.svg'} alt='' />
              <input
                className={incorrectNumber && openedPopup ? 'warning_contact' : 'normal_input'}
                type={phone ? 'tel' : 'text'}
                value={contactValue}
                onChange={handleSetContact}
                aria-label={contactLable}
                placeholder={contactLable}
              />
            </div>
          </div>
          <button className={'submit_btn' + ((incorrectNumber || !nameValid) && openedPopup ? ' inactive' : '')} type='submit'>
            <span className='btn_label'>{btnLabel}</span>
          </button>
        </form>
      </div>
      <img className='hand' src={config.urls.media + '3d_hand@2x.png'} alt='' role='presentation' />
    </section>
  )
}
