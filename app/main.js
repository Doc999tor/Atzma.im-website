import Home from './components/home/home.jsx'
import './main.styl'
document.body.onload = function () {
  ReactDOM.render(<Home />, document.getElementById('root'))
}