import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  // loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    
    case PROFILE_LOADING:
      return {
        ...state,
      //   loading: false,
       };
    case GET_PROFILE:
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}