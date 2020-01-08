import './style.styl'
const { Link } = ReactRouterDOM

export default class ContactButton extends React.Component {

  render () {
    return (
      <div id='contact-us-id'>
        <div className='contact-wrap'>
          <div className='btn-contact'>
            <Link to={config.urls.contact_us} className='nonn'>
              <div className='btn-contact-wrap'>
                <div className='title-wrap'>
                  <img src={config.urls.media + 'ic_mail.svg'} />
                  <div className='title-btn-contact'>{config.translations.button_contact_us.contact_us}</div>
                </div>
                <div className='subtitle-btn-contact'>{config.translations.button_contact_us.questions}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}