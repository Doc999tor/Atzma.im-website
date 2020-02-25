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
      <Link to={config.baseUrl + '/'} className='logo-text'> {config.translations.hero.main_logo} </Link>
    </div>)
}
