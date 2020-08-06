import React from 'react'
import './btn-try-free.styl'

export default ({ label }) => {
  return (
    <a className='try-for-free-btn' href={config.urls.signup}>
      <svg>
        <use xlinkHref={config.urls.media + 'ic_try.svg#ic_try'} />
      </svg>
      <span>{label}</span>
    </a>
  )
}
