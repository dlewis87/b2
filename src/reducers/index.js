import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import ProductFormReducer from './ProductFormReducer';

export default combineReducers({
  form,
  auth: AuthReducer,
  product: ProductReducer,
  productForm: ProductFormReducer,
});
