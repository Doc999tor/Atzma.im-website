import { Logo } from '../logo/logo.jsx'

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
                Array.from({length: 7}).map(DecorativeCircle)
              }
            </div>
            <div className='header-wrap'>
              <Logo />
              <nav className='top-nav'>
                {
                  this.props.links.map(linkName => {
                    const link = config.navigation[linkName]
                    if (link) {
                      return (<a href={`${location.pathname}${link.link}`}>
                        {config.translations.navigation[linkName].name}
                      </a>)
                    }
                  })
                }
              </nav>
              <div className='log-in'>
                <a className='login-btn' href={config.urls.login}>{config.translations.hero.log_in}</a>
                <a className='sign-in-btn active-btn' href={config.urls.signup}>{config.translations.hero.sign_up}</a>
              </div>
            </div>
            <div className='header-content'>
              <div className='header-content-wrap'>
                <div className='header-content-wrap-text'>
                  <h1>{config.translations.hero.main_title}</h1>
                  <div className='header-desc'>
                    <p>{config.translations.hero.description}</p>
                  </div>
                  <a className='active-btn' href={config.urls.signup}>{config.translations.hero.join_us}</a>
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
  return <img className={ `ellipse-${i+1}` } src={config.urls.media + `ellipse${i+1}.svg`} alt='' role='presentation' />
}