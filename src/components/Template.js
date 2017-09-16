import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Template = () => (
  <View>
    <Text>Placeholder for {this.props.placeholderText}</Text>
  </View>
);

Template.propTypes = {
  placeholderText: PropTypes.string.isRequired,
};

export default Template;
