import './style.styl'
import { Logo } from '../../../logo/logo.jsx'
import LangModal from '../../../language-modal/index.jsx'

export default class Header extends React.Component {

  state = {
    showModal: false
  }

  changeLanguage = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div id='header'>
        <div className='contact_head'>
          <Logo />
          <nav className='top-nav'>
            {
              this.props.links.map(linkName => {
                const link = config.navigation[linkName]
                const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                if (window.location.hash && isChrome) {
                  setTimeout(function () {
                    const hash = window.location.hash
                    window.location.hash = ''
                    window.location.hash = hash
                  }, 300)
                }
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
          <div className='lang-block' onClick={this.changeLanguage}>
            <div className='img-wrap'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='svg-fill'>
                <g id="ic_language" transform="translate(-1 -1)">
                  <path id="Combined_Shape-2" d="M12 24h-.034A12 12 0 0 1 3.515 3.515 11.919 11.919 0 0 1 11.974 0h.051a12 12 0 0 1 8.459 20.485A11.918 11.918 0 0 1 12.034 24zm2.483-2.5a9.827 9.827 0 0 0 7.275-8.409H17.4a17.758 17.758 0 0 1-2.917 8.409zm-4.965 0A17.806 17.806 0 0 1 6.6 13.091H2.242A9.825 9.825 0 0 0 9.518 21.5zM12 21.217a15.677 15.677 0 0 0 3.213-8.127H8.791A15.716 15.716 0 0 0 12 21.217zm9.758-10.308A9.825 9.825 0 0 0 14.482 2.5a17.816 17.816 0 0 1 2.918 8.409zm-6.549 0A15.719 15.719 0 0 0 12 2.783a15.681 15.681 0 0 0-3.212 8.127zm-8.609 0A17.744 17.744 0 0 1 9.518 2.5a9.825 9.825 0 0 0-7.276 8.409z" class="cls-1" data-name="Combined Shape" transform="translate(1 1)" />
                </g>
              </svg>
            </div>
            <div className='lang-text'>
              {config.translations.head.language}
            </div>
          </div>
        </div>
        <LangModal show={this.state.showModal} onHide={this.closeModal} />
      </div>
    )
  }
}
