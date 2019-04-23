import Appointment from './components/appointment/appointment.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import PunchCard from './components/punch-card/punch-card.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Debt from './components/debt/debt.jsx'
import Note from './components/note/note.jsx'
// import { Swiper } from 'project-components'
import Sms from './components/sms/sms.jsx'
import Topnav from '../topnav/topnav.jsx'
import {getTimeline} from 'project-services'
import './timeline.styl'

let urlParams = ['appointments', 'sms']
let filterParams = []
// let urlParams = ['appointments']
let exp
let cont = 1
class Timeline extends React.Component {
  state = {
    filter: {
      appointments: true,
      punch_cards: true,
      gallery: true,
      other: true,
      debts: true,
      sms: true,
      notes: true

    },
    showMessage: false,
    flag: false,
    data: []
  }
  // count = 0

  componentDidMount = () => {
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    config.plugins_list.forEach(i => i !== 'colors_beautech' && urlParams.push(i))
    filterParams = urlParams.filter(i => {
      if (this.state.filter[i]) return i
    })
    this.getData(true, true, false)
    this.init()
  }

  init = () => {
    const list = this.refs.list
    exp = () => {
      if (window.pageYOffset > list.scrollHeight - (document.body.clientHeight + document.body.clientHeight / 2)) {
        !this.state.flag && this.getData(false, false, true)
      }
    }
    list.addEventListener('touchmove', exp, false)
  }

  autoUploadUntilFullPage = () => {
    const { data } = this.state
    const { min_data_length } = config
    if (data.length <= min_data_length) {
      this.getData(false, config.interval_days * cont, false)
    }
  }

  emptyData = () => {
    this.getData(false, false, true, config.interval_days * cont)
  }

  getData = (firstLoad, fullPageCoef, emptyData, emptyDataCoef) => {
    this.setState({flag: true})
    cont = cont + cont
    filterParams = urlParams.filter(i => {
      if (this.state.filter[i]) return i
    })
    const getDate = (value, date) => moment(date).subtract(value, 'days').format('YYYY-MM-DD')
    let start
    let end
    if (firstLoad) {
      // config.interval_days
      start = getDate(config.interval_days, moment().format('YYYY-MM-DD'))
      end = moment().add(config.in_future, 'days').format('YYYY-MM-DD')
    } else if (fullPageCoef) {
      end = getDate(1, this.lastStartDate)
      start = getDate(fullPageCoef, end)
      if (moment(start).isBefore(config.data.registration_date)) {
        start = getDate(0, config.data.registration_date)
        fullPageCoef = 0 // Exit from auto fill page
        const list = this.refs.list
        list.removeEventListener('touchmove', exp, false)
        this.setState({showMessage: true})
      }
    } else if (emptyData && emptyDataCoef) {
      end = getDate(1, this.lastStartDate)
      start = getDate(emptyDataCoef, end)
      if (moment(start).isBefore(config.data.registration_date)) {
        start = getDate(0, config.data.registration_date)
        fullPageCoef = 0 // Exit from auto fill page
        emptyData = false
        emptyDataCoef = 0
        const list = this.refs.list
        list.removeEventListener('touchmove', exp, false)
        this.setState({ showMessage: true })
      }
    } else {
      start = getDate(config.interval_days, this.lastStartDate)
      end = getDate(1, this.lastStartDate)
      if (moment(start).isBefore(config.data.registration_date)) {
        start = getDate(0, config.data.registration_date)
        fullPageCoef = 0 // Exit from auto fill page
        emptyData = false
        emptyDataCoef = 0
        const list = this.refs.list
        list.removeEventListener('touchmove', exp, false)
        this.setState({showMessage: true})
      }
    }
    this.lastStartDate = start
    this.lastEndDate = end
    getTimeline(filterParams, { end, start }).then(res => {
      let keys = Object.keys(res)
      let overallData = keys.map(i => {
        let a = [...res[i]]
        return a
      })
      let data = overallData.reduce((arr, item) => arr.concat(item.map(i => {
        if (!i.date) {
          i.date = moment(i.start).format('YYYY-MM-DD')
        }
        if (!this.state.filter.sms && i.field_name === 'sms') { i.isHide = true } else
        if (!this.state.filter.notes && i.field_name === 'notes') { i.isHide = true } else
        if (!this.state.filter.appointments && i.field_name === 'appointments') { i.isHide = true } else
        if (!this.state.filter.punch_cards && i.field_name === 'punch_cards') { i.isHide = true } else
        if (!this.state.filter.gallery && i.field_name === 'gallery') { i.isHide = true } else
        if (!this.state.filter.debts && i.field_name === 'debts') i.isHide = true
        return i
      })), [])
      if (data.length) {
        data.sort((a, b) => moment(b.date) - moment(a.date))
        data[0].separator = true
        const format = date => moment(date).format('YYYY-MM-DD')
        data.reduce((pI, cI) => {
          if (format(pI.date) !== format(cI.date)) cI.separator = true
          return cI
        })
      }
      this.setState(
        {flag: false, data: [...this.state.data, ...data]},
        () => fullPageCoef
          ? this.autoUploadUntilFullPage()
          : emptyData && data.length < 10
            ? this.emptyData()
            : ''
      )
    })
  }
  filter = p => {
    const f = b => {
      this.setState({data: this.state.data.map(i => {
        if (p === 'appointments' && i.field_name === 'appointments') { i.isHide = b } else
        if (p === 'punch_cards' && i.field_name === 'punch_cards') { i.isHide = b } else
        if (p === 'gallery' && i.field_name === 'gallery') { i.isHide = b } else
        if (p === 'debts' && i.field_name === 'debts') i.isHide = b
        if (p === 'sms' && i.field_name === 'sms') { i.isHide = b } else
        if (p === 'notes' && i.field_name === 'notes') { i.isHide = b }
        return i
      }),
      filter: { ...this.state.filter, [p]: !b }})
    }
    this.state.filter[p] ? f(true) : f(false)
  }
  dateFormatOverall = date => {
    moment.locale(config.locale)
    if (moment(date).format('YYYY') < moment().format('YYYY')) {
      return moment(date).format('MMMM DD, YYYY')
    }
    return moment(date).format('MMMM DD')
  }
  dateFormatColor = date => {
    moment.locale(config.locale)
    return moment(date).format('dddd') + ', '
  }
  render () {
    const fields = {
      appointments: i => <Appointment i={i} {...this.props} />,
      punch_cards: i => <PunchCard i={i} {...this.props} />,
      gallery: i => <Gallery i={i} {...this.props} />,
      debts: i => <Debt i={i} {...this.props} />,
      notes: i => <Note i={i} {...this.props} />,
      sms: i => <Sms i={i} {...this.props} />
    }
    return (
      <div id='timeline'>
        <Topnav {...this.props} timeline />
        <div className='list' ref='list'>
          {this.state.data.length > 0 && this.state.data.map(i => !i.isHide && <div>
            {i.separator && <div className='separator-wrap'><div className='separator'>
              {/* <span className='date_weekday'>{`${config.translations.dates.weekdays[moment(i.date).get('day')]},`}</span>
              <span className='date_month'>{config.translations.dates.months[moment(i.date).get('month')]}</span> */}
              <span className='date_day_color'>{this.dateFormatColor(i.date)}</span>
              <span className='date_day'>{this.dateFormatOverall(i.date)}</span>
            </div>
            </div>}
            { fields[i.field_name] && fields[i.field_name](i) }
          </div>)}
          {this.state.showMessage && <div className='separator-wrap'><div className='separator'>
            {/* <span className='date_weekday'>{`${moment(config.data.registration_date).format('YYYY-MM-DD')},`}</span> */}
            <span className='date_month'>{config.translations.registration_date.replace('{registration_date}', `${moment(config.data.registration_date).format('YYYY-MM-DD')}`)}</span>
          </div>
          </div>}
          <div className={this.state.flag ? 'preloader' : 'hidden'}>
            <div className='loader' />
          </div>
        </div>
        <div className='buttons-wrap'>
          <div className='buttons-container'>
            <div className='single-button' onClick={() => this.filter('appointments')}>
              <img className={`mark ${this.state.filter.appointments ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
              <img className='main-img' src={`${config.urls.media}ic-q.svg`} />
              <p>{config.translations.queues}</p>
            </div>
            {config.plugins_list.some(i => i === 'gallery') && this.props.rights.timeline.isVisibleGalleryButton &&
            <div className='single-button' onClick={() => this.filter('gallery')}>
              <img className={`mark ${this.state.filter.gallery ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
              <img className='main-img' src={`${config.urls.media}ic-g.svg`} />
              <p>{config.translations.gallery}</p>
            </div>}
            {config.plugins_list.some(i => i === 'debts') && <div className='single-button' onClick={() => this.filter('debts')}>
              <img className={`mark ${this.state.filter.debts ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
              <img className='main-img' src={`${config.urls.media}ic-d.svg`} />
              <p>{config.translations.debts_t}</p>
            </div>}
            {/* <div onClick={() => this.filter('other')}>
              <img className={this.state.filter.other ? '' : 'nVisible'} src={config.urls.media + 'ic-mark.svg'} />
              <span>{config.translations.other_t}</span>
            </div> */}
            {config.plugins_list.some(i => i === 'punch_cards') && <div className='single-button' onClick={() => this.filter('punch_cards')}>
              <img className={`mark ${this.state.filter.punch_cards ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
              <img className='main-img' src={`${config.urls.media}ic-sub.svg`} />
              <p>{config.translations.punch_cards}</p>
            </div>}
            {config.plugins_list.some(i => i === 'notes') && <div className='single-button' onClick={() => this.filter('notes')}>
              <img className={`mark ${this.state.filter.notes ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
              <img className='main-img' src={`${config.urls.media}ic-n.svg`} />
              <p>{config.translations.note_t}</p>
            </div>}
            <div className='single-button' onClick={() => this.filter('sms')}>
              <img className={`mark ${this.state.filter.sms ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
              <img className='main-img' src={`${config.urls.media}ic-s.svg`} />
              <p>{config.translations.sms_t}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
