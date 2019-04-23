import {clientReplaceService, clientGetService} from 'project-services'
import {Select} from 'project-components'
import './source.styl'
let timeout

export default class Source extends React.Component {
  state = {
    selectedLabel: config.data.source || config.translations.source_list[0].label,
    selectedValue: config.data.source || config.translations.source_list[0].value,
    isRecomendation: false,
    isViewClients: false,
    isOpenSource: false,
    inputValue: '',
    userId: null,
    clients: []
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    let body = `${config.urls.source}=${this.state.selectedValue}`
    if (this.state.userId) body = `${config.urls.source}=${this.state.selectedValue}&${config.urls.recommended_by}=${this.state.userId}`
    clientReplaceService(body).then(r => {
      if (r.status === 204) {
        config.data.source = this.state.selectedValue
        this.forceUpdate()
      }
    })
  }
  changeSelect = e => {
    this.setState({selectedLabel: e.label, selectedValue: e.value, userId: null})
    e.value === 'recommendation' ? this.setState({isRecomendation: true}) : this.setState({isRecomendation: false})
  }
  changeInput = e => {
    clearTimeout(timeout)
    this.setState({inputValue: e})
    if (e.length > 0) {
      timeout = setTimeout(() => clientGetService(e).then(r => r.json().then(r =>
        this.setState({isViewClients: true, clients: r}))), config.data.timeout)
    } else this.setState({isViewClients: false})
  }
  render () {
    return (
      <div id='source'>
        {/*{this.props.rights.source.add &&*/}
          {/*<div className={this.state.isOpenSource ? 'hidden' : config.data.source ? 'hidden' : 'add-source-wrap'}>*/}
            {/*<img className={config.isRTL ? 'left' : 'right'} src={config.urls.media + 'add.svg'}*/}
              {/*onClick={() => this.setState({ isOpenSource: !this.state.isOpenSource })} />*/}
            {/*<h1 className={config.isRTL ? 'left' : 'right'}>{config.translations.add_traffic_source}</h1>*/}
          {/*</div>}*/}
        <div className={this.state.isOpenSource ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85')
          : config.data.source ? 'add-select-wrap ' + (this.state.isRecomendation ? 'h125' : 'h85') : 'hidden'}>
          {/*<h1>{config.translations.traffic_source}</h1>*/}
          {/*<div className='button-wrap'>*/}
            {/*{this.props.rights.source.save && <button onClick={this.submit}>{config.translations.save}</button>}*/}
          {/*</div>*/}
          {/*<div className='select-wrap'>*/}
            {/*<Select value={this.state.selectedLabel} onChange={e => this.changeSelect(e)} options={config.translations.source_list} disabled={!this.props.rights.source.select} />*/}
          {/*</div>*/}
          <div className={this.state.isRecomendation ? 'input-wrap' : 'hidden'}>
            <div className='label'>{config.translations.recommended_by}</div>
            <input type='text' value={this.state.inputValue} onChange={e => this.changeInput(e.target.value)}
              placeholder={config.translations.customer_pl} />
            <div className={this.state.isViewClients ? 'clients-list-wrap ' + (config.isRTL ? 'clients-list-wrap-left'
              : 'clients-list-wrap-right') : 'hidden'}>
              {this.state.clients.map((i, k) =>
                <div key={k} onClick={() => this.setState({inputValue: i.name, userId: i.id, isViewClients: false})}>{i.name}</div>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
