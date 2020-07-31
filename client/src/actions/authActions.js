import { SET_CURRENT_USER, GET_ERRORS, GET_PROFILE } from './types';
import axios from 'axios';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {getCurrentProfile} from './profileActions'

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

//Logout user
export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove token from auth header
  setAuthToken(false);
  //Reset the redux store to false and {}
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  })
};

//Add picture
export const addPicture = (picture, history) => dispatch => {
  axios
    .post("/api/users/editAvatar", picture)
    .then(res => {      
      window.alert("Photo successfully changed")
      history.push("/profile")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
};