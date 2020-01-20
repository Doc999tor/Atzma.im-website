import './index.styl'

export default ({ item }) => {
  return (
    <div className={'slide ' + (config.isRTL ? 'rtl-slide' : 'ltr-slide')}>
      <picture>
        <source srcSet={`${config.urls.hero_carousel}${item.icon}.webp`} type='image/webp' loading='lazy' />
        <img src={`${config.urls.hero_carousel}${item.icon}.png`} alt={item.icon} height='860' width='430' loading='lazy' />
      </picture>
    </div>
  )
}