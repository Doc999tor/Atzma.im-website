import './style.styl'
import { default as validatePhone } from 'project-components/validate-phone'
import { postService } from 'project-services/send_mail'
import { getCurrentFormatTime } from 'project-services/helpers'
import SendModal from '../send_modal/index.jsx'

export default class ContactTitle extends React.Component {
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
                  this.handleCloseModal()
                  window.location = config.baseUrl + '/'
                }, 700)
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
          : <React.Fragment>
              <div className='contact-title'>
                <h1>{config.translations.contact_us.main_title}</h1>
                {!this.state.validate && !this.state.validateText && !this.state.focus ? <h2 className='falseTitle'>{config.translations.contact_us.enter_all_fields}</h2>
                  : <h2 className={!this.state.validate && !this.state.focus ? 'falseTitle' : ''}>{this.state.validate || this.state.focus ? config.translations.contact_us.suggestions : config.translations.contact_us.enter_vadil_value}</h2>
                }
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
                <a className='btn' onClick={this.submit}>
                  <div className='icon-wrap'>
                    <svg xmlns='http://www.w3.org/2000/svg ' width='25.743' height='25.51' viewBox="0 0 25.743 25.51" className='svg-fill'>
                      <g id="ic_send" transform="translate(-867.143 -2186.24)">
                        <path id="ic_send-2" d="M23.748 17.071a2.548 2.548 0 0 0-1.167-1.2L3.611 6.455a2.486 2.486 0 0 0-3.359 1.2A2.641 2.641 0 0 0 .18 9.736l3.3 8.46-3.3 8.46a2.608 2.608 0 0 0 1.412 3.358 2.441 2.441 0 0 0 2.018-.075l18.971-9.421a2.61 2.61 0 0 0 1.167-3.447zM2.881 28.388a.829.829 0 0 1-1.12-.4.88.88 0 0 1-.024-.695l3.212-8.239h16.729zm2.068-11.052L1.737 9.1a.854.854 0 0 1 .207-.946.8.8 0 0 1 .936-.145l18.8 9.33z" class="cls-1" data-name="ic_send" transform="translate(868.001 2180.803)" />
                      </g>
                    </svg>
                  </div>
                  {config.translations.contact_us.send_btn}</a>
              </div>
          </React.Fragment>
        }
      </div>
    )
  }
}
