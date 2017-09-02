import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Template from '../components/Template';

const Home = () => <View style={{ paddingTop: 30 }}><Template placeholderText="Home" /></View>;
const Me = () => <View style={{ paddingTop: 30 }}><Template placeholderText="Me" /></View>;
const Feed = () => <View style={{ paddingTop: 30 }}><Template placeholderText="Feed" /></View>;

const Tabs = TabNavigator({
  Products: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="explore" size={35} color={tintColor} />,
    },
  },
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
});

export default Tabs;