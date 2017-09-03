import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import Tabs from './MainTabNavigator';
import LoginForm from '../components/LoginForm';
import ProductView from '../components/ProductView';
import ProductForm from '../components/ProductForm';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginForm },
  Main: { screen: Tabs },
  ViewProduct: { screen: ProductView },
  EditProduct: { screen: ProductForm },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
