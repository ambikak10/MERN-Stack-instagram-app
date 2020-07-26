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
export const getPost = (postId, history) => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${postId}`)
    .then(res => {
      console.log(res.data);
      dispatch({
      type: GET_POST,
      payload: res.data
    })})
    .catch(err => {
      history.push("/not-found")})
};

//Delete post
export const deletePost = (postId, history) => dispatch => {
  axios
    .delete(`/api/posts/${postId}`)
    .then(res => history.push("/profile"))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

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
//Delete comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
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
      });
    })
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