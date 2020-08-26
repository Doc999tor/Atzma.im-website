import React from 'react'
import Home from './components/home/home.jsx'
import './main.styl'
const App = () => {
  document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
  return <Home />
}
export default App
