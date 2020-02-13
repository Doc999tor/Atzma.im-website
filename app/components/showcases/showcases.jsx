import './showcases.styl'
export default class Topnav extends React.Component {
  render () {
    return (
      <div id='showcases'>
        <div className='main-box'>
          <div className='sub-box'>
            <h2>{config.translations.showcases.main_title}</h2>
            <p>{config.translations.showcases.description}</p>
            <a className='try-for-free-btn' href={config.urls.signup}>
              <svg>
                <use xlinkHref={config.urls.media + 'ic_try.svg#ic_try'} />
              </svg>
              {config.translations.showcases.button_label}</a>
          </div>
          <div className='img-container'>
            {config.modules.showcases.phones_pics.map((picName, i) => (
              <>
                <picture key={picName}>
                  <source srcSet={`${config.urls.media_showcases}${picName}.webp`} className={'icon-' + (i + 1) + (config.isRTL ? ' rtl-icon-' + (i + 1) : ' ltr-icon-' + (i + 1))} alt={config.translations.showcases.phones_pics_alt[i]} type='image/webp' loading='lazy' />
                  <img className={'icon-' + (i + 1) + (config.isRTL ? ' rtl-icon-' + (i + 1) : ' ltr-icon-' + (i + 1))} src={`${config.urls.media_showcases}${picName}.png`} alt={config.translations.showcases.phones_pics_alt[i]} loading='lazy' />
                </picture>
                <picture key={i + 'frame'}>
                  <source srcSet={config.urls.media_showcases + 'iphone-mockup.webp'} className={'frame-' + (i + 1) + (config.isRTL ? ' rtl-frame-' + (i + 1) : ' ltr-frame-' + (i + 1))} type='image/webp' loading='lazy' />
                  <img className={'frame-' + (i + 1) + (config.isRTL ? ' rtl-frame-' + (i + 1) : ' ltr-frame-' + (i + 1))} src={config.urls.media_showcases + 'iphone-mockup.png'} loading='lazy' />
                </picture>
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
