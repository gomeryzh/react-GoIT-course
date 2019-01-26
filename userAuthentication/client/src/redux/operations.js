import {
  signUpSuccess,
  signUpRequest,
  signUpError,
  signInSuccess,
  signInRequest,
  signInError,
  signOutRequest,
  signOutSuccess,
  refreshCurrentUserStart,
  refreshCurrentUserSuccess
} from "./actions";
import Axios from "axios";

import { getToken } from "./selectors";

Axios.defaults.baseURL = "http://localhost:4040";

const setAuthHeader = token => {
  Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  Axios.defaults.headers.common["Authorization"] = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  Axios.post("/auth/signup", credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(signUpSuccess(data));
    })
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());
  Axios.post("/auth/signin", credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(signInSuccess(data));
    })
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

  Axios.post("/auth/signout", {}, config).then(() => {
    clearAuthHeader();
    dispatch(signOutSuccess());
  });
};

export const refreshCurrenUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(refreshCurrentUserStart());

  Axios.get("auth/current")
    .then(({ data }) => {
      dispatch(refreshCurrentUserSuccess(data.user));
    })
    .catch(error => {
      clearAuthHeader();
      console.log(error);
    });
};
