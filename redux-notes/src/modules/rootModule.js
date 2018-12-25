import { combineReducers } from 'redux';
import notesReducer from './Notes/notesReducer';

export default combineReducers({
  notes: notesReducer,
});
