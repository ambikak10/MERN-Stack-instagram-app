import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_FOLLOWING,
  GET_ALL_PROFILES,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false,
  followingList: null,
  search: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE:
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
        loading: false,
      };
    case GET_ALL_PROFILES: 
      return {
        ...state,
        search: action.payload,
        loading: false
      }
    case GET_FOLLOWING:
      return {
        ...state,
        followingList: action.payload,
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}