import {
  signUpSuccess,
  signUpRequest,
  signUpError,
  signInSuccess,
  signInRequest,
  signInError,
  signOutRequest,
  signOutSuccess
} from './actions';
import Axios from 'axios';

import { getToken } from './selectors';

Axios.defaults.baseURL = 'http://localhost:4040';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  Axios.post('/auth/signup', credentials)
    .then(({ data }) => dispatch(signUpSuccess(data)))
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());
  Axios.post('/auth/signin', credentials)
    .then(({ data }) => dispatch(signInSuccess(data)))
    .catch(error => dispatch(signInError(error)));
};

export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest());

  const token = getToken(getState());

  const config = {
    headers: {
      Authorization: token
    }
  };

  Axios.post('/auth/signout', {}, config).then(() =>
    dispatch(signOutSuccess())
  );
};
