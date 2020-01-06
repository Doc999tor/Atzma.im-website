import App from './App.jsx'
const { BrowserRouter } = ReactRouterDOM
document.body.onload = function () {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'))
}