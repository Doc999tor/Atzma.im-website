import { default as Swiper } from 'project-components/Swiper/Swiper.js'
import './index.styl'

export default () => {
  const params = {
    slidesPerView: 1,
    effect: 'fade',
    autoplay: config.modules.hero.carousel_time || 2000,
    spaceBetween: 10,
    autoplayDisableOnInteraction: false,
    loop: true,
    noSwiping: true,
    dir: 'rtl'
    // containerClass: config.isRTL ? 'right-swipe' : 'left-swipe'
  }
  return (
    <Swiper {...params}>
      {config.modules.hero.gallery.map((item, i) => (
        <div className='titles_carousel' key={i}>
          <div className='hero_title'>
            <h1>{config.translations.hero.carousel_text[i].title}</h1>
            <div className='hero-description'>
              <p>{config.translations.hero.carousel_text[i].description}</p>
            </div>
          </div>
          <div className='hero_screen'>
            <picture className='screen-picture'>
              <source className='screen-img' srcSet={`${config.urls.hero_carousel}${item}.webp`} type='image/webp' />
              <img className='screen-img' src={`${config.urls.hero_carousel}${item}.png`} alt={item} />
            </picture>
          </div>
        </div>
      ))}
    </Swiper>
  )
}
