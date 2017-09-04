import React from 'react';
// import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import UserProfile from '../components/UserProfile';

// const Me = () => <View style={{ paddingTop: 30 }}><Template placeholderText="Me" /></View>;

const Tabs = TabNavigator({
  Products: {
    screen: ProductList,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />,
    },
  },
  Add: {
    screen: ProductForm,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="add-circle-outline" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
});

export default Tabs;
