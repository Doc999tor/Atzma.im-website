import LeadContent from './components/lead_content/index.jsx'
import './lead.styl'

export default () => {
  return (
    <div id='lead'>
      <img className='wave_left' src={config.urls.media + 'wave_left.svg'} />
      <LeadContent />
      <img className='wave_right' src={config.urls.media + 'wave_right.svg'} />
    </div>
  )
}
