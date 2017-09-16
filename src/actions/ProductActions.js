import firebase from 'firebase';
import { currentUser, productsRef } from './database';
import {
  PRODUCT_CREATE_SUCCESS,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCT_SAVE_SUCCESS,
  CURRENT_PRODUCT_SET,
} from './types';
import {
  viewProductNavigation,
  editProductNavigation,
  mainNavigation,
} from './NavigationActions';

export const productCreate = ({ name, type, price }) => (dispatch) => {
  productsRef
    .push({ name, type, price, uid: currentUser.uid })
    .catch((error) => { console.log(error); })
    .then(() => {
      dispatch({ type: PRODUCT_CREATE_SUCCESS });
      // TODO: should go back to view product with cleared stack
      mainNavigation(dispatch);
    });
};

export const productsFetch = () => (dispatch) => {
  productsRef
    .on('value', (snapshot) => {
      dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: snapshot.val() });
    });
};

// TODO: implement function
// export const userProductsFetch = () => {
//   const { currentUser } = firebase.auth();
//
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/products`)
//       .on('value', (snapshot) => {
//         dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: snapshot.val() });
//       });
//   };
// };

export const productSave = ({ name, type, price, uid }) => (dispatch) => {
  firebase.database().ref(`products/${uid}`)
    .set({ name, type, price })
    .then(() => {
      dispatch({ type: PRODUCT_SAVE_SUCCESS });
      // TODO: should go back to view product with cleared stack
      mainNavigation(dispatch);
    });
};

// TODO: Implement this function
// export const productDelete = ({ uid }) => {
//
//   return () => {
//     firebase.database().ref(`/users/${currentUser.uid}/products/${uid}`)
//       .remove()
//       .then(() => {
//         Actions.main({ type: 'reset' });
//       });
//   };
// };

const currentProductSet = (dispatch, product) => {
  dispatch({ type: CURRENT_PRODUCT_SET, payload: product });
};

export const productView = product => (dispatch) => {
  currentProductSet(dispatch, product);
  viewProductNavigation(dispatch);
};

export const productEdit = product => (dispatch) => {
  currentProductSet(dispatch, product);
  editProductNavigation(dispatch);
};
