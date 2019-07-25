import Hero from '../hero/hero.jsx'
import Features from '../features/features.jsx'
import Showcases from '../showcases/showcases.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Feedback from '../feedback/feedback.jsx'
import Footer from '../footer/footer.jsx'

import './home.styl'

class Home extends React.Component {
componentDidMount = () => document.getElementsByTagName('body')[0].style.direction = config.isRTL ? 'rtl' : 'ltr'
render () {
  const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
  const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
  const objSplitLoadingComponents = {
    hero: <Hero links={componentsForRendering} />,
    features: <Features />,
    showcases: <Showcases />,
    business_types: <BusinessTypes />,
    feedback: <Feedback />
  }
  return (
    <div id='home'>
      {
        componentsForRendering.map(i => objSplitLoadingComponents[i])
      }
      <Footer />
    </div>
  )
}
}
export default Home
