import './index.styl'

export default ({ name, current }) => {
  return (
    <div>
      <div className={`${'slide'} ${current ? 'active' : ''}`}>
        <picture>
          <source srcSet={`${config.urls.hero_carousel}${name}.webp`} type='image/webp' loading='lazy' />
          <img src={`${config.urls.hero_carousel}${name}.png`} alt={name} height='860' width='430' loading='lazy' />
        </picture>
      </div>
    </div>
  )
}