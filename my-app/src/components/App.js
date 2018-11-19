import React, { Component } from 'react';
import v4 from 'uuid/v4';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import NotesFilter from './NotesFilter';

const filterNotes = (filter, notes) => {
  return notes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    notes: [
      { id: 'id-1', text: 'JS' },
      { id: 'id-2', text: 'React' },
      { id: 'id-3', text: 'React Router' },
      { id: 'id-4', text: 'Redux' },
    ],
    filter: '',
  };

  handleAddNote = text => {
    this.setState(prevState => ({
      notes: [{ id: v4(), text }, ...prevState.notes],
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  };

  handleFilterChange = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  render() {
    const { notes, filter } = this.state;
    const filteredNotes = filterNotes(filter, notes);
    return (
      <div>
        <NoteEditor onAddNote={this.handleAddNote} />
        <NotesFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <NotesList onDeleteNote={this.handleDeleteNote} notes={filteredNotes} />
      </div>
    );
  }
}
