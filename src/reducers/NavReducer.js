import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import {
  NAV_MAIN,
  NAV_LOGIN,
  NAV_VIEW_PRODUCT,
  NAV_EDIT_PRODUCT,
} from '../actions/types';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case NAV_MAIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Main' }),
          ],
        }),
        state,
      );
      break;
    case NAV_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state,
      );
      break;
    case NAV_VIEW_PRODUCT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ViewProduct' }),
        state,
      );
      break;
    case NAV_EDIT_PRODUCT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'EditProduct' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
