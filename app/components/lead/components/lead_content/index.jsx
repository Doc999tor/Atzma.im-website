import './lead_content.styl'

export default () => {
  return (
    <section className='lead_content'>
      <h2 className='lead_title'>{config.translations.lead.main_title}</h2>
      <p className='lead_subtitle'>{config.translations.lead.subtitle}</p>
      <form onSubmit={e => e.preventDefault()}>
        <div className='lead_inputs'>
          <input
            type='text'
            placeholder={config.translations.lead.placeholder_name}
          />
          <input
            type='text'
            placeholder={config.translations.lead.placeholder_contact}
          />
        </div>
        <button className='submit_btn' type='submit'>
          <span className='icon-send'>
            <svg>
              <use xlinkHref={config.urls.media + 'ic_send_btn.svg#ic_send'} />
            </svg>
          </span>
          <span className='btn_label'>{config.translations.lead.btn_label}</span>
        </button>
      </form>
    </section>
  )
}
