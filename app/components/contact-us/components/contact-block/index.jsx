import './style.styl'
import Messenger from '../messengers/index.jsx'
export default class ContactBlock extends React.Component {
  render () {
    return (
      <div id='contact-block'>
        <div className='communicate-sup-block'>
          <p>{config.translations.contact_us.choose_messenger}</p>
          <div className='messengers'>
            {config.modules.contact_us.data.map(item => <Messenger messenger={item} />) }
          </div>
          <div className='contacts-block'>
            <div>
              <span className='label'>{config.translations.contact_us.email}</span>
              <a href={`mailto:${config.modules.contact_us.email}`}>{config.modules.contact_us.email}</a>
            </div>
            <div>
              <span className='label'>{config.translations.contact_us.phone}</span>
              <a href={`tel:${config.modules.contact_us.phone_number}`}>{config.modules.contact_us.phone_number}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
