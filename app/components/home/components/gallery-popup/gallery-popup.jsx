import './gallery-popup.styl'

export default class GalleryPopup extends React.Component {
  constructor () {
    super()
    this.state = {
      animation: false,
      flag: false
    }
  }
  render () {
    return (
      <div id='gallery-new-modal'>
        <div className='gallery-modal-body'>
          <div className='gallery-modal-header'>
            <div className='img-back'><img onClick={this.props.handleMenuOff} src={config.urls.media + 'chevron-left.svg'} style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} /></div>
            <p>{config.translations.hot_links.gallery}</p>
          </div>
          {!this.props.previewOther ?
            <div className='img'>
              <div className='img-wrap'>{this.props.preview}</div>
            </div>
            : <div className='img'>
              <div className='img-wrap-other'>
                {this.props.preview}
              </div>
            </div>}       
          <div className='gallery-modal-footer'>
            <div className='input-wrapper'>
              <img src={config.urls.media + 'edit-note.svg'} />
              <input className='gallery-modal-input'
                type='text-area'
                placeholder={config.translations.add_caption}
                onChange={this.props.handleDescBack}
              />
            </div>
            <button onClick={!this.props.flag && this.props.submit}>
              <div className='text-submit'>{config.translations.submit}</div>
              {this.props.flag
                ? <div className='submit-spin'><img src={config.urls.media + 'refresh-cw.svg'} /></div>
                : <img src={config.urls.media + 'upload.svg'} />}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
GalleryPopup.propTypes = {
  children: PropTypes.any,
  onHide: PropTypes.func,
  show: PropTypes.bool
}
GalleryPopup.defaultProps = {
  onHide: () => {},
  children: '',
  show: false
}
