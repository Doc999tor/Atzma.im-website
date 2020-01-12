import Title from './title.jsx'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
import './index.styl'

export default class Slide extends React.Component {

  render () {
    const params = {
      slidesPerView: 1,
      effect: 'fade',
      autoplay: config.modules.hero.carousel_time || 2000,
      spaceBetween: 10,
      loop: true,
      containerClass: config.isRTL ? 'right-swipe' : 'left-swipe'
    }
    return (
      <Swiper {...params}>
        {config.translations.hero.carousel_text.map((item, i) => (
          <div>
            <Title item={item} />
          </div>
        ))}
      </Swiper>
    )
  }
}
