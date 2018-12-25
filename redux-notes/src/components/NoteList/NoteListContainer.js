import { connect } from 'react-redux';
import NoteList from './NoteList';
import { filteredNotes } from '../../modules/Notes/notesSelector';
import { deleteNote, toggleNote } from '../../modules/Notes/notesActions';

const mapStateToProps = state => ({
  notes: filteredNotes(state),
});

const mapDispatchToProps = { deleteNote, toggleNote };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
