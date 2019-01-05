import { combineReducers } from 'redux';
import * as types from './notesActionsTypes';

function notesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;
    case types.ADD_SUCCESS:
      return [...state, payload];
    case types.DELETE_SUCCESS:
      return state.filter(item => item.id !== payload);

    case types.TOGGLE_COMPLETED_SUCCESS:
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

function loadingReducer(state = false, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return true;
    case types.FETCH_SUCCESS:
    case types.FETCH_ERROR:
      return false;
    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_REQUEST:
      return null;
    case types.FETCH_ERROR:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  items: notesReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
