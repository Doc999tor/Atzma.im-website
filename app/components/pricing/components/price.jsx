import React from 'react'
import './price.styl'

const Price = ({ preferred, name, icon, text, value, discount, toggleSwitch }) => {
  const marker = {'listStyleImage': 'url(' + config.urls.media + (preferred ? 'check_mark_active.svg' : 'check_mark.svg' ) + ')'};
  return (
    <div className={'price' + (preferred ? ' basic_price' : '')}>
      {discount && toggleSwitch && <span className='discount'>{discount} {config.translations.pricing.discount_label}</span>}
      <div className='icon_wrap'>
        <img src={config.urls.media + icon} alt={icon} />
      </div>
      <div className='name-strip'>
        <span className='line' />
        <span className='price_name'>{config.translations.pricing.data[name].opened_preview.name}</span>
        <span className='line' />
      </div>
      <div className='price_info'>
        <div className='business_type'>{config.translations.pricing.data[name].opened_preview.business_type}</div>
        <div className='price_count'>
          <p>
            <span className='count'>
              {
                config.translations.pricing.data[name].opened_preview.group_preview_price.replace('{currency}', config.modules.pricing.currency)
                .replace('{price_value}', value)
              }
            </span>
            <span className='bill_count'>{text}</span>
          </p>
        </div>
        <ul>
          {config.translations.pricing.data[name].opened_preview.features.map(item => (
            <li key={item} className='business_feature' style={marker}>{item}</li>
          ))}
        </ul>
        {config.translations.pricing.data[name].opened_preview.gift && <div className='gift_strip'><img src={config.urls.media + (preferred ? 'gift.svg' : 'gift_active.svg')} alt='gift' /><p>{config.translations.pricing.data[name].opened_preview.gift}</p></div>}
        <a className='link' href={config.urls.signup}><p className='paid'>{config.translations.pricing.data[name].opened_preview.cta_label}</p></a>
      </div>
    </div>
  )
}

export default Price
