import './warning_label.styl'

export default ({ text }) => {
  return (
    <div className='lead_warning_label'>
      <div className='label_body'>
        <img src={config.urls.media + 'ic_alert.svg'} alt='alert' />
        <p>{text}</p>
      </div>
      <div className='triangle' />
    </div>
  )
}
