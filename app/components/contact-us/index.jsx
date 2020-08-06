import React, { useEffect } from 'react'
import Header from './components/header/index.jsx'
import ContactTitle from './components/contact-title/index.jsx'
import ContactBlock from './components/contact-block/index.jsx'
import UsefulLinks from './components/useful_links/index.jsx'
import Footer from '../footer/footer.jsx'

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div id='contact'>
      <Header />
      <ContactTitle />
      <ContactBlock />
      {config.modules.contact_us.useful_links && <UsefulLinks />}
      <Footer />
    </div>
  )
}
