import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { logoutUser, loginNavigation } from '../actions';

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  logout() {
    this.props.logoutUser();
  }

  login() {
    this.props.loginNavigation();
  }

  render() {
    return (
      <View>
        <Button full success rounded={false} onPress={this.logout}>
          <Text>Logout</Text>
        </Button>
        <Button full primary rounded={false} onPress={this.login}>
          <Text>Login</Text>
        </Button>
      </View>
    );
  }
}

export default connect(null, { logoutUser, loginNavigation })(UserProfile);
