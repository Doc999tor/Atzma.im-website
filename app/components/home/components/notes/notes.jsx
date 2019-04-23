import {notesPostService, notesReplaceService, notesDeleteService} from 'project-services'
import {NotesLib} from 'project-components'
import './notes.styl'

export default class Notes extends React.Component {
  state = {
    newEditNotes: this.props.activateNone,
    noteReplace: this.props.activateNone,
    isEditNotes: this.props.activateNone,
    flag: true
  }
  static propTypes = {
    createNewNote: PropTypes.func.isRequired,
    activateNone: PropTypes.bool.isRequired,
    hiddenNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    notesData: PropTypes.array.isRequired,
    editeNote: PropTypes.func.isRequired,
    rights: PropTypes.object.isRequired
  }

  saveNote = (reminder, desc, id) => {
    const added = moment().format('YYYY-MM-DD HH:mm:ss')
    let body = `text=${desc}&added=${added}`
    if (reminder) body = body + `&reminder_date=${reminder}`
    notesPostService(body, id).then(r => {
      if (r.status === 201) {
        this.props.createNewNote(reminder, r, added, desc)
        this.setState({
          isEditNotes: !this.state.isEditNotes,
          newEditNotes: !this.state.newEditNotes,
          noteReplace: !this.state.noteReplace,
          isReminderEdit: false,
          switch: false,
          description: '',
          time: '0'
        })
      }
    })
  }

  editNote = (reminder, id, desc) => {
    let body = `text=${desc}`
    if (reminder) body = `text=${desc}&reminder_date=${reminder}`
    notesReplaceService(body, id).then(r => {
      if (r.status === 204) {
        this.props.editeNote(reminder, id, desc)
        this.setState({
          noteReplace: !this.state.noteReplace,
          isEditNotes: !this.state.isEditNotes,
          isReminderEdit: false,
          switch: false,
          description: '',
          note_id: 0,
          time: '0'
        })
      }
    })
  }

  deleteNote = id => {
    notesDeleteService(id).then(r => {
      this.props.deleteNote(id)
      if (r.status === 204) {
        this.setState(state => ({
          noteReplace: !this.state.noteReplace,
          isEditNotes: !this.state.isEditNotes,
          isReminderEdit: false,
          description: '',
          note_id: 0,
          time: '0',
          key: 0
        }))
      }
    })
  }
  componentWillMount = () => { if (!Array.isArray(config.data.notes)) config.data.notes = [] }
  render () {
    return (
      <NotesLib
        notesData={this.props.notesData}
        hiddenNotes={this.props.hiddenNotes}
        saveNote={this.saveNote}
        editNote={this.editNote}
        deleteNote={this.deleteNote}
        activateNone={this.props.activateNone}
        flag={this.state.flag}
      />
    )
  }
}
