import './showcases.styl'
export default class Topnav extends React.Component {
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}bg_showcase.svg')`,
      backgroundRepeat: `no-repeat`
    }
    return (
      <div id='showcases' style={bgrImg}>
        <div className='main-box'>
          <img src={config.urls.media + 'ellipse_showcase_1.svg'} className='ellipse-1' alt='' role='presentation' />
          <img src={config.urls.media + 'ellipse_showcase_1.svg'} className='ellipse-2' alt='' role='presentation' />
          <img src={config.urls.media + 'ellipse_showcase_1.svg'} className='ellipse-3' alt='' role='presentation' />
          <img src={config.urls.media + 'ellipse_showcase_2.svg'} className='ellipse-4' alt='' role='presentation' />
          <img src={config.urls.media + 'ellipse_showcase_2.svg'} className='ellipse-5' alt='' role='presentation' />
          <img src={config.urls.media + 'ellipse_showcase_3.svg'} className='ellipse-6' alt='' role='presentation' />
          <div className='sub-box'>
            <div className='main-desc'>
              <h2>{config.translations.showcases.main_title}</h2>
            </div>
            <div className='desc'>
              <p>{config.translations.showcases.description}</p>
            </div>
            <div className='btn-more'>
              <a href=''>{config.translations.showcases.learn_more}</a>
            </div>
          </div>
          <picture>
            <img src={config.urls.media + 'iphone.webp'} className='first-phone' alt={config.translations.showcases.main_title} />
            <img src={config.urls.media + 'iphone.webp'} className='second-phone' alt={config.translations.showcases.main_title} />
            <img src={config.urls.media + 'iphone.webp'} className='third-phone' alt={config.translations.showcases.main_title} />
            <img src={config.urls.media + 'iphone.webp'} className='last-phone' alt={config.translations.showcases.main_title} />
          </picture>
        </div>
      </div>
    )
  }
}
