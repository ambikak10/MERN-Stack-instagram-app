import axios from "axios";
import { GET_ERRORS, GET_USER_POSTS, POST_LOADING } from "./types";

//Add post
export const addPost = (postData, history) => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res => {
      window.alert("Post successfully submitted")
      history.push("/profile")})
    .catch(err => 
      dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}
//Get all posts of a user
export const getUserPosts = () => dispatch => {
    dispatch(setPostLoading());
  axios
    .get("api/posts/currentUser")
    .then((res) => {
      console.log(res);
      dispatch({
        type: GET_USER_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
}
// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};