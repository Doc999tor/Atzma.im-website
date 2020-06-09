import SliderBtn from '../btn-slider/index.jsx'
import Pagination from '../pagination/index.jsx'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
import './index.styl'
const pagination = [1, 2, 3]
export default class Reviews extends React.Component {

  state = {
    slides: []
  }

  componentDidMount () {
    this.setState({
      slides: [...config.modules.feedback.data]
    })
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  render () {
    const params = {
      rebuildOnUpdate: true,
      observer: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: true,
      noSwiping: true,
      breakpoints: {
        1200: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }
    }
    const { slides } = this.state
    return (
      <div id='feedback'>
        <header className='header'>
          <h2>{config.translations.feedback.main_title}</h2>
          <p>{config.translations.feedback.subtitle}</p>
        </header>
        <div className='feedback_wrap'>
          {slides.length > 0 && <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
            {slides.map(item => {
              return (
                <div>
                  <FeedbackComponent customer={item} key={item.id} />
                </div>
              )
            })}
          </Swiper>}
        </div>
        <div className='feedback_pagination'>
          <SliderBtn action={this.goPrev} img='ic_arrow_left.svg' />
          <Pagination slides={pagination} />
          <SliderBtn action={this.goNext} img='ic_arrow_right.svg' />
        </div>
      </div>
    )
  }
}

function Rating (item) {
  return <div className='rating-stars'>
    {
      Array.from({ length: item }).map((r, i) => <img key={i} src={config.urls.media + 'star.svg'} />)
    }
  </div>
}
function FeedbackComponent ({ customer }) {
  return <figure className='slide'>
    <div className='pic_wrap'>
      <picture>
        <source className='client_pic' srcSet={config.urls.media_clients + customer.picture_web} type='image/webp' alt={config.translations.feedback.alt_pic} />
        <img className='client_pic' src={config.urls.media_clients + customer.picture} alt={config.translations.feedback.alt_pic} />
      </picture>
    </div>
    <figcaption>
      <h3>{customer.customer_name}</h3>
      <div className='review_info'>
        {Rating(customer.rating)}
        <p>{customer.text}</p>
      </div>
    </figcaption>
  </figure>
}
