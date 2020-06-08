import Hero from '../hero/hero.jsx'
import Features from '../features/features.jsx'
import Showcases from '../showcases/showcases.jsx'
import Leads from '../leads/index.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Reviews from '../reviews/index.jsx'
import Benefit from '../benefit/index.jsx'
import NoCredit from '../no_credit/index.jsx'
import Footer from '../footer/footer.jsx'
import ContactButton from '../btn-contact-us/index.jsx'
import './home.styl'

class Home extends React.Component {
  render () {
    const possibleKeys = ['hero', 'features', 'main_benefit', 'showcases', 'leads', 'business_types', 'feedback', 'no_credits']
    const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
    const objSplitLoadingComponents = {
      hero: <Hero links={componentsForRendering} />,
      features: <Features />,
      main_benefit: <Benefit />,
      showcases: <Showcases />,
      leads: <Leads />,
      business_types: <BusinessTypes />,
      feedback: <Reviews />,
      no_credits: <NoCredit />
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
