import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { addNote } from '../../modules/Notes/notesActions';

const mapDispatchToProps = {
  addNote,
};

export default connect(
  null,
  mapDispatchToProps,
)(NoteEditor);
