import {punchGetService, punchPostService} from 'project-services'
import AccessRights from '../access-rights/access-rights.jsx'
import {ProceduresList, Switch} from 'project-components'
import './punch-cards-add.styl'
const INITIAL_STATE = {
  date: moment().year() + '-12-31',
  isCategoryList: false,
  isOpenServices: false,
  discontActive: false,
  editDiscount: false,
  isService: true,
  editDate: false,
  switch: false,
  renderDiscount: true,
  discount: (config.default_value_of_discount && config.default_value_of_discount > 0) ? config.default_value_of_discount : '',
  price: 0,
  total: 0,
  decrementBy: config.decrement_by,
  incrementBy: config.increment_by,
  uses: config.def_count_of_uses,
  data: [],
  i: {}
}
const Control = ({c, l, m, p, v}) => {
  Control.propTypes = {
    l: PropTypes.string.isRequired,
    c: PropTypes.string.isRequired,
    v: PropTypes.string.isRequired,
    p: PropTypes.func.isRequired,
    m: PropTypes.func.isRequired
  }
  return (
    <div className={c}>
      <p className='label'>{l}</p>
      <div className={'input-wrap ' + (config.isRTL ? 'left' : 'right')}>
        <div className='ink' onClick={p}><img src={`${config.urls.media}plus.svg`} /></div><input className='count-input' type='text' value={v} disabled />
        <div className='ink' onClick={m}><img src={`${config.urls.media}minus.svg`} /></div>
      </div>
    </div>
  )
}
const {months} = config.translations.dates
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''

class PunchCardsAdd extends React.Component {
  state = { ...INITIAL_STATE }
  static propTypes = {
    history: PropTypes.object.isRequired,
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => {
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    punchGetService().then(r => r.status === 200 &&
    r.json().then(data => {
      let isCat = data.length < config.max_services_shown_without_cat + 1 || !data.some(i => data[0].category.id !== i.category.id)
      this.setState({data, isOpenServices: isCat, isCategoryList: !isCat})
    }))
  }
  daysLeft = () => {
    const now = moment()
    const end = moment(this.state.date)
    const duration = now.diff(end, 'day')
    return duration
  }
  save = () => {
    let b = `service_id=${this.state.i.id}&service_count=${this.state.uses}&sum=${this.state.total}&added=${moment().format('YYYY-MM-DD hh:mm:ss')}`
    if (this.state.switch) b = b + `&expiration=${this.state.date}`
    punchPostService(b).then(r => r.status === 201 && r.json().then(id => {
      this.props.history.push(baseUrl + config.urls.punch_cards)
    }))
  }
  activeDiscont = () => {
    this.setState({
      discontActive: !this.state.discontActive,
      renderDiscount: false,
      total: this.state.total - ((this.state.total * this.state.discount) / 100),
      price: this.state.price - ((this.state.price * this.state.discount) / 100)
    }, () => {
      this.state.discontActive && this.refs.discont.focus()
    })
  }
  handleIncrementUses = () => {
    this.setState(prevState => ({
      editDiscount: false,
      renderDiscount: true,
      uses: prevState.uses + 1
    }), () => this.setState({total: this.state.i.price * this.state.uses, price: this.state.i.price}))
  }
  handleDecrementUses = () => {
    if (+this.state.total > 0) {
      this.setState(prevState => ({
        editDiscount: false,
        renderDiscount: true,
        uses: +prevState.uses - 1
      }), () => this.setState({total: this.state.i.price * this.state.uses, price: this.state.i.price}))
    }
  }
  handleIncrementTotal = () => {
    this.setState(prevState => ({
      editDiscount: false,
      renderDiscount: true,
      total: Math.round(prevState.total) + this.state.incrementBy
    }), () => this.setState({price: Math.round(this.state.total / this.state.uses)}))
  }
  handleDecrementTotal = () => {
    if (+this.state.total > 0) {
      this.setState(prevState => ({
        editDiscount: false,
        renderDiscount: true,
        total: Math.round(prevState.total) - this.state.decrementBy
      }), () => this.setState({price: Math.round(this.state.total / this.state.uses)}))
    }
  }
  getTotal = () => this.setState({total: this.state.price * this.state.uses})
  focusForDiscont = () => {
    this.setState({
      discontActive: true
    }, () => this.state.discontActive && this.refs.discont.focus())
  }
  handleChangeDiscount = () => {
    this.setState({
      total: this.state.i.price * this.state.uses - ((this.state.i.price * this.state.uses * this.state.discount) / 100),
      price: this.state.i.price - ((this.state.i.price * this.state.discount) / 100)
    })
  }
  resetState = () => this.setState({
    isService: true,
    discount: (config.default_value_of_discount && config.default_value_of_discount > 0) ? config.default_value_of_discount : '',
    date: moment().year() + '-12-31',
    renderDiscount: true,
    uses: config.def_count_of_uses,
    editDiscount: false,
    switch: false
  })
  toogleOpenServices = () => this.setState({isOpenServices: !this.state.isOpenServices})
  getService = i => this.setState({i: i, price: i.price, isService: false}, () => this.getTotal())
  handleValidity = () => this.setState({switch: !this.state.switch})
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}punch-bg.jpg')`
    }
    return (
      <div id='punch_cards_adding' style={bgrImg}>
        <header className='punch-header'>
          <button className={'prev-button ' + (config.isRTL && 'prev-button-rtl')} onClick={this.props.rights.topnav.back ? this.state.isService ? this.state.isCategoryList
            ? this.state.isOpenServices ? () => this.toogleOpenServices() : () => window.history.go(-1)
            : () => window.history.go(-1) : this.resetState : () => {}}
          >
            <img src={config.urls.media + 'arrow-back.svg'} />
          </button>
          <div className='header-wrap'>
            <img src={config.urls.media + 'credit-card.svg'} />
            <div className='title'>
              <h2>{config.translations.new_punch_card}</h2>
            </div>
          </div>
        </header>
        <div className='preview-img'>
          <div className='preview-wrap'>
            <div style={this.state.isService ? {display: 'block', width: '100%'} : {display: 'none'}}>
              {this.state.data.length > 0 && <ProceduresList data={this.state.data} getService={this.getService}
                isOpenServices={this.state.isOpenServices} toogleOpenServices={this.toogleOpenServices} />}
            </div>
            {!this.state.isService && <div className='service_edit'>
              <div className='name-wrap'>
                <p className='service-name'><span className='service-color' style={{backgroundColor: this.state.i.color}} />{this.state.i.name}</p>
              </div>
              <div className='single-service'>
                <Control m={this.handleDecrementUses}
                  p={this.handleIncrementUses}
                  l={config.translations.number_of_uses} v={this.state.uses} c={'uses_wrap'} />
                <div className='upd-discont-wrap'>
                  <button className={'discont-btn ' + (this.state.discontActive && 'active-discont')} onClick={this.state.renderDiscount && this.activeDiscont} >
                    {this.state.discontActive ? <img className='discont-img' src={`${config.urls.media}discont-act.svg`} /> : <img className='discont-img' src={`${config.urls.media}discont-dis.svg`} />}
                    {config.translations.add_discount}
                  </button>
                  <div className='input-wrap'>
                    <div className='persent-wrap'>
                      <input
                        onChange={e => this.setState({discount: e.target.value}, this.handleChangeDiscount)}
                        onBlur={() => this.setState({editDiscount: true, discontActive: false})}
                        ref='discont'
                        className='discont-input'
                        type='number'
                        value={(this.state.discontActive || this.state.editDiscount) ? this.state.discount : ''}
                        placeholder={this.state.discontActive ? config.translations.type_discount : ''}
                        autoFocus={!this.state.discontActive}
                        disabled={!this.state.discontActive}
                      />
                      {(this.state.discontActive || this.state.editDiscount) && this.state.discount && <span className={'persent ' + (config.isRTL ? 'persent-rtl' : 'persent-ltr')}>%</span>}
                    </div>
                    {this.state.editDiscount && <img onClick={this.focusForDiscont} className='discont-img' src={`${config.urls.media}edit-note.svg`} />}
                  </div>
                </div>
                <div className='total_wrap'>
                  <div className='cost-wrap'>
                    <p className='label-cost'>{config.translations.total}</p>
                    <p className='total_num'>{config.translations.price_single}
                      <span className='num'>
                        {this.state.price + ' ' + config.data.currency}
                        {/* {(this.state.price - ((this.state.price * this.state.discount) / 100)) + ' ' + config.data.currency} */}
                      </span>
                    </p>
                  </div>
                  <div className='input-wrap'>
                    <div className='ink' onClick={this.handleIncrementTotal}><img src={`${config.urls.media}plus.svg`} /></div>
                    <input className='count-input total-input' type='text' value={this.state.total + ' ' + config.data.currency} disabled />
                    <div className='ink' onClick={this.handleDecrementTotal}><img src={`${config.urls.media}minus.svg`} /></div>
                  </div>
                </div>
                <div className='expiration_wrap'>
                  <p className='subscription_period'>{config.translations.add_expiry_date}</p>
                  <Switch on={this.state.switch} onClick={this.handleValidity} />
                </div>
                {this.state.switch && <div className='valid_date'>
                  <div className='date_wrap'>
                    <p>{config.translations.ends}</p>
                  </div>
                  <p className='daysLeft'>{config.translations.days_left.replace('{days}', this.daysLeft() * (-1))}</p> 
                  {this.state.editDate
                    ? <input className='change-expiry-date' onBlur={() => this.setState({editDate: false})} onChange={e => this.setState({date: e.target.value})} ref='changeDate' type='date' value={this.state.date} />
                    : <p className='is_valid' onClick={() => this.setState({editDate: true}, () => this.refs.changeDate.focus())}>{`${moment(this.state.date).format('DD')} ${months[moment(this.state.date).month()]} ${moment().format('YYYY')}`}</p>}
                </div>}
              </div>
              <div className='buttons'>
                <button className='btn-cancel' onClick={() => this.props.history.push(baseUrl + config.urls.punch_cards)}>
                  {config.translations.cancel}<img className='cancel-img' src={`${config.urls.media}plus-blue.svg`} />
                </button>
                <button className='btn-save' onClick={this.save}>
                  {config.translations.next}<img src={`${config.urls.media}plus-square-white.svg`} />
                </button>
              </div>
            </div>}
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
