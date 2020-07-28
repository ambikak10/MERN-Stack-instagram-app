import { GET_POST, GET_POSTS, POST_LOADING, GET_USER_POSTS } from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  userPosts: [],
  loading: false
};

export default function (state=initialState, action) {
  switch(action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}