import './style.styl'

export default ({ messenger }) => {

  const bgColor = {
    backgroundColor: messenger.color,
    color: messenger.color_text
  }

  return (
    <a className='item' href={messenger.url} >
      <span className='icon_wrap'><img className='icon' src={config.urls.media + messenger.icon} alt={messenger.icon} /></span>
      <span style={bgColor} className='name'>{config.translations.contact_us.data[messenger.name].name}</span>
    </a>
  )
}