import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardItem } from 'native-base';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class MessageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { subject, content } = this.props.message;

    return (
      <TouchableWithoutFeedback>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>
              {subject} - {content}
            </Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

MessageItem.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    subject: PropTypes.strign.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
};

export default connect()(MessageItem);
