class NewAddress extends React.Component {
  static propTypes = {
    address: PropTypes.string,
    keyValue: PropTypes.string,
    language: PropTypes.string,
    setAddress: PropTypes.func,
    delAddress: PropTypes.func
  }

  state = {
    newAddress: this.props.address
  }

  componentDidMount () {
    this.loadMap(this.initMap, document.body)
  }
  loadMap = (url, implementationCode, location) => {
    let scriptTag = document.createElement('script')
    scriptTag.src = url
    scriptTag.onload = implementationCode
    scriptTag.onreadystatechange = implementationCode
    location.appendChild(scriptTag)
    this.forceUpdate()
  }
  testlocation = value => {
    this.props.setAddress(value)
  }
  initMap = () => {
    if (window.google) {
      let input = this.input
      const searchBox = new window.google.maps.places.SearchBox(input)
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces()
        this.setState({
          newAddress: places[0].formatted_address
        }, () => this.props.setAddress(this.state.newAddress))
      })
    } else {
      this.initTimeout = setTimeout(() => {
        this.initMap()
      }, 500)
    }
  }
  clearedAddress = () => {
    this.setState({ newAddress: '' }, () => this.props.delAddress())
  }
  render () {
    return (
      <div className='address-data-edit'>
        <div className='address-wrap-edit'>
          <span className='label'>{config.translations.address}:</span>
          <div className='block-content'>
            <input id='pac-input' className='controls'
              type='text'
              ref={input => { this.input = input }}
              onChange={e => this.setState({ newAddress: e.target.value }, () => this.props.setAddress(this.state.newAddress))}
              value={this.state.newAddress}
              placeholder={config.translations.add_address} />
          </div>
        </div>
        <div className='del-info'>
          <div className='del-wrap' onClick={this.clearedAddress}>
            <img src={config.urls.media + 'plus2.svg'} />
          </div>
        </div>
      </div>
    )
  }
}

export default NewAddress
