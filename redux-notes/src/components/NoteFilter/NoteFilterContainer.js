import { connect } from 'react-redux';
import NoteFilter from './NoteFilter';
import { filterNote } from '../../modules/Notes/notesActions';
import { getFilter } from '../../modules/Notes/notesSelector';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = {
  onChange: filterNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFilter);
