import actionTypes from './actionTypes';

const increment = value => ({
  type: actionTypes.INCREMENT,
  payload: value,
});

const decrement = value => ({
  type: actionTypes.DECREMENT,
  payload: value,
});

const reset = () => ({
  type: actionTypes.RESET,
});

const changeStep = value => ({
  type: actionTypes.CHANGE_STEP,
  payload: value,
});

export { increment, decrement, reset, changeStep };
