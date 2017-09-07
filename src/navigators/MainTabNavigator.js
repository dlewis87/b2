import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import UserProfile from '../components/UserProfile';

const Tabs = TabNavigator({
  Home: {
    screen: ProductList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  Add: {
    screen: ProductForm,
    navigationOptions: {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) => <Icon name="add-circle-outline" size={35} color={tintColor} />,
    },
  },
  Messages: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => <Icon name="mail-outline" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
});

export default Tabs;
