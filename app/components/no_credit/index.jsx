import BtnTryFree from '../btn-try-free/index.jsx'
import './no_credit.styl'

export default () => {
  const wave1 = config.urls.media + 'wave_1.svg'
  const wave2 = config.urls.media + 'wave_2.svg'
  const background = { backgroundImage: `url(${wave1}), url(${wave2}), linear-gradient(123deg, #591ec0, #6623db 28%, #7d3ee8 54%, #be95ff 113%)` }
  return (
    <div id='no_credit' style={background}>
      <div className='no_credit-content'>
        <p>{config.translations.no_credits.first_part_title}</p>
        <p>{config.translations.no_credits.second_part_title}</p>
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
