import Header from './components/header/index.jsx'
import ContactTitle from './components/contact-title/index.jsx'
import ContactBlock from './components/contact-block/index.jsx'
import Footer from '../footer/footer.jsx'

export default () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div id='contact'>
      <Header />
      <ContactTitle />
      <ContactBlock />
      <Footer />
    </div>
  )
}
