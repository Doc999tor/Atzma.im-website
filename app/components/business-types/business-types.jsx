import Swiper from '../../../components-lib/Swiper/Swiper.js'
import './business-types.styl'

export default class BusinessTypes extends React.Component {
  // componentDidMount = () => {
  //   var firstButton = document.createElement('div')
  //   var secButton = document.createElement('div')
  //   const url = `${config.urls.media}ic_arrow_left.svg`
  //   const url2 = `${config.urls.media}ic_arrow_right.svg`
  //   if (!config.isRTL) {
  //     firstButton.innerHTML = `<style>
  //     .swiper-button-prev{
  //       content: url(${url});
  //       padding: 4px;
  //     }
  //     </style>`
  //     document.body.appendChild(firstButton)
  //     secButton.innerHTML = `<style>
  //     .swiper-button-next{
  //       content: url(${url2});
  //       padding: 4px;
  //     }
  //     </style>`
  //     document.body.appendChild(secButton)
  //   } else {
  //     firstButton.innerHTML = `<style>
  //   .swiper-button-prev-rtl{
  //     content: url(${url});
  //     padding: 4px;
  //   }
  //   </style>`
  //     document.body.appendChild(firstButton)
  //     secButton.innerHTML = `<style>
  //   .swiper-button-next-rtl{
  //     content: url(${url2});
  //     padding: 4px;
  //   }
  //   </style>`
  //     document.body.appendChild(secButton)}
  // }
  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }
  render () {
    let width = document.documentElement.clientWidth
    const businessTypes = this.props.businessTypes
    const params = {
      slidesPerView: (width >= 950) ? 3 : 2,
      spaceBetween: 50,
      pagination: '.swiper-pagination'
    }
    return (
      <div id='business-types'>
        <div className='header'>
          <div className='main-text'><h2>{config.translations.business_types.main_title}</h2></div>
          <div className='desc'><p>{config.translations.business_types.subtitle}</p></div>
        </div>
        <div className='content-box'>
          <div className='prev-btn' onClick={this.goPrev}>
            <img src={config.urls.media + 'ic_arrow_left.svg'} />
          </div>
          <Swiper
            {...params}
            ref={node => { if (node) this.swiper = node.swiper }}
            // nextButton={config.isRTL ? '.swiper-button-prev-rtl' : '.swiper-button-next'}
            // prevButton={config.isRTL ? '.swiper-button-next-rtl' : '.swiper-button-prev'}
          >
            {businessTypes.map((i, k) => (
              <div key={k} >
                <figure>
                  <picture>
                    <source srcSet={config.urls.media + i.icon} alt={config.translations.business_types.main_title} />
                    <img src={config.urls.media + i.icon_web} alt={config.translations.business_types.main_title} />
                  </picture>
                  <figcaption>
                    <h3>{i.name}</h3>
                    <p>{i.desc}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Swiper>
          <div className='next-btn' onClick={this.goNext}>
            <img src={config.urls.media + 'ic_arrow_right.svg'} />
          </div>
        </div>
      </div>
    )
  }
}
