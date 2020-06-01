import Header from '../contact-us/components/header/index.jsx'
import HeroCarousel from '../carousel/index.jsx'
import BtnTryFree from '../btn-try-free/index.jsx'

import './hero.styl'
export default () => {
  const bgrImg = {
    backgroundImage: `url('${config.urls.media}mask_pic_bg.png')`
  }
  return (
    <div id='hero' style={bgrImg}>
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
