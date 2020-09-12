import React from 'react'

import './networks.styl'

const Networks = () => {
  return (
    <div className='networks'>
      <p>{config.translations.contact_us.networks_ladel}</p>
      <ul className='networks_list'>
        {config.urls.social_networks.map(({ icon, url }) => (
          <li className='network' key={url}>
            <a href={url}>
              <img src={config.urls.media + icon} alt='' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Networks