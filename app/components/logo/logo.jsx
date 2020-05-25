import './logo.styl'
const { Link } = ReactRouterDOM
export function Logo () {
  const goHome = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <div className='logo' onClick={goHome}>
      <Link to={config.baseUrl + '/'} className='logo-text'><img src={`${config.urls.media_logo}logo.svg`} alt={config.translations.hero.logo_label} /></Link>
    </div>)
}
