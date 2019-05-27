import './why.styl'
export default class Topnav extends React.Component {
  render () {
    const whyContent = this.props.content.data
    return (
      <div id='why'>
        <header>
          <div className='main-text'><h2>{config.translations.why.content.why_atmza}</h2></div>
          <div className='desc'><p>{config.translations.why.content.why_description}</p></div>
        </header>
        <div className='why-content-box'>
          {whyContent.map(item => <Feature name={item.name} icon={item.icon} />)}
        </div>
      </div>
    )
  }
}

function Feature ({name, icon}) {
  return  <figure key={name} className='content-wrap'>
    <img src={config.urls.media + icon} alt={config.translations.why.content.why_atmza} />
    <figcaption>{config.translations.why.content[name]}</figcaption>
  </figure>

}