import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PRODUCT_CREATE,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCT_SAVE_SUCCESS,
} from './types';

export const productCreate = ({ name, type, price }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/products`)
      .push({ name, type, price })
      .catch((error) => { console.log(error); })
      .then(() => {
        dispatch({ type: PRODUCT_CREATE });
        Actions.main({ type: 'reset' });
      });
  };
};

export const productsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/products`)
      .on('value', (snapshot) => {
        dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const productSave = ({ name, type, price, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/products/${uid}`)
      .set({ name, type, price })
      .then(() => {
        dispatch({ type: PRODUCT_SAVE_SUCCESS });
        Actions.main({ type: 'reset' });
      });
  };
};

export const productDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/products/${uid}`)
      .remove()
      .then(() => {
        Actions.main({ type: 'reset' });
      });
  };
};
