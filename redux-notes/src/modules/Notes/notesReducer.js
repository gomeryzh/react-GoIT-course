import { combineReducers } from 'redux';
import * as types from './notesActionsTypes';

function notesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.ADD:
      return [...state, payload];
    case types.DELETE:
      return state.filter(item => item.id !== payload);

    case types.TOGGLE_COMPLETED:
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item,
      );
    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  items: notesReducer,
  filter: filterReducer,
});
