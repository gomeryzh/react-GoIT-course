import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

const ids = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return state.includes(payload.id)
                ? [...state]
                : [...state, payload.id];

        case actionTypes.REMOVE_FROM_CART:
            return state.filter(id => id !== payload.id);

        default:
            return state;
    }
};

const amount = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
            };
        // return state[payload.id]
        //     ? { ...state, [payload.id]: state[payload.id] + 1 }
        //     : { ...state, [payload.id]: 1 };

        case actionTypes.REMOVE_FROM_CART:
            const { [payload.id]: _, ...newState } = state;
            return newState;

        case actionTypes.INCREMENT_PRODUCT_AMOUNT:
            return {
                ...state,
                [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
            };

        case actionTypes.DECREMENT_PRODUCT_AMOUNT:
            return {
                ...state,
                [payload.id]: state[payload.id] ? state[payload.id] - 1 : 0,
            };

        default:
            return state;
    }
};

export default combineReducers({ ids, amount });
