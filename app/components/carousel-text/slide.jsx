import Title from './title.jsx'
import Pics from './pics.jsx'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
import './index.styl'

export default class Slide extends React.Component {

  render () {
    const params = {
      slidesPerView: 1,
      effect: 'fade',
      autoplay: config.modules.hero.carousel_time || 2000,
      spaceBetween: 10,
      autoplayDisableOnInteraction: false,
      loop: true,
      noSwiping: true,
      containerClass: config.isRTL ? 'right-swipe' : 'left-swipe'
    }
    const pictures = <img className='iphone-img' src={config.urls.media + 'phone.png'} height='860' width='430' loading='lazy' alt='phone animation' />
    return (
      <Swiper {...params}>
        {config.translations.hero.carousel_text.map((item, i) => (
          <div>
            <Title item={item} />
              <div className='wrapper'>
                {pictures}
                <Pics item={item} key={i} />
              </div>
          </div>
        ))}
      </Swiper>
    )
  }
}
