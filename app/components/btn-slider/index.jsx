import React from 'react'
import './btn-slider.styl'

export default ({ action, img, name }) => {
  return (
    <button className='slider_btn' aria-label={name} onClick={action}>
      <img src={config.urls.media + img} alt={name} />
    </button>)
}
