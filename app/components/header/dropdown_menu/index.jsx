import React from 'react'
import './style.styl'

export default () => {
  return (
    <div className='dropDown_wrap'>
      <ul className='dropDown_list'>
        {Object.keys(config.translations.languages).map(item => {
          return (
            <li className='dropDown_item' key={item}>
              <a className='dropDown_link' href={config.urls.home_page.replace('{lang}', item)}>{config.translations.languages[item]}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
