import {clientReplaceService} from 'project-services'
import './agreement.styl'

export default class Agreement extends React.Component {
  state = {
    isChecked: false
  }

  handleAds = () => {
    this.setState({isChecked: !this.state.isChecked}, () => this.props.getArgeement(this.state.isChecked))
    this.forceUpdate()
  }

  render () {
    return (
      <div id='agreement'>
        <div className='agreement-wrap'>
          <div className='agreement'>
            <span className='label'>{config.translations.agreement}:</span>
          </div>
          <div className={'check ' + (config.isRTL ? 'right' : 'left')} onClick={this.props.editProfile && this.handleAds}>
            <img src={config.urls.media + (this.state.isChecked ? 'checkbox-unmarked.svg' : 'checkbox-marked.svg')} />
            <img className={`checking ${this.state.isChecked ? 'show' : ''}`} src={config.urls.media + 'checkbox.svg'} />
          </div>
        </div>
      </div>
    )
  }
}
