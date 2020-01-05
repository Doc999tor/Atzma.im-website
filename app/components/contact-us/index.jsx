import './style.styl'
import Header from './components/header/index.jsx'
import ContactTitle from './components/contact-title/index.jsx'
import ContactBlock from './components/contact-block/index.jsx'
import Footer from '../footer/footer.jsx'

export default class ContactUs extends React.Component {
  render () {
    const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
    const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
    return (
      <div id='contact'>
        <Header links={componentsForRendering} />
        <ContactTitle />
        <ContactBlock />
        <Footer />
      </div>
    )
  }
}