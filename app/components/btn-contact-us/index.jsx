import './style.styl'

export default ({ history }) => {
  const goToContactUs = () => history.push(config.baseUrl + '/contact_us')
  return (
    <div id='contact_us'>
      <div className='btn-contact'>
        <div className='btn-contact-wrap' onClick={goToContactUs}>
          <div className='title-wrap'>
            <img src={config.urls.media + 'ic_mail.svg'} alt='email' />
            <span className='title-btn-contact'>{config.translations.button_contact_us.contact_us}</span>
          </div>
          <p className='subtitle-btn-contact'>{config.translations.button_contact_us.questions}</p>
        </div>
      </div>
    </div>
  )
}
