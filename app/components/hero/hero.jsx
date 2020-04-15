import Header from '../contact-us/components/header/index.jsx'
import HeroCarousel from '../carousel/index.jsx'

import './hero.styl'
export default () => {
  const [loaded, setLoad] = React.useState(false)
  const addShadow = () => setLoad(true)
  const bgrImg = {
    backgroundImage: `url('${config.urls.media}mask_pic_bg.png')`
  }
  const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
  const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
  return (
    <div id='hero' style={bgrImg}>
      <div className='sup-block'>
        <Header links={componentsForRendering} />
        <div className='header-content-wrap'>
          <div className='header-content-wrap-text'>
            <HeroCarousel />
            <img onLoad={addShadow} className={'iphone-border ' + (config.isRTL ? `border_rtl${loaded ? ' border_shadow' : ''}` : `border_ltr${loaded ? ' border_shadow' : ''}`)} src={config.urls.media + 'phone.png'} height='860' width='430' loading='lazy' alt='phone animation' />
            <a className={'try-for-free-btn ' + (config.isRTL ? 'rtl' : 'ltr')} href={config.urls.signup}>
              <svg>
                <use xlinkHref={config.urls.media + 'ic_try.svg#ic_try'} />
              </svg>
              {config.translations.hero.button_label}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
