import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import NavReducer from './NavReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  form,
  product: ProductReducer,
});
