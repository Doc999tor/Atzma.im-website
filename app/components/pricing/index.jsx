import React, { Component } from 'react'
import Header from '../contact-us/components/header/index.jsx'
import Footer from '../footer/footer.jsx'
import Price from './components/price.jsx'
import './pricing.styl'
import AllPlans from './components/all_plans/all_plans'

class Pricing extends Component {
  state = {
    toggleSwitch: config.modules.pricing.switch_bill_annually,
    focus: true
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

  handleEnterMouse = () => this.setState({ focus: false })

  handleLeaveMouse = () => this.setState({ focus: true })

  render () {
    const { toggleSwitch } = this.state
    const discontArray = config.modules.pricing.data.map(i => i.discount && parseInt(i.discount))
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
          <div
            onMouseEnter={this.handleEnterMouse}
            onMouseLeave={this.handleLeaveMouse}
            className='pricing_plans'
          >
            {config.modules.pricing.data.map(item => <Price focus={this.state.focus} preferred={item.preferred} toggleSwitch={toggleSwitch} key={item.name} name={item.name} icon={item.icon} text={config.translations.pricing.data[item.name].opened_preview.period_month} value={toggleSwitch ? item.price_yearly : item.price_monthly} discount={item.discount} />)}
          </div>
        </div>
        {config.translations.pricing.all_plans && <AllPlans />}
        <Footer />
      </div>
    )
  }
}
export default Pricing
