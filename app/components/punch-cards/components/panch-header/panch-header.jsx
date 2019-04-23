import './panch-header.styl'

export default class PunchHeader extends React.Component {
// const PunchHeader = () => {
  onError = e => {
    if (!e.target.src.endsWith(config.urls.defaultClientImg)) {
      e.target.src = config.urls.defaultPathToClientImg + config.urls.defaultClientImg
    }
  }
  render () {
    return (
      <header className='punch-header'>
        <button className={'prev-button ' + (config.isRTL ? 'rtl-btn' : 'ltr-btn')} onClick={() => window.history.go(-1)} >
          <img src={config.urls.media + 'arrow-back.svg'} />
        </button>
        <div className='header-wrap'>
          <div>
            <img className='client-img' src={config.urls.client_data + config.data.profile_image} onError={e => { this.onError(e) }}/>
          </div>
          <div className='client-name'>
            <h2>{config.data.name}</h2>
            <div className='punch-label'>
              <p>{config.translations.punch_cards}</p>
              <p className='punch-count'>({this.props.length})</p>
            </div>
          </div>

        </div>
      </header>
    )
  }
}
