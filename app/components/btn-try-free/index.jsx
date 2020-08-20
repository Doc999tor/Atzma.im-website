import React from 'react'
import './btn-try-free.styl'

export default ({ label }) => {
  return (
    <a className='try-for-free-btn' href={config.urls.signup}>
      <img src={config.urls.media + 'ic_try.svg'} alt='try' />
      <span>{label}</span>
    </a>
  )
}
