import actionTypes from './actionTypes';

const initialState = 5;

const stepReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_STEP:
      return payload;

    default:
      return state;
  }
};

export default stepReducer;
