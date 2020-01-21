import Header from '../contact-us/components/header/index.jsx'
import Slide from '../carousel-text/slide.jsx'

import './hero.styl'
export default class Hero extends React.Component {
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}mask_pic_bg.png')`
    }
    const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
    const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
    return (
      <div id='hero' style={bgrImg}>
        <div className='sup-block'>
          <div className='top'>
            <div className='header-wrap'>
              <Header links={componentsForRendering}/>
            </div>
            <div className='header-content'>
              <div className='header-content-wrap'>
                <div className='header-content-wrap-text'>
                  <Slide />
                  <a className={'try-for-free-btn ' + (config.isRTL ? 'rtl' : 'ltr')} href={config.urls.signup}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                      <g id="ic_try" transform="translate(-88.5 -540.5)">
                        <path id="ic_join" d="M14.4 24a1.1 1.1 0 1 1 0-2.182h6a1.149 1.149 0 0 0 1.2-1.091V3.272a1.149 1.149 0 0 0-1.2-1.091h-6a1.149 1.149 0 0 1-1.2-1.091A1.149 1.149 0 0 1 14.4 0h6A3.447 3.447 0 0 1 24 3.272v17.456A3.447 3.447 0 0 1 20.4 24zm-4.449-6.865a1.022 1.022 0 0 1 0-1.542l2.752-2.5H1.2a1.1 1.1 0 1 1 0-2.182h11.5l-2.752-2.5a1.022 1.022 0 0 1 0-1.542 1.287 1.287 0 0 1 1.7 0l4.777 4.344A1.044 1.044 0 0 1 16.8 12a1.021 1.021 0 0 1-.233.645l-.018.022-.018.021-.019.021-.02.021-.042.041-4.8 4.363a1.289 1.289 0 0 1-1.7 0z" class="cls-1" transform="translate(89 541)" />
                      </g>
                    </svg>
                    {config.translations.hero.try_free}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
