import React from 'react'
import Hero from '../hero/hero.jsx'
import Features from '../features/features.jsx'
import Showcases from '../showcases/showcases.jsx'
import Leads from '../leads/index.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Benefit from '../benefit/index.jsx'
// import NoCredit from '../no_credit/index.jsx'
import Footer from '../footer/footer.jsx'
import ContactButton from '../strip-contact-us/index.jsx'
import './home.styl'

const Home = () => {
  const possibleKeys = ['hero', 'features', 'main_benefit', 'leads', 'showcases', 'business_types']
  const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
  const objSplitLoadingComponents = {
    hero: <Hero links={componentsForRendering} />,
    features: <Features />,
    main_benefit: <Benefit />,
    leads: <Leads />,
    showcases: <Showcases />,
    business_types: <BusinessTypes />,
  }
  return (
    <div id='home'>
      {
        componentsForRendering.map(i => objSplitLoadingComponents[i])
      }
      <ContactButton />
      <Footer />
    </div>
  )
}
export default Home
