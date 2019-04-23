import {socialPostService, socialDeleteService} from 'project-services'
import {Select} from 'project-components'
import Line from '../line/line.jsx'
import './social-network.styl'

export default class SocialNetwork extends React.Component {
  state = {
    selectedValue: config.translations.social_list[0].value,
    selectedLabel: config.translations.social_list[0].label,
    isEditSocial: false,
    inputValue: '',
    inputName: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  getSocTitle = type => {
    let willReturn = ''
    config.translations.social_list.map(val => {
      if (val.value === type) {
        willReturn = val.label
      }
    })
    return willReturn
  }
  submit = () => {
    if (!Array.isArray(config.data.soc_media)) config.data.soc_media = []
    const body = `type=${this.state.selectedValue}&url=${this.state.inputValue}&name=${this.state.inputName}`
    socialPostService(body).then(r => {
      if (r.status === 201) {
        config.data.soc_media.push({
          type: this.state.selectedValue,
          url: this.state.inputValue,
          name: this.state.inputName ? this.state.inputName : this.state.inputValue
        })
        r.json().then(id => { config.data.soc_media[config.data.soc_media.length - 1].id = id })
        this.setState({ isEditSocial: !this.state.isEditSocial, selectedValue: 'facebook', inputValue: '', inputName: '' })
      }
    })
  }
  delete = (id, k) => {
    socialDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.soc_media.splice(k, 1)
        this.setState({inputValue: ''})
      }
    })
  }
  componentWillMount = () => { if (!Array.isArray(config.data.soc_media)) config.data.soc_media = [] }
  render () {
    return (
      <div id='social-network' className='soc-media-label'>
        <div className='soc-header'>
          <span className='soc-label'>{config.translations.social_net}</span>
        </div>
        <div className='soc-body'>
          {config.data.soc_media.map((i, k) => (
            <div className='soc-block' key={k}>
              <div className='left-side'>
                <label className='title'>{this.getSocTitle(i.type)}</label>
                <div className='detail'>
                  <img className='icon' src={config.urls.soc_net + i.type + '.png'} />
                  <label className='name'>{i.name}</label>
                </div>
              </div>
              <div className='right-side'>
                <img src={config.urls.media + 'ic_edit_stroke.svg'}
                  onClick={this.props.rights.soc_links.edit
                    ? () => this.setState({isEditSocial: true, selectedValue: i.type, inputValue: i.url, inputName: i.name})
                    : () => {}} />
              </div>
            </div>)
          )}

          <div className={this.state.isEditSocial ? 'add-select-wrap' : 'hidden'}>
            <div className='item-wrap'>
              <div className='select-wrap'>
                <Select onChange={e => this.setState({selectedValue: e.value, selectedLabel: e.label})}
                  value={this.state.selectedLabel} options={config.translations.social_list} />
              </div>
              <div className='input-wrap'>
                <input type='text'
                  value={this.state.inputName}
                  placeholder={config.translations.name}
                  onChange={e => this.setState({inputName: e.target.value})}
                />
                <input type='text' value={this.state.inputValue}
                  placeholder={config.translations.url}
                  onChange={e => this.setState({inputValue: e.target.value})}
                />
              </div>
            </div>
            <div className='action'>
              <button className='save' onClick={this.submit}>{config.translations.save}</button>
            </div>
          </div>
        </div>
        {this.props.rights.soc_links.edit &&
          <div className={this.state.isEditSocial ? 'hidden' : 'soc-footer'}
            onClick={() => this.setState({isEditSocial: !this.state.isEditSocial})}
          >
            <label>{config.translations.add_new_link}</label>
            <img src={config.urls.media + 'c_add_stroke.svg'} />
          </div>}

        {/* <Line /> */}
      </div>
    )
  }
}
