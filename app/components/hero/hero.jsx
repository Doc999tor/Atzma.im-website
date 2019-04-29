import './hero.styl'
export default class Hero extends React.Component {
  getLink = i => {
    const getOffsetSum = () => {
      let e = document.getElementById(i.url.replace('#', ''))
      let top = 0
      while (e) {
        top = top + parseFloat(e.offsetTop)
        e = e.offsetParent
      }
      return Math.round(top)
    }
    let e = document.getElementById(i.url.replace('#', ''))
    let scroll = e.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}bg_top.svg')`
    }
    const secBgr = {
      backgroundImage: `url('${config.urls.media}bg_top_22.svg')`
    }
    let navigation = config.modules.navigation
    return (
      <div id='hero' style={bgrImg}>
        <div className='top'>
          <div className='relative-top'>
            <img className='ellipse-1' src={config.urls.media + 'ellipse1.svg'} alt='' role='presentation' />
            <img className='ellipse-2' src={config.urls.media + 'ellipse2.svg'} alt='' role='presentation' />
            <img className='ellipse-3' src={config.urls.media + 'ellipse3.svg'} alt='' role='presentation' />
            <img className='ellipse-4' src={config.urls.media + 'ellipse4.svg'} alt='' role='presentation' />
            <img className='ellipse-5' src={config.urls.media + 'ellipse5.svg'} alt='' role='presentation' />
            <img className='ellipse-6' src={config.urls.media + 'ellipse2.svg'} alt='' role='presentation' />
            <img className='ellipse-7' src={config.urls.media + 'ellipse5.svg'} alt='' role='presentation' />
            <img className='ellipse-8' src={config.urls.media + 'ellipse8.svg'} alt='' role='presentation' />
            <img className='ellipse-9' src={config.urls.media + 'ellipse2.svg'} alt='' role='presentation' />
          </div>
          <div className='header-wrap'>
            <div className='logo-wrap'>
              <img src={config.urls.media + 'ic_logo.svg'} />
              <div>{config.translations.hero.main_logo}</div>
            </div>
            <nav>
              {navigation.map((i, k) => (
                <div key={k} onClick={() => this.getLink(i)} className='nav-btn'> {i.name}</div>
              ))}
            </nav>
            <div className='log-in'>
              <a className='login-btn'>{config.translations.hero.log_in}</a>
              <a className='sign-in-btn'>{config.translations.hero.sign_up}</a>
            </div>
          </div>
          <div className='header-content'>
            <div className='header-content-wrap'>
              <div className='header-content-wrap-text'>
                <h1>{config.translations.hero.main_title}</h1>
                <div className='header-desc'>
                  <p>{config.translations.hero.description}</p>
                </div>
                <button>
                  <p>{config.translations.hero.join_us}</p>
                </button>
              </div>
            </div>
            <div className='wrap-calendar'>
              <img src={config.urls.media + 'calendar.svg'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
