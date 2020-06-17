const { Link } = ReactRouterDOM
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
            Object.keys(config.navigation).map(item => {
              if (item === 'hero' || item === 'feedback') return false
              if (item === 'pricing') {
                return <Link to={config.baseUrl + '/pricing'}>
                  {config.translations.navigation[item].name}
                </Link>
              }
              return (<a key={item} href={`${config.baseUrl}${config.navigation[item].link}`}>
                {config.translations.navigation[item].name}
              </a>)
            }
            )
          }
        </nav>
        <div className='log-in'>
          <a className='login-btn' href={config.urls.login}>{config.translations.hero.log_in}</a>
          <a className='sign-in-btn active-btn' href={config.urls.signup}><span>{config.translations.hero.sign_up}</span></a>
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
