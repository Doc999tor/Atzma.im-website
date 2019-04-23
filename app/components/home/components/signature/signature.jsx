import {signatureDeleteService, clientReplaceService} from 'project-services'
import SignatureModal from '../signature-modal/signature-modal.jsx'
import {Switch} from 'project-components'
import './signature.styl'

export default class Signature extends React.Component {
  state = {
    isEditSignature: false,
    signatureUrl: '',
    isAds: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  delete = () =>
    signatureDeleteService().then(r => {
      if (r.status === 204) {
        if (config.data.permit_ads) this.handleAds()
        delete config.data.signature
        this.forceUpdate()
      }
    })
  handleAds = () => {
    if (config.data.signature) {
      const body = `${config.translations.permit_ads}=${!config.data.permit_ads}`
      clientReplaceService(body).then(r => {
        if (r.status === 204) {
          config.data.permit_ads = !config.data.permit_ads
          this.forceUpdate()
        }
      })
    } else this.handleEditSignature(true)
  }
  handleEditSignature = isAds => {
    this.setState({isEditSignature: !this.state.isEditSignature, isAds: false})
    if (isAds === true) this.setState({isAds: true})
  }
  render () {
    return (
      <div id='signature'>
        <SignatureModal isEditSignature={this.state.isEditSignature} handleEditSignature={this.handleEditSignature}
          isAds={this.state.isAds} handleAds={this.handleAds} />
        <div className='checkbox-wrap' onClick={this.handleAds}>
          <div className='text'><h1 className='text-h1'>{config.data.permit_ads ? config.translations.permitted : config.translations.not_permitted}</h1></div>
          {this.props.rights.signature.ads &&
            <div className='switch'><Switch on={config.data.permit_ads} className={config.isRTL ? 'switchleft' : 'switchright'} /></div>}
        </div>
        <div className={config.data.signature}>
          {/* <div className={'autograph ' + (config.isRTL ? 'right' : 'left')}><img src={config.data.signature} /></div>
          <div className='label'>
            <h1>{config.translations.signature_added}</h1>
            {this.props.rights.signature.remove &&
              <button onClick={this.delete}>{config.translations.btn_delete}</button>}
            {this.props.rights.signature.change &&
              <button onClick={this.handleEditSignature}>{config.translations.btn_replace}</button>}
          </div> */}
        </div>
        <div className={config.data.signature ? 'hidden' : 'add-signature-wrap'} onClick={this.handleEditSignature}>
          <div className='text-wrap'><h1>{config.translations.add_signature}</h1></div>
          <div className='img-wrap'><img src={config.urls.media + 'pencil.svg'} /></div>
        </div>
      </div>
    )
  }
}
