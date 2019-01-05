import { connect } from 'react-redux';
import React, { Component } from 'react';
import NoteList from './NoteList';
import { filteredNotes } from '../../modules/Notes/notesSelector';
import {
  fetchNotes,
  deleteNote,
  toggleNote,
} from '../../modules/Notes/notesOperations';

class NotesListContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return <NoteList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  notes: filteredNotes(state),
});

const mapDispatchToProps = { fetchNotes, deleteNote, toggleNote };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotesListContainer);
