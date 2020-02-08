import './style.styl'
import { Logo } from '../../../logo/logo.jsx'
import DropDownMenu from './dropdown_menu/index.jsx'

export default class Header extends React.Component {
  render () {
    return (
      <div id='header'>
        <header className='contact_head'>
          <Logo />
          <nav className='top-nav'>
            {
              this.props.links.map(linkName => {
                const link = config.navigation[linkName]
                // const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                // if (window.location.hash && isChrome) {
                //   setTimeout(function () {
                //     const hash = window.location.hash
                //     window.location.hash = ''
                //     window.location.hash = hash
                //   }, 300)
                // }
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
                <div className='img-wrap'>
                  <img src={config.urls.media + 'ic_language.svg'} />
                </div>
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
}
