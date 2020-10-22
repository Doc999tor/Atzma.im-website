import React, { useState, useEffect } from 'react'
import Hero from '../hero/hero.jsx'
import Features from '../features/features.jsx'
import Showcases from '../showcases/showcases.jsx'
import Leads from '../leads/index.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Footer from '../footer/footer.jsx'
import WSbutton from '../whatsapp-button/whatsapp-button.jsx'
import ContactButton from '../strip-contact-us/index.jsx'
import './home.styl'

const Home = () => {
  const [showButton, setShowButton] = useState(false)

  const handleShowButton = () => {
    const audio = new Audio(`${config.urls.media}whatsapp_sound.mp3`)
    if (!showButton && audio) {
      setShowButton(true)
      setTimeout(() => {
        audio.play()
      }, 300)
    }
  }

  const possibleKeys = ['hero', 'features', 'business_types', 'showcases', 'leads']
  const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
  const objSplitLoadingComponents = {
    hero: <Hero links={componentsForRendering} />,
    features: <Features />,
    leads: <Leads />,
    showcases: <Showcases />,
    business_types: <BusinessTypes />
  }
  return (
    <div id='home' onClick={handleShowButton}>
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
