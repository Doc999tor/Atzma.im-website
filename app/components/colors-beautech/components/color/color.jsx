import './color.styl'

export default class Color extends React.Component {
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='color'>
        <div className='data'>
          <div className='date'>
            <div className='date-img'><img src={config.urls.media + 'calendar.png'} /></div>
            <h1 className='date-data'>{moment(this.props.i.date).format('DD.MM.YYYY')}</h1>
          </div>
          {this.props.i.services.map(i => <div className='service'>
            <div className='name'>{i.name}</div>
            {i.colors.map(i => <div className='сolor_data'>
              <div className='color_number_wrap'><h1 style={{fontSize: '24px'}}>{i.color_number}</h1>
                <h1 style={{fontSize: '16px'}}>{i.color_quantity}</h1></div>
              <div className='color_brand_wrap'><div className='center'>{i.brand}</div></div>
              <div className='color_oxy_wrap'><h1 style={{fontSize: '24px'}}>{i.oxy_percent}</h1>
                <h1 style={{fontSize: '16px'}}>{i.oxy_quantity}</h1></div>
              <div className='color_coments_wrap'>{i.comments}</div>
            </div>)}
          </div>)}
          <div className='comments'><img src={config.urls.media + 'comments.png'} /><h1>{this.props.i.comments}</h1></div>
          <div className='time'><img src={config.urls.media + 'color_clock.png'} /><h1>{this.props.i.waiting_time}</h1></div>
        </div>
      </div>
    )
  }
}
