import './groups.styl'

export default class Groups extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => { if (!Array.isArray(config.data.groups)) config.data.groups = [] }
  componentDidMount = () => {
    let circle = document.querySelectorAll('.amount')
    circle.forEach(item => {
      item.style.height = item.offsetWidth + 'px'
      item.style.width = item.offsetHeight + 'px'
    })
  }
  render () {
    return (
      <div id='groups'>
        <div className='group-header'>
          <span className='groups-label'>{config.translations.groups}</span>
        </div>
        <div className='group-body'>
          {config.data.groups.map((i, k) => (
            <div key={k} className='group-wrap'>
              <a href={this.props.rights.groups.to_group ? config.urls.main + config.urls.groups + i.id : false}>
                <div className='img'>
                  <img className='icon' src={config.urls.groups_img + (i.image_path || config.urls.groups_img_default)} />
                  <label className='amount'>{i.amount}</label>
                </div>
                <label className='name'>
                  <p className='name-wrap'>{i.name}</p>
                </label>
              </a>
            </div>)
          )}
        </div>
        {/* <div className='group-footer'>
          <label className='footer-label'>{config.translations.add_new_group}</label>
          <a className='href' href={'' this.props.rights.events.cr_app ? config.urls.main + config.urls.appointment + '?client_id=' + config.data.id : false}>
            <img className='add' src={config.urls.media + 'c_add_stroke.svg'} />
          </a>
        </div> */}
        {/* <Line /> */}
      </div>
    )
  }
}
