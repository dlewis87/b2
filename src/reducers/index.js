import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import ProductsReducer from './ProductsReducer';
import NavReducer from './NavReducer';
import CurrentProductReducer from './CurrentProductReducer';
import MessagesReducer from './MessagesReducer';

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  form,
  products: ProductsReducer,
  messages: MessagesReducer,
  currentProduct: CurrentProductReducer,
});
