import './index.styl'

export default ({ item }) => {
  return (
    <div className={'slide ' + (config.isRTL ? 'rtl-slide' : 'ltr-slide')}>
      <picture>
        <source src={`${config.urls.hero_carousel}${item.icon}.webp`} type='image/webp' />
        <img className='carousel-img' src={`${config.urls.hero_carousel}${item.icon}.png`} alt={item.icon} />
      </picture>
    </div>
  )
}