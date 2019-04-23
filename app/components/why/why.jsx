
import './why.styl'

export default class Topnav extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    history: PropTypes.object,
    timeline: PropTypes.bool,
    punch: PropTypes.bool,
    color: PropTypes.bool,
    home: PropTypes.bool
  }

  state = {
    isActive: false
  }
  render () {
    const whyContent = this.props.whyContent
    return (
      <div id='why'>
        <div className='header'>
          <div className='main-text'><h1>{config.translations.why.content.why_atmza}</h1></div>
          <div className='desc'><p>{config.translations.why.content.why_description}</p></div>
        </div>
        <div className='content-box'>
          {whyContent.map((i, k) => (
            <div key={k} className='content-wrap'>
              <img src={i.icon} />
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
