import './style.styl'
import Link from './link.jsx'

export default () => {
  return (
    <section className='useful_links'>
      <h2>{config.translations.contact_us.useful_links.main_title}</h2>
      {config.modules.contact_us.useful_links.map((item, index) => <Link key={index} item={item} index={index} />)}
    </section>
  )
}
