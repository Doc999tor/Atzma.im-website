import {formatDate, dataURLtoFile, Swiper, Resize} from 'project-components'
import './events.styl'

export default class Events extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  // price (i) {
  //   let sum = 0
  //   if (i.length > 1) {
  //     for (let c = 0; c < i.length; c++) sum += i[c].total_price
  //   } else { sum = i[0].total_price }
  //   return sum + config.data.currency
  // }
  //   duration (i) {
  //     let duration = 0
  //     if (i.services.length > 1) {
  //       for (let c = 0; c < i.services.length; c++) duration += i.services[c].duration
  //     } else { duration = i.services[0].duration }
  //     return `${moment(i.start).format('HH:mm')}-${moment(i.end).subtract(moment(i.start)).format('HH:mm')}`
  // }
  // duration (i) {
  //   const duration = i.services.reduce((sum, item) => sum + (item.duration || 0), 0)
  //   return moment(i.start).format('HH:mm') + ' - ' + moment(i.start).add(duration, 'minutes').format('HH:mm')
  // }
  getColorLine (i) {
    let nextNum = 0
    let colorStr = ''
    let filteredColor = i.services.filter(i => !!i.color)
    let oneColorHeight = (100 / (filteredColor.length).toFixed(2))
    filteredColor.map((i, k) => {
      colorStr += ', ' + (i.color || '') + ' ' + nextNum + '%, ' + (i.color || '') + ' ' + (
        parseFloat(nextNum) + parseFloat(oneColorHeight)) + '%'
      nextNum = parseFloat(nextNum) + parseFloat(oneColorHeight)
    })
    let leftBorder = {
      borderImage: 'linear-gradient(to bottom' + colorStr + ') 1 100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRight: 'navajowhite'
    }
    let rightBorder = {
      borderImage: 'linear-gradient(to bottom' + colorStr + ') 1 100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderLeft: 'navajowhite'
    }
    let BorderNone = {
      borderImage: '',
      borderWidth: '',
      borderStyle: '',
      borderRight: ''
    }
    return (colorStr ? (config.isRTL ? rightBorder : leftBorder) : BorderNone)
  }
  getHeaderTitle = i => i.services.map(i => i.name).join(', ')

  initialSlide = () => {
    let slide
    config.data.recent_appoinments && config.data.recent_appoinments.every((i, k) => {
      if (moment() > moment(i.date)) { slide = k; return false } else return true
    })
    return slide
  }
  componentWillMount = () => {
    if (!Array.isArray(config.data.recent_appoinments)) config.data.recent_appoinments = []
    config.data.recent_appoinments.sort((a, b) => moment(a.date) - moment(b.date))
  }
  render () {
    return (
      <div id='events'>
        {/* <a href={this.props.rights.events.cr_app ? config.urls.main + config.urls.appointment + '?client_id=' + config.data.id : false}> */}
        {/* <img className='clock' src={config.urls.media + 'clock.png'} /></a> */}
        {/* <h1 className={'label ' + (config.isRTL ? 'left' : 'right')}>{config.translations.close_visits}</h1> */}
        <div className='event-header'>
          <label>{config.translations.close_queue}</label>
        </div>
        <div className='wrap-events'>
          {config.data.recent_appoinments.map((i, k) => (
            <div key={k} className='events-list'>
              <a href={`${config.urls.calendar_link}${moment(i.start).format('YYYY-MM-DD')}?appointment_id=${config.data.recent_appoinments[k].id}`}>
                <div className='note' style={i.services && this.getColorLine(i)} >
                  <div className='note-head'>
                    <img className='icon' src={config.urls.media + 'ic_servise.svg'} />
                    {i.services && <span>{this.getHeaderTitle(i)}</span>}
                  </div>
                  <div className='block1' >
                    <div className='dates'>
                      <div className='duration'>
                        <img className='icon' src={config.urls.media + 'ic_time.svg'} />
                        <span>{`${moment(i.start).format('HH:mm')} - ${moment(i.end).format('HH:mm')}`}</span>
                      </div>
                      <div className='date'>
                        <img className='icon' src={config.urls.media + 'ic_day.svg'} />
                        <span>{formatDate(i.start)}</span>
                      </div>
                    </div>
                  </div>
                  <div className='block2' >
                    <span>{i.total_price}{config.data.currency}</span>
                    <span className='min'>/&nbsp;{config.translations.summary}</span>
                  </div>
                </div>
              </a>
            </div>)
          )}
        </div>
        <a href={this.props.rights.events.cr_app
          ? `${config.urls.main}${config.urls.appointment}?client_id=${config.data.id}&worker_id=${config.user.worker_id}`
          : false}>
          <div className='event-footer'>
            <label>{config.translations.add_new_queue}</label>
            <img className='add' src={config.urls.media + 'c_add_stroke.svg'} />
          </div>
        </a>
      </div>
    )
  }
}
