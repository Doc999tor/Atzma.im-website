import BtnTryFree from '../btn-try-free/index.jsx'
import './no_credit.styl'

export default () => {
  const wave1 = config.urls.media + 'wave_1.svg'
  const wave2 = config.urls.media + 'wave_2.svg'
  const wave3 = config.urls.media + 'wave_3.svg'
  return (
    <div id='no_credit'>
      <div className={'glow_1' + (config.isRTL ? ' rtr_glow_1' : ' ltr_glow_1')} />
      <div className={'glow_2' + (config.isRTL ? ' rtr_glow_2' : ' ltr_glow_2')} />
      <div className={'glow_3' + (config.isRTL ? ' rtr_glow_3' : ' ltr_glow_3')} />
      <div className={'glow_4' + (config.isRTL ? ' rtr_glow_4' : ' ltr_glow_4')} />
      <img className={'wave_1' + (config.isRTL ? ' rtr_wave_1' : ' ltr_wave_1')} src={wave1} />
      <img className={'wave_2' + (config.isRTL ? ' rtr_wave_2' : ' ltr_wave_2')} src={wave2} />
      <img className={'wave_3' + (config.isRTL ? ' rtr_wave_3' : ' ltr_wave_3')} src={wave3} />
      <div className='no_credit-content'>
        <h2>
          <span>{config.translations.no_credits.first_part_title}</span>
          <span>{config.translations.no_credits.second_part_title}</span>
        </h2>
        <BtnTryFree label={config.translations.no_credits.button_label} />
      </div>
      <div className={'img-compound' + (config.isRTL ? ' compound-dir-rtl' : ' compound-dir-ltr')}>
        <picture>
          <source srcSet={`${config.urls.media}${config.isRTL ? 'pic_phone_rtl.webp' : 'pic_phone.webp'}`} className='phone-frame' alt='pic_phone' type='image/webp' loading='lazy' />
          <img className='phone-frame' src={`${config.urls.media}${config.isRTL ? 'pic_phone_rtl.png' : 'pic_phone.png'}`} alt='pic_phone' loading='lazy' />
        </picture>
      </div>
    </div>
  )
}
