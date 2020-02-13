import Hero from '../hero/hero.jsx'
import Features from '../features/features.jsx'
import Showcases from '../showcases/showcases.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Reviews from '../reviews/index.jsx'
// import Feedback from '../feedback/feedback.jsx'
import Footer from '../footer/footer.jsx'
import ContactButton from '../btn-contact-us/index.jsx'


import './home.styl'

class Home extends React.Component {
  render () {
    const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
    const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
    const objSplitLoadingComponents = {
      hero: <Hero links={componentsForRendering} />,
      features: <Features />,
      showcases: <Showcases />,
      business_types: <BusinessTypes />,
      feedback: <Reviews />
    }
    return (
      <div id='home'>
        {
          componentsForRendering.map(i => objSplitLoadingComponents[i])
        }
        <ContactButton history={this.props.history} />
        <Footer />
      </div>
    )
  }
}
export default Home
