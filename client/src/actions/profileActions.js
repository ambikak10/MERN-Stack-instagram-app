import axios from "axios";
import {
  GET_PROFILE,
  // GET_PROFILES,
  PROFILE_LOADING,
  // CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  // SET_CURRENT_USER,
} from "./types";

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => {
       dispatch({
         type: GET_PROFILE,
         payload: res.data,
       });
      history.push('/profile');

    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};



// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Get current Profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  console.log('in getCurrentProfile action')
  axios
    .get("/api/profile")
    .then((res) => {
    console.log(res.data);
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    })
    .catch((err) =>{
      console.log(err);
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    });
};

