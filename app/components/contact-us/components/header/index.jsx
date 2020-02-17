import './style.styl'
import { Logo } from '../../../logo/logo.jsx'
import DropDownMenu from './dropdown_menu/index.jsx'

export default ({ links }) => {
  return (
    <div id='header'>
      <header className='contact_head'>
        <Logo />
        <nav className='top-nav'>
          {
            links.map(linkName => {
              const link = config.navigation[linkName]
              return (<a href={`${location.pathname}${link.link}`}>
                {config.translations.navigation[linkName].name}
                      </a>)
            })
          }
        </nav>
        <div className='log-in'>
          <a className='login-btn' href={config.urls.login}>{config.translations.hero.log_in}</a>
          <a className='sign-in-btn active-btn' href={config.urls.signup}>{config.translations.hero.sign_up}</a>
          <div className='lang-block'>
            <div className='lang_dropdown'>
              <svg>
                <use xlinkHref={config.urls.media + 'ic_language.svg#ic_language'} />
              </svg>
              <div className='lang-text'>
                {Object.keys(config.translations.languages).find(i => i === lang)}
              </div>
              <DropDownMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
