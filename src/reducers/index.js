import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import NavReducer from './NavReducer';
import CurrenctProductReducer from './CurrentProductReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  form,
  products: ProductsReducer,
  currentProduct: CurrenctProductReducer,
});
