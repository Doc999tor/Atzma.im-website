import BtnTryFree from '../btn-try-free/index.jsx'
import './no_credit.styl'

export default () => {
  return (
    <div id='no_credit'>
      <img className='wave_1' src={`${config.urls.media}wave_1.svg`} alt='wave' loading='lazy' />
      <img className='wave_2' src={`${config.urls.media}wave_2.svg`} alt='wave' loading='lazy' />
      <div className='glow_1' />
      <div className='glow_2' />
      <div className='glow_3' />
      <div className='glow_4' />
      <div className='no_credit-content'>
        <h2>
          <span>{config.translations.no_credits.first_part_title}</span>
          <span>{config.translations.no_credits.second_part_title}</span>
        </h2>
        <BtnTryFree label={config.translations.no_credits.button_label} />
      </div>
      <div className={'img-compound' + (config.isRTL ? ' compound-dir-rtl' : ' compound-dir-ltr')}>
        <div className='phone-container'>
          <picture>
            <source srcSet={`${config.urls.media}pic_phone@2x.webp`} className='phone-frame' alt='pic_phone' type='image/webp' loading='lazy' />
            <img className='phone-frame' src={`${config.urls.media}pic_phone@2x.png`} alt='pic_phone' loading='lazy' />
          </picture>
          <picture>
            <source srcSet={`${config.urls.media}pic_screen@2x.webp`} className='screen_pic' type='image/webp' loading='lazy' />
            <img className='screen_pic' src={`${config.urls.media}pic_screen@2x.png`} loading='lazy' />
          </picture>
        </div>
      </div>
    </div>
  )
}
