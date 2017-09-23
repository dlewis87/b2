import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { messagesFetch, productMessagesFetch } from '../actions';
import MessageItem from './MessageItem';

class MessageList extends Component {
  componentWillMount() {
    const { productId } = this.props;

    console.log('productId', productId);

    if (productId) {
      this.props.productMessagesFetch({ productId });
    } else {
      this.props.messagesFetch();
    }

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ messages }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(messages);
  }

  renderRow(message) {
    return <MessageItem message={message} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

MessageList.defaultProps = {
  productId: '',
};

MessageList.propTypes = {
  messagesFetch: PropTypes.func.isRequired,
  productMessagesFetch: PropTypes.func.isRequired,
  productId: PropTypes.string,
};

const mapStateToProps = (state) => {
  const messages = _.map(state.messages, (val, uid) => ({ ...val, uid }));

  return { messages };
};

export default connect(mapStateToProps, {
  messagesFetch, productMessagesFetch,
})(MessageList);
