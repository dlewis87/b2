import firebase from 'firebase';
import {
  MESSAGE_CREATE,
  MESSAGES_FETCH_SUCCESS,
  MESSAGE_SAVE_SUCCESS,
  CURRENT_MESSAGE_SET,
} from './types';

export const messageCreate = ({ name, type, price }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('messages')
      .push({ name, type, price, uid: currentUser.uid })
      .catch((error) => { console.log(error); })
      .then(() => {
        dispatch({ type: MESSAGE_CREATE });
        // TODO: should go back to view message with cleared stack
        mainNavigation(dispatch);
      });
  };
};

export const messagesFetch = () => {

  return (dispatch) => {
    firebase.database().ref('/messages')
      .on('value', (snapshot) => {
        dispatch({ type: MESSAGES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

// TODO: implement function
// export const userProductsFetch = () => {
//   const { currentUser } = firebase.auth();
//
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/messages`)
//       .on('value', (snapshot) => {
//         dispatch({ type: MESSAGES_FETCH_SUCCESS, payload: snapshot.val() });
//       });
//   };
// };

export const messageSave = ({ name, type, price, uid }) => {

  return (dispatch) => {
    firebase.database().ref(`messages/${uid}`)
      .set({ name, type, price })
      .then(() => {
        dispatch({ type: MESSAGE_SAVE_SUCCESS });
        // TODO: should go back to view message with cleared stack
        mainNavigation(dispatch);
      });
  };
};

// TODO: Implement this function
export const messageDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/messages/${uid}`)
      .remove()
      .then(() => {
        Actions.main({ type: 'reset' });
      });
  };
};

const currentProductSet = (dispatch, message) => {
  dispatch({ type: CURRENT_MESSAGE_SET, payload: message });
};

export const messageView = message => (dispatch) => {
  currentProductSet(dispatch, message);
  viewProductNavigation(dispatch);
};

export const messageEdit = message => (dispatch) => {
  currentProductSet(dispatch, message);
  editProductNavigation(dispatch);
};
