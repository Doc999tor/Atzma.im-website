import React, { useState, useEffect } from 'react'
import Hero from '../hero/hero.jsx'
import Features from '../features/features.jsx'
import { Showcases0, Showcases1, Showcases2, Showcases3 } from '../showcases/showcases.jsx'
import Leads from '../leads/index.jsx'
import FillingLink from '../filling_link/filling_link.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Footer from '../footer/footer.jsx'
import WSbutton from '../whatsapp-button/whatsapp-button.jsx'
import ContactButton from '../strip-contact-us/index.jsx'
import './home.styl'

console.log(config.modules.showcases.data)

const Home = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true)
    }, 5000)
  }, [])

  const possibleKeys = ['hero', 'features', 'showcases0', 'showcases1', 'filling_link', 'showcases2', 'leads', 'showcases3', 'business_types']
  const componentsForRendering = possibleKeys.filter(
    pk => pk.startsWith('showcases') || config.modules[pk]
  )
  const objSplitLoadingComponents = {
    hero: <Hero links={componentsForRendering} />,
    features: <Features />,
    leads: <Leads />,
    showcases0: <Showcases0 />,
    showcases1: <Showcases1 />,
    showcases2: <Showcases2 />,
    showcases3: <Showcases3 />,
    filling_link: <FillingLink />,
    business_types: <BusinessTypes />
  }
  return (
    <div id='home'>
      {
        componentsForRendering.map(i => objSplitLoadingComponents[i])
      }
      <ContactButton />
      <WSbutton showButton={showButton} />
      <Footer />
    </div>
  )
}
export default Home
