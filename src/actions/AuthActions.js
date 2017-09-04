import firebase from 'firebase';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS,
} from './types';
import { mainNavigation } from './NavigationActions';


const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  mainNavigation(dispatch);
};

const logoutUserSuccess = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS,
  });

  mainNavigation(dispatch);
};


export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((error) => {
      console.log('loginUser error', error);

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
    });
};

export const logoutUser = () => (dispatch) => {
  firebase.auth().signOut()
    .then(() => logoutUserSuccess(dispatch))
    .catch((error) => {
      console.log('logoutUser error', error);
      // TODO: Send error to UI
    });
};

export const loginSkip = () => (dispatch) => {
  mainNavigation(dispatch);
};
