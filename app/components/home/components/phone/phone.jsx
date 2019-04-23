import {clientReplaceService} from 'project-services'
import './phone.styl'

export default class Phone extends React.Component {
  state = {
    phoneEdit: false,
    phone: this.props.hatePhone,
    error: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentDidMount = () => {
    this.setState({phone: config.data.phone})
  }
  delInfo = () => {
    this.setState({phone: ''}, () => this.props.deletePhone())
    document.getElementById('phone-input').focus()
  }

  render () {
    return this.props.rights.isPhone && (
      <div id='phone'>
        <div className={!this.props.editProfile ? 'data-phone' : 'hidden'}>
          <div className='wrap'>
            <span className='label'>{config.translations.phone}:</span>
            {/* <div className={!this.props.editProfile ? 'phone-labels' : 'hidden'}> */}
            <span className={!this.props.editProfile ? 'phone-labels' : 'hidden'}>{config.data.phone}</span>
            {/* </div> */}
          </div>
          <div className='phone-img'>
            {this.props.rights.phone.send_sms &&
            <div className='img-wrap'><a href={'sms:' + config.data.phone}>
              <img src={config.urls.media + 'send-sms.svg'} /></a></div>}
            {/* <div className='img-wrap'><a href={`/send-sms?client_id=${config.data.id}&referrer=${location.pathname + '?' + location.search}`}>
              <img src={config.urls.media + 'send-sms.svg'} /></a></div>} */}
            {this.props.rights.phone.call &&
            <div className='img-wrap'><a href={'tel:' + config.data.phone}><img src={config.urls.media + 'call.svg'} /></a></div>}
            {/* // <div className='img-wrap'><a href={'tel:'}><img src={config.urls.media + 'call.svg'} /></a></div>} */}
          </div>
        </div>
        {
          (this.props.editProfile && !config.data.phone)
            ? <div onClick={() => this.props.changePhoneEdit()}
              className={!this.props.profilePhoneEdit ? 'add-phone' : 'hidden'}>
              <div className='add-wrap'>
                <span className='label'>{config.translations.phone}:</span>
                <h1>{config.translations.add_phone}</h1>
              </div>
              <div className='add-info'>
                <div className='add-wrap'>
                  <img src={config.urls.media + 'profile_plus.svg'} />
                </div>
              </div>
            </div> : '' }
        {
          this.props.editProfile &&
          <div className={this.props.profilePhoneEdit || config.data.phone ? 'phone-edit' : 'hidden'}>
            <div className='edit'>
              <div className='edit-wrap'>
                <span className='label'>{config.translations.phone}:</span>
                <input className='edit-input'
                  id='phone-input'
                  type='tel'
                  value={this.state.phone}
                  onChange={e => this.setState({phone: e.target.value, error: ''}, () => this.props.getPhone(this.state.phone))}
                  // onBlur={this.setState({phone: this.state.phoneTemp})}
                />
              </div>
              <div className='del-info'>
                <div className='del-wrap' onClick={this.delInfo}>
                  <img src={config.urls.media + 'plus2.svg'} />
                </div>
              </div>
              {this.state.error && <div className='error'>{this.state.error}</div>}
            </div>
            {/* <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div> */}
          </div>}
      </div>
    )
  }
}
