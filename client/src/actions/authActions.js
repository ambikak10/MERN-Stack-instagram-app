import { SET_CURRENT_USER, GET_ERRORS } from './types';
import axios from 'axios';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";


//Register user
export const signupUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
};

// Login user
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      // Save token to localStorage
      const {token} = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to axios header
      setAuthToken(token);
      // Decode the token
      const decoded = jwt_decode(token);
      // Dispatch set current user
       dispatch({
       type: SET_CURRENT_USER,
       payload: decoded
      });
    }).catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};