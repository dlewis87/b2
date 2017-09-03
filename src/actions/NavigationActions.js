import {
  NAV_MAIN,
  NAV_LOGIN,
  NAV_VIEW_PRODUCT,
  NAV_EDIT_PRODUCT,
} from './types';

export const mainNavigation = (dispatch) => {
  dispatch({ type: NAV_MAIN });
};

export const loginNavigation = (dispatch) => {
  dispatch({ type: NAV_LOGIN });
};

export const viewProductNavigation = (dispatch) => {
  dispatch({
    type: NAV_VIEW_PRODUCT,
  });
};

export const editProductNavigation = (dispatch) => {
  dispatch({
    type: NAV_EDIT_PRODUCT,
  });
};
