import './filling_link.styl'

const FillingLink = () => {
  const goToSignUp = () => (window.location = config.urls.signup)
  return (
    <div className='filling_link'>
      <div className='title_wrap'>
        <h2 className='filling_title'>{config.translations.filling_link.main_title}</h2>
        <p className='filling_subtitle'>{config.translations.filling_link.subtitle}</p>
      </div>
      <div className='image_wrap'>
        <img src={config.urls.media + 'ill_send_link.svg'} alt='' />
        <div className='button_wrap'>
          <button onClick={goToSignUp}>
            {config.translations.filling_link.btn_label}
            <img src={config.urls.media + 'ic send.svg'} alt='' />
          </button>
        </div>
      </div>
      <img className='hand' src={config.urls.media + 'hand_filling_link.png'} alt='' />
    </div>
  )
}

export default FillingLink
