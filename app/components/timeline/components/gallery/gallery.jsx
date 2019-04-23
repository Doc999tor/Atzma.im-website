import Share from '../share/share.jsx'
import {formatDate, dataURLtoFile, Swiper, Resize} from 'project-components'
import './gallery.styl'
const images = ['png', 'jpg', 'jpeg', 'svg', 'gif']
const video = ['mpeg4', 'mp4', 'mov', 'mpg', 'mpeg', 'webm']
const music = ['mp3']
export default class Gallery extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    i: PropTypes.object.isRequired
  }

  state = {
    expand: false
  }
  fileIcon = name => {
    let splitedName = name.split('.')
    let typeFile = splitedName[splitedName.length - 1].toLowerCase()
    if (images.find(i => i === typeFile)) return `${config.urls.media}image.svg`
    else if (video.find(i => i === typeFile)) return `${config.urls.media}video.svg`
    else if (music.find(i => i === typeFile)) return `${config.urls.media}audio.svg`
    else return `${config.urls.media}other.svg`
  }
  onError = (e, image) => {
    let target = e.target
    if (!e.target.src.endsWith(config.urls.media)) {
      target.classList.add('previewImg')
      target.src = config.urls.media + image
    }
  }
  typeItem = i => {
    let src, image
    let splitedName = i.name.split('.')
    let typeFile = splitedName[splitedName.length - 1].toLowerCase()
    if (video.find(i => i === typeFile)) {
      return (<div className='photo-wrap video-block'>
        <video className='media-vid' src={config.urls.gallery + i.name} controls />
      </div>)
    } else {
      if (typeFile === 'mp3') {
        return (<div className='photo-wrap music-block'>
          <img className='audio-img' src={config.urls.media + 'audio_gallery.svg'} />
          <audio src={config.urls.gallery + i.name} controls />
        </div>)
      } else
      if (typeFile === 'pdf') {
        src = config.urls.media + 'other_gallery.svg'; image = 'other_gallery.svg'
        return (<div className='photo-wrap other-file'>
          <img className='audio-img' src={`${config.urls.media}other_gallery.svg`} />
        </div>)
      } else if (images.find(i => i === typeFile)) { src = config.urls.gallery + i.name; image = 'image_gallery.svg' }
      return <div className='photo-wrap'>
        <img className='media-img'
          src={src} onError={e => { this.onError(e, image) }} />
      </div>
    }
  }

  render () {
    return (
      <div id='gallery-timeline'>
        <div className='header'>
          <div className='labels'>
            <img className='img-gallery' src={this.fileIcon(this.props.i.name)} />
            <span className='file-name'>{this.props.i.name}</span>
          </div>
          <div className='share-wrap'>
            <Share {...this.props} opt={{
              title: config.translations.share_title,
              text: config.translations.share_text,
              url: config.urls.gallery_sharing_base_url + this.props.i.name
            }} />
          </div>
        </div>
        <div className='order-in'>
          <div className='create-time'>
            <img src={`${config.urls.media}ic_time.svg`} />
            <span>{moment(this.props.i.date).format('HH:mm')}</span>
          </div>
          <div className='create-date'>
            <img src={`${config.urls.media}ic-day.svg`} />
            <span>{formatDate(this.props.i.date)}</span>
          </div>
        </div>
        {this.typeItem(this.props.i)}
        <div className={this.props.i.note ? 'note' : 'hidden'}>
          <div className='title'>
            <span>{`${config.translations.notes}`}</span>
          </div>
          <div className='gallery-note'>
            <div className='note-txt'>
              <p className={this.state.expand ? '' : 'ellipsis'}>{this.props.i.note}</p>
            </div>
            <div className='text-expand'>
              <span><img className={this.state.expand ? 'rotate' : ''} src={`${config.urls.media}ic-expand.svg`} onClick={() => this.setState({expand: !this.state.expand})} /></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
