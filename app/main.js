import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
document.body.onload = function () {
  document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
  ReactDOM.render(
    <App />,
    document.getElementById('root'))
}
