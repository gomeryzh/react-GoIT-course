import { actionTypes } from '../actions';

export default function postReducer(state = [], { type, payload }) {
    switch (type) {
        case actionTypes.FETCH_DATA:
            return payload.ids.posts;
        default:
            return state;
    }
}
