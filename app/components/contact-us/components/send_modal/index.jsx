import './style.styl'

export default ({ sending }) => {
  return (
    <div className='backgroud'>
      <div className='body'>
        {sending
          ? <div className='sending'>
            <img className='plane' src={config.urls.media + 'ic_paper_plane.svg'} />
            <p>{config.translations.contact_us.send_popup.sending}</p>
          </div>
          : <div className='success'>
            <div className='outer_circle'>
              <img className='mark_modal' src={config.urls.media + 'ic_send_success.svg'} />
            </div>
            <p>{config.translations.contact_us.send_popup.success}</p>
          </div>}
      </div>
    </div>
  )
}
