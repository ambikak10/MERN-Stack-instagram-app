import axios from "axios";
import { GET_ERRORS } from "./types";

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