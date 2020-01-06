import './style.styl'
import { default as validatePhone } from 'project-components/validate-phone'
import { postService } from 'project-services/send_mail'
import { getCurrentFormatTime } from 'project-services/helpers'
import SendModal from '../send_modal/index.jsx'

export default class ContactTitle extends React.Component {
  constructor (props) {
    super(props)
    this.clientData = React.createRef()
    this.clientText = React.createRef()
    this.clientTitle = React.createRef()
    this.clientTitleText = React.createRef()
  }

  state = {
    clientData: '',
    clientText: '',
    validate: true,
    validateText: true,
    send: false,
    sending: false
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
    e.preventDefault()
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
                  this.handleCloseModal()
                  window.location = config.baseUrl + '/'
                }, 700)
              })
            }
          })
        }, 2000)
      })
    } else {
      if (clientData) {
        this.setState({ validateText: false })
        this.clientText.current.focus()
      } else this.clientData.current.focus()
    }
  }

  handleCloseModal = () => this.setState({ send: false })

  focusInput = () => {
    const focusClass = this.clientData.current
    const focusClassTitle = this.clientTitle.current
    focusClass.classList.add('focus')
    focusClassTitle.classList.add('focus-title')
  }

  focusTextArea = () => {
    const focusClass = this.clientText.current
    const focusClassTitle = this.clientTitleText.current
    focusClass.classList.add('focus')
    focusClassTitle.classList.add('focus-title')
  }

  render () {
    const { send, sending } = this.state
    return (
      <div id='contact_title'>
        <div className='contact-title'>
          <h1>{config.translations.contact_us.main_title}</h1>
          <h2>{config.translations.contact_us.suggestions}</h2>
        </div>
        <div className='contact-details'>
          <p className={!this.state.validate ? 'falseValidateText' : ''} ref={this.clientTitle} >{config.translations.contact_us.send_form.phone_mail_label}</p>
          <input onFocus={this.focusInput} ref={this.clientData} type='text' value={this.state.clientData} onChange={this.handleClientData} onBlur={this.handleValidation} placeholder={config.translations.contact_us.send_form.placeholder_contact} className={!this.state.validate ? 'falseValidate' : ''} />
        </div>
        <div className='client-message'>
          <p className={!this.state.validateText ? 'falseValidateText' : ''} ref={this.clientTitleText} >{config.translations.contact_us.send_form.message_label}</p>
          <textarea onFocus={this.focusTextArea} ref={this.clientText} className={!this.state.validateText ? 'falseValidate' : ''} type='text' placeholder={config.translations.contact_us.send_form.main_title} value={this.state.clientText} onBlur={this.handleValidText} onChange={this.handleClientText} />
        </div>
        <div className='send-msg-btn'>
          <a className='active-btn' onClick={this.submit}>{config.translations.contact_us.send_btn}</a>
        </div>
        {send && <SendModal sending={sending} />}
      </div>
    )
  }
}
