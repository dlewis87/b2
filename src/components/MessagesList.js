import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';

class MessagesList extends Component {
  componentWillMount() {
    const { id } = this.props.product;

    this.props.messageFetch(id);
  }

  render() {
    return (
      <Card />
    );
  }
}

export default MessagesList;
