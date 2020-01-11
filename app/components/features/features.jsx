import './features.styl'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
export default class Topnav extends React.Component {

  render () {
    const params = {
      slidesPerView: window.innerWidth <= 1024 ? 2 : 3,
      autoplay: 3000,
      spaceBetween: 0,
      loopFillGroupWithBlank: true,
      slidesPerColumn: window.innerWidth <= 1024 ? 3 : 2
    }
    return (
      <div id='features'>
        <header>
          <div className='main-text'><h2>{config.translations.features.content.title}</h2></div>
          <div className='desc'><p>{config.translations.features.content.description}</p></div>
        </header>
        <div className='features-content-box'>
          <Swiper {...params}>
            {config.modules.features.data.map((item, index) => {
              return (
                <div>
                  <Feature name={item.name} icon={item.icon} />
                </div>
              )
            })}
          </Swiper>
        </div>
      </div>
    )
  }
}

function Feature ({ name, icon }) {
  return <figure key={name} className='content-wrap'>
    <img src={config.urls.media_features + icon} alt={config.translations.features.content.data[name].name} />
    <figcaption>{config.translations.features.content.data[name].name}</figcaption>
  </figure>
}
