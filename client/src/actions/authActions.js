import { SET_CURRENT_USER, GET_ERRORS } from './types';
import axios from 'axios';


//Register user
export const signupUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(res => history.push('/'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
};
