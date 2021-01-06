import React from 'react'

import './price.styl'

const Price = ({
  onLeaveMouse,
  onEnterMouse,
  toggleSwitch,
  preferred,
  discount,
  focus,
  value,
  name,
  icon,
  text
}) => {
  return (
    <div
      onMouseEnter={onEnterMouse}
      onMouseLeave={onLeaveMouse}
      className={'price' + (focus && preferred ? ' zoom' : '')}
    >
      <header className='price_header'>
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
          {config.translations.pricing.data[name].opened_preview.features.map(({ text, is_important }) => (
            <li key={text} className={'business_feature' + (is_important ? ' feature_important' : '')}><img src={config.urls.media + 'check_mark.svg'} alt='' /><span>{text}</span></li>
          ))}
        </ul>
        <ul className='not_included_list'>{
          config.translations.pricing.data[name].opened_preview?.not_included_features?.map(text => (
            <li key={text} className='not_included_features'><img src={config.urls.media + 'ic_no.svg'} alt='' />{text}</li>
          ))
        }</ul>
        <a className='link' href={config.urls.signup}><p className='paid'>{config.translations.pricing.data[name].opened_preview.cta_label}</p></a>
        {config.translations.pricing.data[name].opened_preview.gift && <div className='gift_strip'><img src={config.urls.media + 'gift_active.svg'} alt='gift' /><p>{config.translations.pricing.data[name].opened_preview.gift}</p></div>}
      </div>
    </div>
  )
}

export default Price
