import './style.styl'
import { Logo } from '../../../logo/logo.jsx'

export default class Header extends React.Component {
  render () {
    return (
      <div id='header'>
        <div className='contact_head'>
          <Logo />
          <nav className='top-nav'>
            {
              this.props.links.map(linkName => {
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
          </div>
        </div>
      </div>
    )
  }
}
