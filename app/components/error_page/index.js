import Header from '../contact-us/components/header/index.jsx'
import Error from '../../../components-lib/error'
import './error.styl'
export default ({ referer }) => {
  const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'feedback']
  const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
  return (
    <div>
      <Header links={componentsForRendering} />
      <Error referer={referer} />
    </div>
  )
}
