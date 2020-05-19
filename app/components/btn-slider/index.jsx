import './btn-slider.styl'

export default ({ action, img }) => {
  return (
    <button className='slider_btn' onClick={action}>
      <img src={config.urls.media + img} alt='' />
    </button>)
}
