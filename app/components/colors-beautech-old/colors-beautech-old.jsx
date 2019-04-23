import AccessRights from '../access-rights/access-rights.jsx'
import { Swiper } from 'project-components'
import './colors-beautech-old.styl'

class ColorsBeautechOld extends React.Component {
  state = {
    ind: 0
  }
  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }
  chengeDate = e => this.setState({ ind: e.activeIndex })
  render () {
    const { ind } = this.state
    const translations = config.translations.colors_beautech
    const beautech = config.data.colors_beautech.sort((a, b) => moment(a.date) - moment(b.date))
    return (
      <div id='punch_cards_old'>
        <div className='btn-wrap'>
          <div className={'btn ' + (config.isRTL ? 'rtl' : 'ltr')} onClick={() => window.history.go(-1)}><img src={`${config.urls.media}chevron-left.svg`} style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} /></div>
          <div className='middle-section'>
            {beautech[ind].type && <p className='middle-type'>{beautech[ind].type}</p>}
            <p className='middle-date'>{`${translations.date} ${moment(beautech[ind].date).format('DD/MM/YY')}`}</p>
          </div>
          {/* <div className={`btn ${this.state.ind === beautech.length - 1 ? 'ban' : ''}`}><img src={`${config.urls.media}chevron-right.svg`} /></div> */}
        </div>
        <div className='highlights'>
          <img className='fill-color' src={`${config.urls.media}icons-8-fill-color.png`} />
          <div className='hh'>
            <h2>{translations.colors}</h2>
          </div>
          <div>
            <img className='barber' src={`${config.urls.media}parikmakheri-stilisti.png`} />
          </div>
        </div>
        <div className='swiper'>
          <div id='swiper-wrap-punch'>
            <Swiper onSlideChangeEnd={this.chengeDate} ref={node => { if (node) this.swiper = node.swiper }} slidesPerView='auto' centeredSlides observer initialSlide={beautech.length - 1}>
              {beautech.map(i => <div>
                <div className='main'>
                  {i.company && <div className='main-top-title'><p>{translations.brand}</p>
                    <span className='value'>{i.company}</span>
                  </div>}
                  {i.series && <p className='second-top-title'><span>{translations.series}</span>
                    <span className='value'>{i.series}</span></p>}
                  {i.colors && i.colors.map(element => <div className='colors'>
                    <div className='colors-item'>
                      <img src={`${config.urls.media}icons-8-fill-color.png`} />
                      <div className='colors-info'>
                        <span className='main-title'><span>{translations.color}</span>
                          <span className='value'>{element.color}</span></span>
                        <span className='main-title'><span>{translations.quantity}</span>
                          <span className='value'>{element.dosing}</span></span>
                      </div>
                    </div>
                    {element.comments && <p className='main-title color-comments'><span>{translations.comments}</span><span className='value'>{element.comments}</span></p>}
                  </div>
                  )}
                </div>
                {i.oxy && <div className='oxy'>
                  <div className='oxy-header'>
                    <div className='hh'>
                      <img src={`${config.urls.media}oxygen.png`} />
                    </div>
                    <div className='hh'>
                      <h2>{translations.oxygen}</h2>
                    </div>
                  </div>
                  <div className='oxy-body'>
                    {i.oxy.map(element => <div className='oxy-info'>
                      <div className='oxy-item'>
                        <img src={`${config.urls.media}percent.svg`} />
                        <div className='concentration'>
                          <p className='main-title'><span>{translations.concentration}</span><span className='value'>{element.percent}</span></p>
                          {element.dosing && <p className='main-title'><span>{translations.quantity}</span><span className='value'>{element.dosing}</span></p>}
                        </div>
                      </div>
                    </div>)}
                  </div>
                </div>}
                {(i.comments || i.waiting_time) && <div className='common'>
                  {i.comments && <div className='common-item'>
                    <div className='common-img'>
                      <img src={`${config.urls.media}feather.svg`} />
                    </div>
                    <div>
                      <p className='main-title'><span>{translations.comments}</span><span className='value'>{i.comments}</span></p>
                    </div>
                  </div>}
                  {i.waiting_time && <div className='common-item'>
                    <div className='common-img'>
                      <img src={`${config.urls.media}time-left.png`} />
                    </div>
                    <div>
                      <p className='main-title'><span>{translations.waiting_time}</span><span className='value'>{i.waiting_time}</span></p>
                    </div>
                  </div>}
                </div>}
              </div>)}
            </Swiper>
          </div>
        </div>
        {beautech.length > 1 && <div className='buttons-bot'>
          <div className={'buttons-bot-wrap-left ' + (config.isRTL ? 'rtl-dir-left' : 'ltr-dir-left')} onClick={this.goPrev}>{config.translations.colors_beautech.back}
            <div className='btn-bot-img'><img src={config.urls.media + 'arrow-left.svg'} style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} /></div>
          </div>
          <div className={'buttons-bot-wrap-right ' + (config.isRTL ? 'rtl-dir-right' : 'ltr-dir-right')} onClick={this.goNext}>{config.translations.colors_beautech.next}
            <div className='btn-bot-img'><img src={config.urls.media + 'arrow-right.svg'} style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} /></div>
          </div>
        </div>}
      </div>
    )
  }
}
export default AccessRights(ColorsBeautechOld)
