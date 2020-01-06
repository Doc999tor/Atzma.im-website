import './style.styl'
import Messenger from '../messengers/index.jsx'
export default class ContactBlock extends React.Component {
  render () {
    return (
      <div id='contact-block'>
        <div className='communicate-main-block'>
          <div className='communicate-sup-block'>
            <div className='communicate-title'>
              <h2>{config.translations.contact_us.choose_messenger}</h2>
            </div>
            <div className='messengers'>
              <div className='messengers-wrap'>
                {config.modules.contact_us.data.map(item => <Messenger messenger={item} />) }
              </div>
            </div>
            <div className='contacts-block'>
              <div>
                <span className='email-title'>{config.translations.contact_us.email}</span>
                <span>{config.modules.contact_us.email}</span>
              </div>
              <div>
                <span className='email-title'>{config.translations.contact_us.phone}</span>
                <span>{config.modules.contact_us.phone_number}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

