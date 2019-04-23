import {punchPostServiceUse} from 'project-services'
import Delete from '../modal-delete/modal-delete.jsx'
import './single-punch.styl'

export default class SinglePunch extends React.Component {
  state = {
    isVisibleModalConfirmed: false,
    isUse: false
  }
  static propTypes = {
    update: PropTypes.func.isRequired,
    updatePunchList: PropTypes.func.isRequired,
    i: PropTypes.object.isRequired,
    punch_cards: PropTypes.array
  }
  use = () => {
    const d = moment().format('YYYY-MM-DD hh:mm:ss')
    punchPostServiceUse(this.props.i.id, `date=${d}`).then(r => r.json().then(r =>
      this.props.punch_cards.some(item => (item.id === this.props.i.id && (item.uses && item.uses.unshift({id: r, date: d})) && this.props.update()))))
  }
  handleConfirmedModal = () => {
    this.setState({isVisibleModalConfirmed: !this.state.isVisibleModalConfirmed}, () => {
      if (!this.state.isVisibleModalConfirmed) { this.setState({isUse: false}, () => this.props.update()) }
    })
  }
  render () {
    const nan = moment.duration(moment(this.props.i.expiration) - moment()).asDays()
    const days = this.props.i.expiration ? Math.floor(isNaN(nan) ? 0 : nan) : undefined
    return (
      <div id='single-punch'>
        <Delete handleConfirmedModal={this.handleConfirmedModal} isVisibleModalConfirmed={this.state.isVisibleModalConfirmed}
          updatePunchList={this.props.updatePunchList} id={this.props.i.id} use={this.state.isUse} {...this.props} />
        <div className='triangle-down-wrap'><div className='triangle-down' /></div>
        <div className='punch-data'>
          <div className='head'><div className='delete-wrap'><img onClick={this.handleConfirmedModal} src={config.urls.media + 'trash-black.png'} /></div>
            <h1 className='p-name'>{this.props.i.service_name}</h1>
            {this.props.i.sum &&
            <h1 className='p-sum'>{this.props.i.sum}{config.data.currency}</h1>}
          </div>
          <h1 className='info'>{config.translations.used}
            <span>{this.props.i.uses && this.props.i.uses.length}</span>{config.translations.from.replace('{count}', this.props.i.service_count)}</h1>
          <div className='use-wrap' onClick={(this.props.i.uses && this.props.i.uses.length === this.props.i.service_count) || days < 1 ? () => {} : this.use}
            style={(this.props.i.uses && this.props.i.uses.length === this.props.i.service_count) || days < 1
              ? {backgroundColor: 'rgba(100, 100, 100, 0.8)'} : {backgroundColor: 'deepskyblue'}}>
            <img style={config.isRTL ? {right: ' 20px'} : {}} src={config.urls.media + ((this.props.i.uses && this.props.i.uses.length === this.props.i.service_count) || days < 1 ? 'block.png' : 'use.png')} />
            <h1>{config.translations.use}</h1></div>
          <div className='punch-data-uses-list'>{this.props.i.uses && this.props.i.uses.map((i, k) => <div className='uses'>
            <div className='check-wrap'><img src={config.urls.media + 'check-ok.svg'}
              onClick={() => this.setState({isUse: i.id}, () => this.handleConfirmedModal())} /></div>
            <h1 className='count'>{this.props.i.uses && this.props.i.uses.length - [k]}</h1><h1 className={'date ' + (config.isRTL ? 'left' : 'right')}>{moment(i.date).format('YYYY.MM.DD')}</h1>
          </div>)}</div>
          <div className={this.props.i.expiration ? 'date-to-wrap' : 'hidden'} style={days < 1
            ? {backgroundColor: 'rgba(255, 0, 0, 0.6)'} : {backgroundColor: 'rgba(0, 159, 255, 0.6)'}}>
            <div className='cal-wrap'><img src={config.urls.media + 'calendar.png'} /></div>
            <h1 className='date-to'>{config.translations.is_valid}
              <span style={days < 1 ? {color: 'rgb(0, 143, 242)'} : {color: 'red'}}>{this.props.i.expiration}</span> / {config.translations.left}
              <span style={days < 1 ? {color: 'rgb(0, 143, 242)'} : {color: 'red'}}> {days}</span> {config.translations.days}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
