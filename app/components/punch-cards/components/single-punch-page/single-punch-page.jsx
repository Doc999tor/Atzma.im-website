import PunchHeader from '../panch-header/panch-header.jsx'
import {Modal} from 'project-components'
import {punchPostServiceUse, punchDeleteService, getPunchCardsList, punchDeleteServiceUse} from 'project-services'
import './single-punch-page.styl'
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''
export default class SinglePunchPage extends React.Component {
  state = {
    punchsList: [],
    singlePunch: {},
    visibleAgreeModal: false
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  componentWillMount = () => {
    getPunchCardsList().then(punchsList => {
      const punchCard = punchsList.find(i => i.id === +this.props.match.params.punch_card_id) || {}
      this.setState({
        punchsList,
        singlePunch: punchsList.find(i => i.id === +this.props.match.params.punch_card_id) || {},
        uses: punchCard.uses || [],
      })
    })
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }
  daysLeft = () => {
    const now = moment()
    const end = moment(this.state.singlePunch && this.state.singlePunch.expiration)
    const duration = now.diff(end, 'day')
    return duration
  }
  del = () => punchDeleteService(this.state.singlePunch.id)
    .then(r => {
      if (r.status === 204) {
        this.props.history.push(baseUrl + config.urls.punch_cards)
      }
    })
  update = () => this.forceUpdate()
  use = () => {
    const d = moment().format('YYYY-MM-DD hh:mm:ss')
    punchPostServiceUse(this.state.singlePunch.id, `date=${d}`).then(r => r.json().then(r => {
      this.setState(state => ({ uses: [{ id: r, date: d }, ...state.uses] }))
      if (r) this.setState({ flag: true })
    }))
  }
  delUse = usesId => {
    this.state.uses.length && this.setState({ visibleAgreeModal: true, usesId })
  }
  confirmDel = () => {
    punchDeleteServiceUse(config.data.id, this.state.singlePunch.id, this.state.usesId).then(r => {
      if (r.status === 204) {
        this.setState({
          uses: this.state.uses.filter(uses => uses.id !== this.state.usesId),
          visibleAgreeModal: false
        })
      }
    })
  }
  cancel = () => {
    this.setState({ visibleAgreeModal: false })
  }
  render () {
    const { singlePunch = {}, uses = [] } = this.state
    const sortUses = uses.sort((a, b) => moment(b.date) - moment(a.date))
    return (
      <div id='single-punch-page'>
        <PunchHeader length={this.state.punchsList.length} />
        <div className='single-punch-wrap'>
          <div className={'single-punch ' + (this.daysLeft() > 0 && 'expired')}>
            <button onClick={() => this.del()} className={'delete-btn ' + (config.isRTL ? 'delete-btn-rtl' : 'delete-btn-ltr')}><img src={config.urls.media + 'delete-blue.svg'} />{config.translations.delete}</button>
            {/* {this.state.flag && <button onClick={this.delUse} className={'button-del-use ' + (config.isRTL ? 'button-del-use-rtl' : 'button-del-use-ltr')}>{config.translations.punch_latest_del}</button>} */}
            <div className='punch-preview'>
              <div className='service-wrap'>
                <span className='service-color' />
                <p className='punch-name'>{singlePunch.service_name}</p>
              </div>
              <div className='punch'>
                <p className='count'><span>{config.translations.used}</span>
                  <span className='uses'>{uses ? uses.length : '0'}</span>
                  <span className='of'>{config.translations.of}</span>
                  <span className={'total ' + (this.daysLeft() > 0 && 'unused')} >{singlePunch.service_count}</span>
                </p>
              </div>
              <div className={'sum ' + (config.isRTL && 'sum-rtl')}><p>{singlePunch.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
            {this.daysLeft() > 0
              ? <button className='expiry-btn'>{config.translations.expiry_dates}</button>
              : (this.state.uses && this.state.uses.length !== singlePunch.service_count ? <button className='use-btn'
                onClick={(this.state.uses && this.state.uses.length === singlePunch.service_count) || this.daysLeft() > 0 ? () => {} : this.use} >{config.translations.use}
                <img src={config.urls.media + 'check-circle.svg'} /></button>
                : <button className='expiry-btn'>{config.translations.used_punch_card}</button>)}
            {singlePunch.expiration && <div className='expiry-date'>
              <div className='img-wrap'><img src={config.urls.media + 'calendar.svg'} /></div>
              {this.daysLeft() > 0 ? <div className='expiry-text'>
                <p>{config.translations.expiry_date}</p>
                <p className='expiry-formated-date'>{moment(singlePunch.expiration).format('DD/MM/YYYY')}</p>
              </div> : <div className='expiry-text'>
                <p>{config.translations.expiry_date}</p>
                <p className='formated-date'>{moment(singlePunch.expiration).format('DD/MM/YYYY')}</p>
                <p>{config.translations.within}</p>
                <p className='days-left'>{this.daysLeft() * (-1)}</p>
                <p>{config.translations.days}</p>
              </div>}
            </div>}
            {uses && <div className='uses-wrap'>
              {sortUses.map((el, index) => (<div className='uses'>
                <div className='uses-date'><p>{moment(el.date).format('DD/MM/YYYY')}</p></div>
                <div className='number-select'>
                  <p>{uses.length - [index]}</p>
                  <img className={this.daysLeft() > 0 ? 'expiry-checkbox' : 'checkbox'} 
                    src={config.urls.media + 'checkbox-select.svg'} 
                    onClick={() => this.delUse(el.id)}
                  />
                </div>
              </div>))}
            </div>}
          </div>
        </div>
        <Modal show={this.state.visibleAgreeModal}>
          <div className='modal-body'>
            <img className='icon' src={config.urls.media + 'icon_delete_selected.svg'} />
            <label>{config.translations.punch_del_question}</label>
          </div>
          <div className='modal-footer'>
            <button className='no-btn' onClick={this.cancel}>{config.translations.del_no.toUpperCase()}</button>
            <button className='yes-btn' onClick={this.confirmDel}>{config.translations.del_yes.toUpperCase()}</button>
          </div>
        </Modal>
      </div>
    )
  }
}
