import axios from "axios";
import { GET_ERRORS, GET_POST } from "./types";
import { bindActionCreators } from "redux";

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
    .then(res => dispatch({
      type: GET_POST,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_POST,
      payload: null
    }))
};