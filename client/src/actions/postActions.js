import axios from "axios";
import { GET_ERRORS, GET_POST, POST_LOADING, CLEAR_ERRORS } from "./types";

//Add post
export const addPost = (postData, history) => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res => history.push("/profile"))
    .catch(err => 
      dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//Get post
export const getPost = (postId) => dispatch => {
  axios
    .get(`/api/posts/${postId}`)
    .then(res => {
      console.log(res.data);
      dispatch({
      type: GET_POST,
      payload: res.data
    })})
    .catch(err => dispatch({
      type: GET_POST,
      payload: null
    }))
};

//Add comment
export const addComment = (commentInput, postId) => dispatch => {
  dispatch(setPostLoading());
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${postId}`, commentInput)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })})
}

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};