import './features.styl'
export default class Topnav extends React.Component {
  render () {
    const featuresContent = this.props.content.data
    return (
      <div id='features'>
        <header>
          <div className='main-text'><h2>{config.translations.features.content.title}</h2></div>
          <div className='desc'><p>{config.translations.features.content.description}</p></div>
        </header>
        <div className='features-content-box'>
          {featuresContent.map(item => <Feature name={item.name} icon={item.icon} />)}
        </div>
      </div>
    )
  }
}

function Feature ({name, icon}) {
  return  <figure key={name} className='content-wrap'>
    <img src={config.urls.media + icon} alt={config.translations.features.content.data[name].name} />
    <figcaption>{config.translations.features.content.data[name].name}</figcaption>
  </figure>

}