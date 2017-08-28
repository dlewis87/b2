import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.productCreate()}
          rightTitle="Add"
          key="employeeList"
          component={ProductList}
          title="Products"
          initial
        />
        <Scene key="productCreate" component={ProductForm} title="Create Product" />
        <Scene key="productEdit" component={ProductForm} title="Edit Product" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
