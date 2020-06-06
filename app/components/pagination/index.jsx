import React from 'react'
import './pagination.styl'

export default ({slides, activeIndex}) => {
  return (
    <div className='pagination'>
      {slides.map((item, index) => {
        return (
          <div key={index} className={'bullet' + (index === activeIndex ? ' active' : '')} />
        )
      })}
    </div>
  )
}
