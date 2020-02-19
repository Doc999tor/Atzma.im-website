import Home from './components/home/home.jsx'
import ContactUs from './components/contact-us/index.jsx'
import ErrorPage from './components/error_page'
import qs from 'qs'
import './main.styl'

const { Switch, Route, withRouter } = ReactRouterDOM
class App extends React.Component {
  componentDidMount () {
    const { history } = this.props
    document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
    const obj = qs.parse(location.search.slice(1))
    if (obj.page === 'error') {
      history.push(config.baseUrl + '/error')
    }
    if (obj.page === 'contact_us') {
      history.push(config.urls.contact_us)
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
        <Route exact path={config.urls.contact_us} component={ContactUs} />
        <Route exact path={config.baseUrl + '/error'} component={ErrorPage} />
      </Switch>
    )
  }
}
export default withRouter(App)
