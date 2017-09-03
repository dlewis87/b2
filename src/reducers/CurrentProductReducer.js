import {
  CURRENT_PRODUCT_SET,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_PRODUCT_SET:
      return action.payload;
    default:
      return state;
  }
};
