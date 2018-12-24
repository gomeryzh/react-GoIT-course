import actionTypes from './actionTypes';

const initialCounterState = 100;

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + action.payload;
    case actionTypes.DECREMENT:
      return state - action.payload;
    case actionTypes.RESET:
      return initialCounterState;
    default:
      return state;
  }
};

export default counterReducer;
