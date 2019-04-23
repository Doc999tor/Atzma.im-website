import './sms.styl'

export default class Sms extends React.Component {
  state = {
    isVisible: false
  }
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='sms-timeline'>
        <div className='icon-wrap'><img src={`${config.urls.media}ic-sms.svg`} /></div>
        <div className='order-in'>{moment(this.props.i.date).format('HH:mm')}</div>
        <p className={`text ${this.state.isVisible ? '' : 'ellipsis'}`}
          onClick={() => this.setState({isVisible: !this.state.isVisible})}>{this.props.i.text}</p>
      </div>
    )
  }
}
