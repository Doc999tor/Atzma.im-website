import React, { Component } from 'react'
import Home from './components/home/home.jsx'
import './main.styl'
class App extends Component {
  render () {
    document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
    return <Home />
  }
}
export default App
