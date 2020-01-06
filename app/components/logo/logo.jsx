import './logo.styl'
export function Logo () {
  return <div className='logo'>
    {/* <img src={config.urls.media_logo + 'ic_logo.svg'} alt={config.translations.hero.main_logo_label} /> */}
    <span className='logo-text'> {config.translations.hero.main_logo} </span>
  </div>
}