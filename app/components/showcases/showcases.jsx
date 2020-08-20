import React, { Component } from 'react'
import BtnTryFree from '../btn-try-free/index.jsx'
import './showcases.styl'
export default class Topnav extends Component {
  render () {
    return (
      <div id='showcases'>
        <div className='main-box'>
          <div className='sub-box'>
            <h2>{config.translations.showcases.main_title}</h2>
            <p>{config.translations.showcases.description}</p>
            <BtnTryFree label={config.translations.showcases.button_label} />
          </div>
        </div>
      </div>
    )
  }
}
