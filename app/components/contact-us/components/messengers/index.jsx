import './style.styl'

export default ({ messenger }) => {
  return (
    <a className='item' href={messenger.url} >
      <span className='icon_wrap'><img className='icon' src={config.urls.media + messenger.icon} alt={messenger.icon} /></span>
      <span className='name'>{config.translations.contact_us.data[messenger.name].name}</span>
    </a>
  )
}