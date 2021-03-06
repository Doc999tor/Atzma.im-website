import React, { Component } from 'react'
import './style.styl'
import { postService, postValidateService } from 'project-services/send_mail'
import { getCurrentFormatTime } from 'project-services/helpers'
import SendModal from '../send_modal/index.jsx'

export default class ContactTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      statusOutsideValidation: false,
      incorrectNumber: false,
      clientData: '',
      clientText: '',
      validateText: true,
      send: false,
      sending: false
    }
    this.clientData = React.createRef()
    this.clientText = React.createRef()
    this.clientTitle = React.createRef()
    this.clientTitleText = React.createRef()
  }

  handleClientData = e => {
    const clientData = e.target.value
    this.setState({ clientData, incorrectNumber: false })
  }

  handleBlurPhone = () => {
    const value = this.state.clientData
    if (value) {
      const url = config.urls.validate_api
      const body = `phone=${value}`
      this.setState({
        statusOutsideValidation: true
      })
      return postValidateService(body, url)
        .then(({ status }) => {
          if (status === 200) {
            this.setState({
              incorrectNumber: false
            })
            return true
          }
          if (status === 422) {
            this.setState({
              incorrectNumber: true,
              send: false
            })
          }
        })
        .catch(error => console.log({ error }))
        .finally(() => this.setState({
          statusOutsideValidation: false
        }))
    }
  }

  handleClientText = e => {
    const clientText = e.target.value
    this.setState({ clientText })
  }

  handleValidText = () => {
    const focusClass = this.clientText.current
    const focusClassTitle = this.clientTitleText.current
    focusClass.classList.remove('focus')
    focusClassTitle.classList.remove('focus-title')
    if (!this.state.clientText) {
      this.setState({ validateText: false })
    } else this.setState({ validateText: true })
  }

  handleValidPhone = () => {
    const focusClass = this.clientData.current
    const focusClassTitle = this.clientTitle.current
    focusClass.classList.remove('focus')
    focusClassTitle.classList.remove('focus-title')
    if (this.state.clientData?.trim() !== '' && !this.state.incorrectNumber && !this.state.statusOutsideValidation) {
      this.setState({ incorrectNumber: false })
    } else {
      this.setState({ incorrectNumber: true })
    }
  }

  submit = e => {
    e.preventDefault()
    this.handleValidText()
    this.handleValidPhone()
    this.setState({ focus: false })
    const { clientData, clientText, validateText, incorrectNumber, statusOutsideValidation } = this.state
    if (clientData?.trim() !== '' && !incorrectNumber && clientText && validateText && !statusOutsideValidation) {
      this.setState({ send: true, sending: true }, () => {
        this.handleBlurPhone().then(res => {
          if (res) {
            setTimeout(() => {
              const body = `contact_detail=${clientData.trim()}&message=${clientText.trim()}&added=${getCurrentFormatTime()}`
              postService(config.urls.send_mail, body).then(r => {
                if (r.status === 201) {
                  this.setState({
                    sending: false
                  }, () => {
                    setTimeout(() => {
                      window.history.back()
                    }, 2000)
                  })
                }
              })
            }, 2000)
          }
        })
      })
    }
  }

  focusInput = () => {
    this.setState({ focus: true })
    const focusClass = this.clientData.current
    const focusClassTitle = this.clientTitle.current
    focusClass.classList.add('focus')
    focusClassTitle.classList.add('focus-title')
  }

  focusTextArea = () => {
    this.setState({ focus: true })
    const focusClass = this.clientText.current
    const focusClassTitle = this.clientTitleText.current
    focusClass.classList.add('focus')
    focusClassTitle.classList.add('focus-title')
  }

  render () {
    const { send, sending, incorrectNumber, validateText } = this.state
    return (
      <div id='contact_title'>
        {send
          ? <SendModal sending={sending} />
          : <>
            <div className='contact-title'>
              <h2>{config.translations.contact_us?.desktop?.main_title}</h2>
              {!this.state.validateText && !this.state.focus ? <p className='falseTitle'>{config.translations.contact_us.desktop.warning_empty_fields}</p>
                : <p className={incorrectNumber ? 'falseTitle' : 'subtitle'}>{!incorrectNumber ? config.translations.contact_us.desktop.subtitle : config.translations.contact_us.desktop.warning_not_valid_contact}</p>}
            </div>
            <div className='contact-details'>
              <p className={incorrectNumber ? 'falseValidateText' : ''} ref={this.clientTitle}>{config.translations.contact_us.contact_input_label}</p>
              <input onFocus={this.focusInput} ref={this.clientData} type='tel' value={this.state.clientData} onChange={this.handleClientData} onBlur={this.handleValidPhone} placeholder={config.translations.contact_us.placeholder_contact} className={incorrectNumber ? 'falseValidate' : ''} />
            </div>
            <div className='client-message'>
              <p className={!this.state.validateText ? 'falseValidateText' : ''} ref={this.clientTitleText}>{config.translations.contact_us.message_input_label}</p>
              <textarea onFocus={this.focusTextArea} ref={this.clientText} className={!this.state.validateText ? 'falseValidate' : ''} type='text' placeholder={config.translations.contact_us.placeholder_message} value={this.state.clientText} onBlur={this.handleValidText} onChange={this.handleClientText} />
            </div>
            <div className='send-msg-btn'>
              <div className={'btn' + (incorrectNumber || !validateText ? ' inactive' : '')} onClick={this.submit}>
                <div className='icon-wrap'>
                  <svg>
                    <use xlinkHref={config.urls.media + 'ic_send_btn.svg#ic_send'} />
                  </svg>
                </div>
                {config.translations.contact_us.desktop.send_mail_btn_label}
              </div>
            </div>
          </>}
      </div>
    )
  }
}
