import Header from '../contact-us/components/header/index.jsx'
import HeroCarousel from '../carousel/index.jsx'
import BtnTryFree from '../btn-try-free/index.jsx'

import './hero.styl'
export default () => {
  return (
    <div id='hero'>
      <picture>
        <source className='hero_background' srcSet={`${config.urls.media}hero_background.webp`} type='image/webp' loading='lazy' />
        <img className='hero_background' src={`${config.urls.media}hero_background.jpg`} loading='lazy' />
      </picture>
      <div className='sup-block'>
        <Header />
        <div className='header-content-wrap'>
          <div className='header-content-wrap-text'>
            <HeroCarousel />
            <BtnTryFree label={config.translations.hero.button_label} absolute />
          </div>
        </div>
      </div>
    </div>
  )
}
