import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import NoteEditor from './components/NoteEditor/NoteEditorContainer';
import NoteList from './components/NoteList/NoteListContainer';

const App = () => (
  <>
    <AppHeader />
    <NoteEditor />
    <NoteList />
  </>
);

export default App;
