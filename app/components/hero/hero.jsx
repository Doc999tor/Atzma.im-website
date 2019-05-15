import './hero.styl'
export default class Hero extends React.Component {
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}bg_top.svg')`
    }
    const secBgr = {
      backgroundImage: `url('${config.urls.media}bg_top_22.svg')`
    }
    return (
      <div id='hero' style={bgrImg}>
        <div className='sup-block' style={secBgr}>
          <div className='top'>
            <div className='relative-top'>
              {
                Array.from({length: 9}).map(DecorativeCircle)
              }
            </div>
            <div className='header-wrap'>
              <div className='logo-wrap'>
                <img src={config.urls.media + 'ic_logo.svg'} alt={config.translations.hero.main_logo_label} />
                <div>{config.translations.hero.main_logo}</div>
              </div>
              <nav className='top-nav'>
                {Object.keys(config.modules)
                  .filter(moduleName => config.modules[moduleName].internal_link) // footer for example doesn't have a link to
                  .map(moduleName => { // all of these modules have internal links
                    const link = config.modules[moduleName].internal_link
                    return <a key={link} href={'#' + link.url}>{config.translations[link.name].internal_link_name}</a>
                  })}
              </nav>
              <div className='log-in'>
                <a className='login-btn' href={config.urls.login}>{config.translations.hero.log_in}</a>
                <a className='sign-in-btn' href={config.urls.signup}>{config.translations.hero.sign_up}</a>
              </div>
            </div>
            <div className='header-content'>
              <div className='header-content-wrap'>
                <div className='header-content-wrap-text'>
                  <h1>{config.translations.hero.main_title}</h1>
                  <div className='header-desc'>
                    <p>{config.translations.hero.description}</p>
                  </div>
                  <a href=''>{config.translations.hero.join_us}</a>
                </div>
              </div>
              <div className='wrap-calendar'>
                <img src={config.urls.media + 'calendar.svg'} alt={config.translations.hero.calendar_icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function DecorativeCircle(a, i) {
  return <img className={ `ellipse-${i+1}` } src={config.urls.media + `ellipse${i}.svg`} alt='' role='presentation' />
}