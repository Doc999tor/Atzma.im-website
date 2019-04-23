import {birthdaysStatus} from 'project-components'
import './birthday.styl'

export default class Birthday extends React.Component {
  render () {
    const birthday = config.data.birthdate && birthdaysStatus(`0000-${config.data.birthdate}`)
    return (
      <div id={birthday ? 'birthday-wrap' : 'birthday-wrap-disabled'}
        className={config.isRTL ? 'birthday-wrap-right' : 'birthday-wrap-left'}>
        <div><img src={config.urls.media + 'ic_birthday.svg'} />&nbsp;</div>
        <div className='birth-wrap'><h1>{birthday}</h1></div>
      </div>
    )
  }
}
