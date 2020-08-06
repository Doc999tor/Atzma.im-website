import React, { Component } from 'react'
import './style.styl'
import { default as validatePhone } from 'project-components/validate-phone'
import { postService } from 'project-services/send_mail'
import { getCurrentFormatTime } from 'project-services/helpers'
import SendModal from '../send_modal/index.jsx'

export default class ContactTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clientData: '',
      clientText: '',
      validate: true,
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
    this.setState({ clientData })
  }

  handleValidation = () => {
    const focusClass = this.clientData.current
    const focusClassTitle = this.clientTitle.current
    focusClass.classList.remove('focus')
    focusClassTitle.classList.remove('focus-title')
    const validate = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{1,6})/
    if (validatePhone(this.state.clientData.trim()) || validate.test(this.state.clientData.trim())) {
      this.setState({ validate: true })
    } else {
      this.setState({ validate: false })
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

  submit = e => {
    this.handleValidText()
    this.handleValidation()
    e.preventDefault()
    this.setState({ focus: false })
    const { clientData, clientText, validate, validateText } = this.state
    if (clientData && clientText && validate && validateText) {
      this.setState({ send: true, sending: true }, () => {
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
      })
    }
  }

  handleCloseModal = () => this.setState({ send: false })

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
    const { send, sending } = this.state
    return (
      <div id='contact_title'>
        {send
          ? <SendModal sending={sending} />
          : <>
            <div className='contact-title'>
              <h2>{config.translations.contact_us.main_title}</h2>
              {!this.state.validate && !this.state.validateText && !this.state.focus ? <p className='falseTitle'>{config.translations.contact_us.desktop.warning_empty_fields}</p>
                : <p className={!this.state.validate && !this.state.focus ? 'falseTitle' : 'subtitle'}>{this.state.validate || this.state.focus ? config.translations.contact_us.desktop.subtitle : config.translations.contact_us.desktop.warning_not_valid_contact}</p>}
            </div>
            <div className='contact-details'>
              <p className={!this.state.validate ? 'falseValidateText' : ''} ref={this.clientTitle}>{config.translations.contact_us.contact_input_label}</p>
              <input onFocus={this.focusInput} ref={this.clientData} type='text' value={this.state.clientData} onChange={this.handleClientData} onBlur={this.handleValidation} placeholder={config.translations.contact_us.placeholder_contact} className={!this.state.validate ? 'falseValidate' : ''} />
            </div>
            <div className='client-message'>
              <p className={!this.state.validateText ? 'falseValidateText' : ''} ref={this.clientTitleText}>{config.translations.contact_us.message_input_label}</p>
              <textarea onFocus={this.focusTextArea} ref={this.clientText} className={!this.state.validateText ? 'falseValidate' : ''} type='text' placeholder={config.translations.contact_us.placeholder_message} value={this.state.clientText} onBlur={this.handleValidText} onChange={this.handleClientText} />
            </div>
            <div className='send-msg-btn'>
              <a className='btn' onClick={this.submit}>
                <div className='icon-wrap'>
                  <svg>
                    <use xlinkHref={config.urls.media + 'ic_send_btn.svg#ic_send'} />
                  </svg>
                </div>
                {config.translations.contact_us.desktop.send_mail_btn_label}
              </a>
            </div>
          </>}
      </div>
    )
  }
}
