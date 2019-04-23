import {Select, Switch} from 'project-components'
import './add-note.styl'

export default class AddNote extends React.Component {
  state = {}
  static propTypes = {
    setDescription: PropTypes.func.isRequired,
    handleIncrementTime: PropTypes.func.isRequired,
    handleDecrementTime: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    activateSwitch: PropTypes.func.isRequired,
    cancelSearch: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    description: PropTypes.string.isRequired,
    selectedValueLable: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    selectedValue: PropTypes.string.isRequired,
    isReminderEdit: PropTypes.bool.isRequired,
    delete: PropTypes.bool.isRequired,
    noteReplace: PropTypes.bool.isRequired,
    switch: PropTypes.bool.isRequired
  }
  render () {
    return (
      <div className='edit-note'>
        <div className='edit-note-dody'>
          <span className='one-note'>{config.translations.note}</span>
          <div className='description'>
            <textarea autoFocus className='description-area'
              type='text'
              rows='3'
              value={this.props.description}
              onChange={e => this.props.setDescription(e.target.value)}
              placeholder={config.translations.description_notes} />
            <div className='cancel-search'>
              {this.props.description && <img onClick={this.props.cancelSearch} className='search-img' src={`${config.urls.media}x-circle.svg`} />}
            </div>
          </div>
          <div className='reminder'>
            <div className='reminder-wrap'>
              <div className='on-set-reminder'>
                <div className='set-reminder'>
                  <div className={'img-wrap'}>
                    <img src={config.urls.media + 'bell.svg'} />
                  </div>
                  <span>{config.translations.reminder}</span>
                </div>
                <Switch on={this.props.switch} onClick={this.props.activateSwitch} />
              </div>
              {this.props.isReminderEdit && <div className='reminder-time'>
                <div className='input-wrap'>
                  <span className='reminder-in'>{config.translations.in}</span>
                  <div className='ink' onClick={this.props.handleIncrementTime}><img src={`${config.urls.media}plus.svg`} /></div>
                  <input className='count-input total-input' type='text' value={this.props.time} disabled />
                  <div className='ink' onClick={this.props.handleDecrementTime}><img src={`${config.urls.media}minus.svg`} /></div>
                </div>
                <div className='select-wrap'>
                  <Select value={this.props.selectedValue} name={this.props.selectedValueLable} onChange={e => this.props.setSelectValues(e.value, e.label)}
                    options={config.translations.notes_list} />
                </div>
              </div>}
            </div>
          </div>

        </div>
        <div className='actions-note'>
          {this.props.delete && <button
            className='delete'
            onClick={this.props.deleteNote}>
            <img src={`${config.urls.media}delete.svg`} />
            <span>{config.translations.delete}</span>
          </button>}
          <button
            className='save'
            onClick={this.props.noteReplace && this.props.submit}>
            <img src={`${config.urls.media}apply.svg`} />
            <span>{config.translations.success}</span>
          </button>
        </div>
      </div>
    )
  }
}
