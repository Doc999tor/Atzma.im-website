import {mediaReplaceService, mediaDeleteService} from 'project-services'
import {formatDate, Modal, Swiper} from 'project-components'
import './media-modal.styl'

export default class MediaModal extends React.Component {

  static propTypes = {
    initialSlide: PropTypes.number.isRequired,
    isOpenGallery: PropTypes.bool.isRequired,
    handleGallery: PropTypes.func.isRequired
  }
  state = {
    isEditNote: false,
    textareaValue: '',
    activeIndex: 0
  }

  onEdit (i) {
    if (i.note)
    {this.setState({
      isEditNote: !this.state.isEditNote, 
      textareaValue: config.data.gallery[this.state.activeIndex].note
    })} else
    { this.setState({
      isEditNote: !this.state.isEditNote
    })
    }
  }
  componentDidUpdate () {
    if (this.state.isEditNote) {
      const {id} = config.data.gallery[this.state.activeIndex]
      document.getElementById('textarea_id_' + id).focus()
    }
  }

  typeItem = (i, k) => {
    if (this.state.activeIndex === k || this.state.activeIndex === k + 1 || this.state.activeIndex === k - 1) {
      if (i.name.indexOf('mp4') !== -1) { return <video src={config.urls.gallery + i.name} controls /> } else
      if (i.name.indexOf('webm') !== -1) { return <video src={config.urls.gallery + i.name} controls /> } else
      if (i.name.indexOf('pdf') !== -1) {
        return <iframe src={config.urls.preview_pdf.replace('{url}', config.urls.main + config.urls.url_pdf + i.name)} />
      } else
      if (i.name.indexOf('mp3') !== -1) {
        return (<div>
          <img className='audio-img' src={config.urls.media + 'audio_file.png'} />
          <audio src={config.urls.gallery + i.name} controls />
        </div>)
      } else
      if (i.name.split(/png|jpg|bmp|jpeg|gif|webp/i).pop() !== -1) { return (
        <div>
          <img src={config.urls.gallery + i.name} />
          <div className='modal-footer'>
            <div className='main'>
              <div className='row1'>
                <span className='name'>{i.name}</span>
                <div className='icons'>
                  <img src={config.urls.media + 'pencil-edit.svg'}
                    style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}}
                    onClick={() => this.onEdit(i)} />
                  <img src={config.urls.media + 'delete.svg'} onClick={() => this.delete(config.data.gallery[this.state.activeIndex].id)} />
                </div>
              </div>
              <div className='row2'>
                <div><img className='icon' src={config.urls.media + 'ic_day.jpg'} style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} /></div>
                <span className='date'>{formatDate(i.date)}</span>
              </div>
            </div>
            {(i.note || this.state.isEditNote) && <div className='data'>
              <span className={this.state.isEditNote ? 'hidden' : 'note'}>
                {config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].note}</span>
              <div className={this.state.isEditNote ? 'edit-form' : 'hidden'}>
                <textarea id={'textarea_id_' + i.id} className={this.state.isEditNote ? 'textarea' : 'hidden'}
                  onChange={e => this.setState({textareaValue: e.target.value})} value={this.state.textareaValue}
                  placeholder={this.state.textareaValue ? this.state.textareaValue : config.translations.add_note}
                />
                <div className='action'>
                  <button className={this.state.isEditNote ? 'btn-save' : 'hidden'}
                    onClick={() => this.replace(config.data.gallery[this.state.activeIndex].id)}>
                    {config.translations.save}
                  </button>
                </div>
              </div>
            </div>}
          </div>
        </div>
      )}
    }
  }
  replace = id => {
    // debugger
    const body = `note=${this.state.textareaValue}`
    mediaReplaceService(body, id).then(r => {
      if (r.status === 204) {
        config.data.gallery[this.state.activeIndex].date = moment().format('YYYY-MM-DD HH:mm')
        config.data.gallery[this.state.activeIndex].note = this.state.textareaValue
        // this.state.textareaValue = config.data.gallery[this.state.activeIndex].note
        this.setState({isEditNote: false, textareaValue: ''})
      }
    })
  }
  delete = id => {
    mediaDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.gallery.splice(this.state.activeIndex, 1)
        this.props.handleGallery()
        this.setState({activeIndex: 0})
      }
    })
  }
  // componentDidMount = () => {
  //   this.nameInput.focus()
  // }
  componentDidMount = () => {
    var divNode = document.createElement('div')
    var divNode2 = document.createElement('div')
    const url = `${config.urls.media}ic_left.svg`
    const url2 = `${config.urls.media}ic_right.svg`
    divNode.innerHTML = `<style>
    .swiper-button-prev{
      content: url(${url});
      width: 15px;
      height: 15px;
      padding: 4px;
    }
    </style>`
    document.body.appendChild(divNode)
    divNode2.innerHTML = `<style>
    .swiper-button-next{
      content: url(${url2});
      width: 15px;
      height: 15px;
      padding: 4px;
    }
    </style>`
    document.body.appendChild(divNode2)
  }
  changeSlide = e => {
    e.container[0].childNodes[0].style.transitionDuration = '300ms'
    this.setState({
      isEditNote: false,
      textareaValue: ''
    })
  }
  render () {
    return (
      <Modal show={this.props.isOpenGallery} onHide={this.props.handleGallery}>
        <div className='modal-body'>
          <img className={'close-button'} src={config.urls.media + 'back-del.svg'}
            onClick={() => { this.props.handleGallery() }} />
          <Swiper observer onSlideChangeStart={e => this.changeSlide(e)}
            nextButton={config.isRTL ? '.swiper-button-prev-rtl' : '.swiper-button-next'}
            prevButton={config.isRTL ? '.swiper-button-next-rtl' : '.swiper-button-prev'}
            onSetTranslate={e => this.setState({activeIndex: e.activeIndex})}
            slidesPerView='auto'
            initialSlide={this.props.initialSlide}>
            {config.data.gallery.map((i, k) => (<div key={k} className='gallery-swiper-wrap'>{this.typeItem(i, k)}</div>))}
          </Swiper>
        </div>
      </Modal>
    )
  }
}
