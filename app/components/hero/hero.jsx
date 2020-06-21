import Header from '../contact-us/components/header/index.jsx'
import HeroCarousel from '../carousel/index.jsx'

import './hero.styl'
export default () => {
  return (
    <div id='hero'>
      <picture>
        <source className='hero_background' srcSet={`${config.urls.media}hero_background.webp`} type='image/webp' loading='lazy' />
        <img className='hero_background' src={`${config.urls.media}hero_background.jpg`} alt='background' loading='lazy' />
      </picture>
      <div className='sup-block'>
        <Header />
        <div className='header-content-wrap'>
          <div className='header-content-wrap-text'>
            <HeroCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}
