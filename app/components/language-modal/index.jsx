import './style.styl'

export default class LangModal extends React.Component {
  constructor () {
    super()
    this.state = {
      animation: false,
      flag: false
    }
  }

  init = () => {
    if (this.props.show && !this.state.animation) {
      setTimeout(() => this.setState({ animation: true, flag: true }), 1)
    } else if (!this.props.show && this.state.animation) {
      setTimeout(() => this.setState({ animation: false }), 1)
      setTimeout(() => this.setState({ flag: false }), 200)
    }
  }

  componentDidUpdate = () => this.init()

  componentDidMount = () => this.init()

  render () {
    return (
      <div>
        <div
          id={this.props.show ? 'modal-background' : this.state.flag ? 'modal-background' : 'hidden'}
          className={this.state.animation ? 'fade-background' : ''} onClick={this.props.onHide}
        >
          <div id='modal-content' className={this.state.animation ? 'fade-content' : ''} onClick={e => e.stopPropagation()}>
            <div className='lang-wrap'>
              {
                config.translations.languages.map(item => {
                  return (<a href={config.urls.home_clicked.replace('{clicked_lang}', item.url)}>
                    {item.name}
                  </a>)
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
LangModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool
}
LangModal.defaultProps = {
  onHide: () => { },
  show: false
}
