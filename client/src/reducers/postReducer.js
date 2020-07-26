import { GET_USER_POSTS, POST_LOADING } from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  userPosts: [],
  loading: false
};

export default function (state=initialState, action) {
  switch (action.type) {
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