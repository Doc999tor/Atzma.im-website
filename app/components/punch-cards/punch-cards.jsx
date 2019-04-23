import SinglePunch from './components/single-punch/single-punch.jsx'
import PunchHeader from './components/panch-header/panch-header.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import { getPunchCardsList } from 'project-services'
import './punch-cards.styl'
const { Link } = ReactRouterDOM
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''
class PunchCards extends React.Component {
  state = {
    punchsList: [],
    punch: {}
  }
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  componentWillMount = () => {
    getPunchCardsList().then(punchsList => {
      punchsList.sort((a, b) => a.id - b.id).sort((a, b) => !!a.isActive - !!b.isActive)
      this.setState({punch: punchsList.find(i => i.isActive) || punchsList[0] || {}, punchsList})
    })
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }
  updatePunchList = punchsList => this.setState({ punchsList })
  updateSingle = () => {
    const punch = this.state.punchsList.reduce((active, item) => item.isActive ? item : active, null) || this.state.punchsList[0] || {}
    this.setState({ punch })
  }
  update = () => this.forceUpdate()
  addPunch = () => {
    this.props.history.push(baseUrl + config.urls.punch_cards_adding)
  }
  renderPunchPreview = () => {
    return (
      <div id='wrap-punch'>
        {this.state.punchsList.map(i => (
          <div className='punch-preview'>
            <div className={i.uses && i.uses.length === i.service_count ? 'punchcard-full' : 'punchcard'} 
              onClick={() => this.setState({punch: i}, () => {
                this.props.history.push(baseUrl + config.urls.single_punch.replace('{punch_card_id}', i.id))
              })}>
              <p className='punch-name'>
                <span className='service-color' />{i.service_name}
              </p>
              <div className='punch'>
                <p className='count'><span>{config.translations.used}</span><span className='uses'>{i.uses ? i.uses.length : '0'}</span><span className='of'>{config.translations.of}</span><span className='total' >{i.service_count}</span></p>
              </div>
              <div className={'sum ' + (config.isRTL && 'sum-rtl')}><p>{i.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}punch-bg.jpg')`
    }
    // this.state.from && this.updatePunchList1(this.props.location.state.punchsList)
    return (
      <div id='punch_cards' style={bgrImg}>
        <PunchHeader length={this.state.punchsList.length} />
        <div className='preview-img'>
          <div className='preview-wrap'>
            {this.state.punchsList.length > 0
              ? <div className='full-page'>
                <h2>{config.translations.select_punch_card}</h2>
                {this.state.punchsList.length > 0 && this.renderPunchPreview()}
              </div>
              : <div className='empty-punch-card'>
                <p>{config.translations.empty_punch_cards}</p>
              </div>}
          </div>
        </div>
        <div className={'punch-add ' + (config.isRTL ? 'punch-add-rtl' : 'punch-add-ltr')} onClick={this.addPunch}><img src={`${config.urls.media}plus-white.svg`} /></div>
        {/* <SinglePunch i={this.state.punch} update={this.update} updateSingle={this.updateSingle} updatePunchList={this.updatePunchList} punch_cards={this.state.punchsList} /> */}
      </div>
    )
  }
}
export default AccessRights(PunchCards)
