import {punchDeleteService, punchDeleteServiceUse} from 'project-services'
import {Modal} from 'project-components'
import './modal-delete.styl'

export default class Delete extends React.Component {
  static propTypes = {
    isVisibleModalConfirmed: PropTypes.bool.isRequired,
    handleConfirmedModal: PropTypes.func.isRequired,
    updatePunchList: PropTypes.func.isRequired,
    updateSingle: PropTypes.func.isRequired,
    use: PropTypes.number.isRequired,
    punch_cards: PropTypes.array,
    id: PropTypes.any.isRequired
  }
  del = () => punchDeleteService(this.props.id)
    .then(r => {
      // r.status === 204 && this.props.punch_cards.some((i, k) => (i.id === this.props.id &&
      //   this.props.punch_cards.splice(k, 1))) && this.cancelSingle()
      r.status === 204 && this.props.updatePunchList(this.props.punch_cards.filter(i => i.id !== this.props.id))
      this.cancelSingle()
    })
  delUse = () => punchDeleteServiceUse(this.props.id, this.props.use)
    .then(r => r.status === 204 && this.props.punch_cards.some(item => (item.id === this.props.id &&
      item.uses.some((i, k) => i.id === this.props.use && item.uses.splice(k, 1)))) && this.cancel())
  cancelSingle = () => {
    this.props.handleConfirmedModal()
    this.props.updateSingle()
  }
  cancel = () => this.props.handleConfirmedModal()
  render () {
    // console.log('test', this.props)
    return (
      <Modal show={this.props.isVisibleModalConfirmed} onHide={this.cancel}>
        <div className='modal-header' id='punch_cards_media'>
          <h1 className={config.isRTL ? 'pd-r' : 'pd-l'} >{this.props.use ? config.translations.delete_use : config.translations.delete_punch}</h1>
          <img className={config.isRTL ? 'left' : 'right'} src={config.urls.media + 'add_bt.svg'} onClick={this.cancel} /></div>
        <div className='delete-body'><h1>{this.props.use ? config.translations.use_questions : config.translations.punch_questions}</h1>
          <button onClick={this.props.use ? this.delUse : this.del}>{config.translations.delete}</button></div>
      </Modal>
    )
  }
}
