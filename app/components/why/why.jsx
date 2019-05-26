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
          {whyContent.map((i, k) => (
            <figure key={k} className='content-wrap'>
              <img src={config.urls.media + i.icon} alt={config.translations.why.content.why_atmza} />
              <figcaption>{config.translations.why.content[i.name]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    )
  }
}
