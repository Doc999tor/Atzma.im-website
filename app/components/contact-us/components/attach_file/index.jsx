import './attachFile.styl'

export default ({ handleChangeFile }) => {
  return (
    <div className='attach_file'>
      <input className='attach_file_input' type='file' name='file' id='input_file' onChange={handleChangeFile} />
      <p className='attach_text'>
        {config.translations.contact_us.attach_file_text}
      </p>
      <button className='attach_button' type='button'>
        <img src={`${config.urls.media}ic_attach.svg`} alt='image-attach' />
        <span>
          {config.translations.contact_us.attach_file_btn_label}
        </span>
      </button>
    </div>
  )
}
