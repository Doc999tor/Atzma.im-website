import AccessRights from '../access-rights/access-rights.jsx'
import Color from './components/color/color.jsx'
import {Swiper} from 'project-components'
import Topnav from '../topnav/topnav.jsx'
import './colors-beautech.styl'

class ColorsBeautech extends React.Component {
  state = {
    color: config.data.colors_beautech[config.data.colors_beautech.length - 1]
  }
  render () {
    return (
      <div id='punch_cards'>
        <Topnav {...this.props} color />
        <div className='swiper'>
          <div id='swiper-wrap-punch'>
            <Swiper pagination='.swiper-pagination' slidesPerView='auto' centeredSlides observer initialSlide={config.data.colors_beautech.length - 1}>
              {config.data.colors_beautech.map(i => <div>
                <div className='color' onClick={() => this.setState({color: i})}><h1 className='date'>{moment(i.date).format('DD.MM.YYYY')}</h1>
                  <h1 className='name'>{i.name}</h1></div></div>)}</Swiper></div></div>
        <Color i={this.state.color} />
      </div>
    )
  }
}
export default AccessRights(ColorsBeautech)
