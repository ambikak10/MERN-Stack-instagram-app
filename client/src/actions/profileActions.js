import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, GET_PROFILE, CLEAR_CURRENT_PROFILE, GET_PROFILES, PROFILE_LOADING } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Create Profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/api/profile", profileData)
    .then((res) => history.push("/profile"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete profile and account
export const deleteAccount = (history) => (dispatch) => {
  console.log("delete ptofile action");
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/profile")
      .then((res) => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        });
        history.push("/");
        //Remove token from localStorage otherwise after deleting account, on refreshing page --the navbar shows -- as token will still be there in headers and locastorage 
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
      })
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};
// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(clearCurrentProfile());
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};
// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(clearCurrentProfile());
  dispatch(setProfileLoading());
  console.log('action getProfileby handle')
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res =>{
      // console.log(res);
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
     } )
    .catch(err =>{
      // console.log(err)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

//Get suggestion list
export const getSuggestionList = () => dispatch => {
  axios
    .get("/api/profile/suggestions")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      })
    })
    .catch(err => {
      // console.log(err);
      dispatch({
        type: GET_PROFILES,
        payload: {}
      })
    })
};

//Follow a user
export const followUser = (profileId) => dispatch => {
  axios
    .post(`/api/profile/follow/${profileId}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}

//Unfollow a user
export const unfollowUser = (profileId) => dispatch => {
  axios
    .post(`/api/profile/unfollow/${profileId}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })
}