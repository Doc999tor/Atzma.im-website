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
    const parseSearch = location.search && location.search.split('&').filter(i => !i.includes('page=contact_us')).join('&')
    if (obj.page === 'error') {
      history.push(config.baseUrl + config.urls.page_error)
    }
    if (obj.page === 'contact_us') {
      history.push({
        pathname: config.baseUrl + config.urls.page_contact_us,
        search: parseSearch ? `?${parseSearch}` : '',
      })
    }
    if (obj.page === 'pricing') {
      history.push(config.baseUrl + config.urls.page_pricing)
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
        <Route exact path={config.baseUrl + config.urls.page_contact_us} component={ContactUs} />
        <Route exact path={config.baseUrl + config.urls.page_pricing} component={Pricing} />
        <Route exact path={config.baseUrl + config.urls.page_error} component={ErrorPage} />
        <Route exact path={config.baseUrl} component={Home} />
        <Redirect from='/' to={config.baseUrl} />
      </Switch>
    )
  }
}
export default withRouter(App)
