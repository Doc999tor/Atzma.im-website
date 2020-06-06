import React, { Component } from 'react'
import Home from './components/home/home.jsx'
import ContactUs from './components/contact-us/index.jsx'
import ErrorPage from './components/error_page'
import Pricing from './components/pricing/index.jsx'
import qs from 'qs'
import './main.styl'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
class App extends Component {
  componentDidMount () {
    const { history } = this.props
    document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
    const obj = qs.parse(location.search.slice(1))
    if (obj.page === 'error') {
      history.push(config.baseUrl + '/error')
    }
    if (obj.page === 'contact_us') {
      history.push(config.baseUrl + '/contact_us')
    }
    if (obj.page === 'pricing') {
      history.push(config.baseUrl + '/pricing')
    }
    const blockID = location.hash && location.hash.substr(1)
    if (blockID) {
      setTimeout(() => {
        document.getElementById(blockID).scrollIntoView({ block: 'start', behavior: 'smooth' })
      }, 0)
    }
  }

  render () {
    return (
      <Switch>
        <Route exact path={config.baseUrl + '/'} component={Home} />
        <Route exact path={config.baseUrl + '/contact_us'} component={ContactUs} />
        <Route exact path={config.baseUrl + '/pricing'} component={Pricing} />
        <Route exact path={config.baseUrl + '/error'} component={ErrorPage} />
        <Redirect from='/' to={config.baseUrl} />
      </Switch>
    )
  }
}
export default withRouter(App)
