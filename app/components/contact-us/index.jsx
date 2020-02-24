import Header from './components/header/index.jsx'
import ContactTitle from './components/contact-title/index.jsx'
import ContactBlock from './components/contact-block/index.jsx'
import Footer from '../footer/footer.jsx'

export default () => {
  const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
  const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
  React.useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div id='contact'>
      <Header links={componentsForRendering} />
      <ContactTitle />
      <ContactBlock />
      <Footer />
    </div>
  )
}
