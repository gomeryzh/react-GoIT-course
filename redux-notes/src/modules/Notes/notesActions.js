import shortid from 'shortid';
import {
  ADD,
  DELETE,
  TOGGLE_COMPLETED,
  CHANGE_FILTER,
} from './notesActionsTypes';

const addNote = text => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

const deleteNote = id => ({
  type: DELETE,
  payload: id,
});

const toggleNote = id => ({
  type: TOGGLE_COMPLETED,
  payload: id,
});

const filterNote = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export { addNote, deleteNote, toggleNote, filterNote };
