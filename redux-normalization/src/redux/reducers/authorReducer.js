import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

function authorIds(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.FETCH_DATA:
            return payload.ids.authors;
        default:
            return state;
    }
}

function authorSelectedId(state = null, { type, payload }) {
    switch (type) {
        case actionTypes.SELECT_AUTHOR:
            return payload;
        default:
            return state;
    }
}

export default combineReducers({
    authorIds,
    authorSelectedId,
});
