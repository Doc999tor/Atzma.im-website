import BtnTryFree from '../btn-try-free/index.jsx'
import './no_credit.styl'

export default () => {
  const wave1 = config.urls.media + 'wave_1.svg'
  const wave2 = config.urls.media + 'wave_2.svg'
  const background = { backgroundImage: `url(${wave1}), url(${wave2}), linear-gradient(123deg, #591ec0, #6623db 28%, #7d3ee8 54%, #be95ff 113%)` }
  return (
    <div id='no_credit' style={background}>
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
        <picture>
          <source srcSet={`${config.urls.media}pic_phone.webp`} className='phone-frame' alt='pic_phone' type='image/webp' loading='lazy' />
          <img className='phone-frame' src={`${config.urls.media}pic_phone.png`} alt='pic_phone' loading='lazy' />
        </picture>
      </div>
    </div>
  )
}
