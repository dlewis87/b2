import {
  MESSAGE_CREATE_SUCCESS,
  MESSAGES_FETCH_SUCCESS,
} from './types';
import { messagesRef, currentUser } from './database';

export const messageCreate = ({ subject, content, productId }) => (dispatch) => {
  messagesRef
    .push({ subject, content, uid: currentUser.uid, product: productId })
    .catch((error) => { console.log(error); })
    .then(() => { dispatch({ type: MESSAGE_CREATE_SUCCESS }); });
};

export const messagesFetch = () => (dispatch) => {
  messagesRef
    .on('value', (snapshot) => {
      dispatch({ type: MESSAGES_FETCH_SUCCESS, payload: snapshot.val() });
    });
};

