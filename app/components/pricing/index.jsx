import Header from '../contact-us/components/header/index.jsx'
import Footer from '../footer/footer.jsx'
import Price from './components/price.jsx'
import './pricing.styl'

class Pricing extends React.Component {
  state = {
    toggleSwitch: config.modules.pricing.switch_bill_annually
  }

  handleChangeInputValue = () => {
    this.setState({ toggleSwitch: !this.state.toggleSwitch })
  }

  handleChangeBillAnnually = () => {
    this.setState({ toggleSwitch: true })
  }

  handleChangeBillMonthly = () => {
    this.setState({ toggleSwitch: false })
  }

  render () {
    const { toggleSwitch } = this.state
    const discontArray = config.modules.pricing.data.map(i => parseInt(i.discount))
    const maxDiscont = Math.max(...discontArray)
    return (
      <div id='pricing'>
        <Header />
        <div className='pricing_wrap'>
          <h2>{config.translations.pricing.main_title}</h2>
          <div className='switch_box'>
            <p className='yearly_wrap'>
              {!isNaN(maxDiscont) && <span className='to_save'>{config.translations.pricing.to_save_label} {maxDiscont}%</span>}
              <span className={toggleSwitch ? 'active' : 'normall'} onClick={this.handleChangeBillAnnually}>{config.translations.pricing.switch_annually}</span>
            </p>
            <input checked={toggleSwitch} onChange={this.handleChangeInputValue} className='switch_bill' type='checkbox' name='bill' id='bill' />
            <span className={toggleSwitch ? 'normall' : 'active'} onClick={this.handleChangeBillMonthly}>{config.translations.pricing.switch_monthly}</span>
          </div>
          <div className='pricing_plans'>
            {config.modules.pricing.data.map(item => <Price preferred={item.preferred} toggleSwitch={toggleSwitch} key={item.name} name={item.name} icon={item.icon} text={config.translations.pricing.data[item.name].opened_preview.period_month} value={toggleSwitch ? item.price_yearly : item.price_monthly} discount={item.discount} />)}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Pricing
