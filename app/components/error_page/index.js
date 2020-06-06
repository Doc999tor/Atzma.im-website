import React from 'react'
import Header from '../contact-us/components/header/index.jsx'
import Error from '../../../components-lib/error'
import Footer from '../footer/footer.jsx'
import './error.styl'
export default ({ referer }) => {
  const possibleKeys = ['hero', 'features', 'showcases', 'business_types', 'pricing', 'feedback']
  const componentsForRendering = possibleKeys.filter(pk => config.modules[pk])
  return (
    <div className='error_route'>
      <Header links={componentsForRendering} />
      <Error referer={referer} />
      <Footer />
    </div>
  )
}
