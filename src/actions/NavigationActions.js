import {
  NAV_MAIN,
  NAV_LOGIN,
} from './types';

export const mainNavigation = (dispatch) => {
  dispatch({ type: NAV_MAIN });
};

export const loginNavigation = (dispatch) => {
  dispatch({ type: NAV_LOGIN });
};
