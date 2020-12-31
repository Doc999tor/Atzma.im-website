import React from 'react'
import './price.styl'

const Price = ({ preferred, name, icon, text, value, discount, toggleSwitch }) => {
  const marker = {'listStyleImage': 'url(' + config.urls.media + 'check_mark.svg' + ')'};
  return (
    <div className={'price' + (preferred ? ' zoom' : '')}>
      <header className='price_header'>
        {/* {discount && toggleSwitch && <span className='discount'>{discount} {config.translations.pricing.discount_label}</span>} */}
        {discount && toggleSwitch && <div className='tag_wrap'>
          <div className='tag_container'>
            <img className='tag_icon' src={config.urls.media + 'tag.svg'} alt='' />
            <span className='tag_value'>{`${discount} ${config.translations.pricing.discount_label}`}</span>
          </div>
        </div>}
        <div className='text_wrap'>
          <p className='price_name'>{config.translations.pricing.data[name].opened_preview.name}</p>
          <p className='business_type'>{config.translations.pricing.data[name].opened_preview.business_type}</p>
          <p className='price_count'>
            <span className='count'>
              {
                config.translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
                  .replace('{price_value}', value)
              }
            </span>
            <span className='bill_count'>{text}</span>
          </p>
        </div>
        <div className='icon_wrap'>
          <img src={config.urls.media + icon} alt={icon} />
        </div>
      </header>
      <div className='price_body'>
        <ul>
          {config.translations.pricing.data[name].opened_preview.features.map(item => (
            <li key={item} className='business_feature'><img src={config.urls.media + 'check_mark.svg'} alt='' /><span>{item}</span></li>
          ))}
        </ul>
        <a className='link' href={config.urls.signup}><p className='paid'>{config.translations.pricing.data[name].opened_preview.cta_label}</p></a>

        {config.translations.pricing.data[name].opened_preview.gift && <div className='gift_strip'><img src={config.urls.media + 'gift_active.svg'} alt='gift' /><p>{config.translations.pricing.data[name].opened_preview.gift}</p></div>}
      </div>
     
      {/* <div className='name-strip'>
        <span className='line' />
        
        <span className='line' />
      </div> */}
      {/* <div className='price_info'>
        
        <div className='price_count'>
          
        </div>
        
      </div> */}
    </div>
  )
}

export default Price
