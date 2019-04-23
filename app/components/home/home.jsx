import Hero from '../hero/hero.jsx'
import Why from '../why/why.jsx'
import Showcases from '../showcases/showcases.jsx'
import BusinessTypes from '../business-types/business-types.jsx'
import Feedback from '../feedback/feedback.jsx'
import Footer from '../footer/footer.jsx'

import './home.styl'

class Home extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  state = {
    isVisibleFields: false,
    whyContent: config.modules.why,
    businessTypes: config.modules.business_types
  }

  render () {
    const isWhyContentVisible = this.state.isVisibleFields || (config.modules.why && !!this.state.whyContent.length)
    const isBusinessTypesVisible = this.state.isVisibleFields || (config.modules.business_types && !!this.state.businessTypes.length)
    return (
      <div id='home'>
        <Hero {...this.props} home />
        {isWhyContentVisible && <Why
          whyContent={this.state.whyContent}
        />}
        <Showcases {...this.props} />
        {isBusinessTypesVisible && 
        <BusinessTypes
          businessTypes={this.state.businessTypes}
        />}
        {/* <Feedback
          businessTypes={this.state.businessTypes}
        /> */}
        <Footer />
      </div>
    )
  }
}
export default Home
