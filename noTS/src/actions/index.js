import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      payload: 'Account already exists with that email address',
      type: AUTH_ERROR
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    payload: '',
    type: AUTH_USER
  };
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signin',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      payload: 'Invalid login credentials',
      type: AUTH_ERROR
    });
  }
};
