import {detailsReplaceService} from 'project-services'
import './sendlink.styl'

export default class Sendlink extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () =>
    detailsReplaceService().then(r => {
      if (r.status === 204) {
        config.data.details_link_active = true
        this.forceUpdate()
      }
    })
  render () {
    return (
      <div id='sendlink'>
        <div className='send-wrap'>
          <span className='label'>{config.translations.request_to_detail}</span>
          <div className='block-content'>
              <div className='data-wrap'>
                {this.props.rights.details.send &&
                !config.data.details_link_active ? <input type='image' src={config.urls.media + 'ic_send.svg'} className={'details-button ' + (config.isRTL ? 'left' : 'right')} style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}}
                    disabled={config.data.details_link_active}
                    onClick={this.submit} /> : <div className='data-wrap-after'>{config.translations.profile_sent_link}</div>}
                <img className={config.data.details_link_active ? 'ok' : 'ok hidden'} src={config.urls.media + 'ok.png'} />
              </div>
          </div>
        </div>
      </div>
    )
  }
}
