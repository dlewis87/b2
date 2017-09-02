import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Template extends Component {

  render() {

    return (
      <View>
        <Text>Placeholder for {this.props.placeholderText}</Text>
      </View>
    );
  }
}

export default Template;
