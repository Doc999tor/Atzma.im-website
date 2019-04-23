import {detailsReplaceService} from 'project-services'
import './details.styl'

export default class Details extends React.Component {
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
      <div className='block'>
        <div className='completion'>
          <span className='label'>{config.translations.request_to_detail}</span>
          <div className='block-content'>
            <div id='details'>
              <div className='data-wrap'>
                {this.props.rights.details.send &&
                !config.data.details_link_active ? <input type="image" src={config.urls.media + 'ic_send.svg'} className={'details-button ' + (config.isRTL ? 'left' : 'right')}
                  disabled={config.data.details_link_active}
                  onClick={this.submit} /> : <div className='data-wrap2'>{config.translations.sent}</div>}
                <img className={config.data.details_link_active ? 'ok' : 'ok hidden'} src={config.urls.media + 'ok.png'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
