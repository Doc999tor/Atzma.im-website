import {clientReplaceService, addressGetService} from 'project-services'
import {Modal} from 'project-components'
import './address.styl'

export default class Address extends React.Component {
  state = {
    addressEdit: false,
    sendNewAddress: false,
    showAgreeForm: false,
    addressName: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired,
    show: false,
    parent: {}
  }
  submit = () => {
    const body = `${config.urls.address_srt}=${this.changeAddress.value}`
    clientReplaceService(body).then(r => {
      if (r.status === 204) {
        config.data.address = this.changeAddress.value
        this.setState({
          addressName: this.changeAddress.value,
          addressEdit: false
        })
        this.state.parent.setState({visibleMapPopup: false, address: this.state.addressName})
      }
    })
  }
  changeInput = () => {
    if (typeof this.changeAddress !== 'undefined' &&
        this.state.addressName !== '' &&
        this.changeAddress.value !== '' &&
        this.state.addressName !== this.changeAddress.value) {
      this.setState({showAgreeForm: true})
    } else if (typeof this.changeAddress !== 'undefined' && this.changeAddress.value !== '') {
      this.submit()
      this.setState({addressEdit: false})
      this.state.parent.setState({visibleMapPopup: false, address: this.state.addressName})
    } else {
      this.state.parent.setState({visibleMapPopup: false, address: this.state.addressName})
    }
  }
  componentDidMount = () => {
    this.setState({
      parent: this.props.parent,
      addressName: config.data.address
    })
  }
  render () {
    return (
      <div id='address'>
        <Modal show={this.props.show}>
          <div className='address-header'>
            <label className='address-name'>{this.state.addressName}</label>
            <img className={'close-button'} src={config.urls.media + 'ic_close.svg'}
              onClick={() => { this.state.parent.setState({visibleMapPopup: false}) }} />
          </div>
          <div className='address-body'>
            <div className='search-box'>
              <input type='text'
                className='search-input'
                ref={node => { this.searcInput = node }}
              />
              <button><img className='icon'
                src={config.urls.media + 'search.png'}
              /></button>
            </div>
            <img className='map' src={config.urls.main + '/customers-details/clients/' + config.data.id + '/map'} />
            <div className='block-text'>
              {!this.state.addressEdit
                ? <label className='address-name'>{config.data.address ? config.data.address : ''}</label>
                : <input className='input-change-address'
                  ref={node => {
                    this.changeAddress = node
                  }}
                />
              }
              <img onClick={() => this.setState({addressEdit: !this.state.addressEdit})}
                className='icon'
                src={config.urls.media + 'pencil.svg'}
              />
            </div>
          </div>
          <div className='address-footer' >
            <button className='no-btn' onClick={() => { this.state.parent.setState({visibleMapPopup: false}) }} >{config.translations.del_no.toUpperCase()}</button>
            <button className='yes-btn' onClick={() => { this.changeInput() }}>{config.translations.del_yes.toUpperCase()}</button>
          </div>
        </Modal>
        { this.state.showAgreeForm &&
          <Modal show={this.state.showAgreeForm}>
            <div className='body-agree'>
              {config.translations.address_agree}
            </div>
            <div className='footer-agree'>
              <button className='no-btn' onClick={() => { this.setState({showAgreeForm: false}) }} >{config.translations.only_now.toUpperCase()}</button>
              <button className='yes-btn' onClick={() => {
                this.setState({showAgreeForm: false})
                this.submit()
              }}>{config.translations.save.toUpperCase()}</button>
            </div>
          </Modal>
        }
      </div>
    )
  }
}
