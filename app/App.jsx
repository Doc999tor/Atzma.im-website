import Home from './components/home/home.jsx'
import ContactUs from './components/contact-us/index.jsx'
import './main.styl'

const { Switch, Route } = ReactRouterDOM
class App extends React.Component {
  render () {
    const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
    const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
    return (
      <Switch>
        <Route exact path={config.baseUrl + '/'} component={Home} />
        <Route exact path={config.urls.contact_us} component={ContactUs} />
      </Switch>
    )
  }
}
export default App
