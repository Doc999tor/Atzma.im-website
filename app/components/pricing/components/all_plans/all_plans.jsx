import './all_plans.styl'

const AllPlans = () => {
  return (
    <div className='all_plans'>
      <h2>{config.translations.pricing.all_plans.title}</h2>
      {config.translations.pricing.all_plans.features.length &&
        <ul className='features'>
          {config.translations.pricing.all_plans.features.map((text, index) => {
            return (
              <li key={index}>
                <div className='list_item'>
                  <img src={config.urls.media + 'icon_check.svg'} alt='icon_check' />
                  <p>{text}</p>
                </div>
              </li>
            )
          })}
        </ul>}
      {config.translations.pricing.all_plans.minor_features.length &&
        <ul className='minor_features'>
          {config.translations.pricing.all_plans.minor_features.map((text, index) => {
            return (
              <li key={index}>
                {text}
              </li>
            )
          })}
        </ul>}
    </div>
  )
}

export default AllPlans
