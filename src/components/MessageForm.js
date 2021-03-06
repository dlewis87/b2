import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardItem, Button, Item, Input, Container, Header, Content } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { messageCreate } from '../actions';

const styles = {
  buttonContainerStyles: {
    flex: 1,
    justifyContent: 'space-around',
  },
};

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.sendMessage = this.sendMessage.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }

  closeMessage() {
    this.props.sendMessage(false);
  }

  sendMessage({ subject, content }) {
    this.props.messageCreate({ subject, content, productId: this.props.product.uid });
    this.props.sendMessage(false);
  }

  renderInput({ input, meta: { error } }) {
    const hasError = error !== undefined;
    return (
      <Item error={hasError}>
        <Input {...input} />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Text>Subject</Text>
              <Field name="subject" component={this.renderInput} />
            </CardItem>

            <CardItem>
              <Text>Content</Text>
              <Field name="content" component={this.renderInput} />
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.buttonContainerStyles}>
              <Button full success rounded={false} onPress={handleSubmit(this.sendMessage)}>
                <Text>Send Message</Text>
              </Button>
              <Button full primary rounded={false} onPress={this.closeMessage}>
                <Text>Close</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

MessageForm.defaultProps = {
  product: {},
};

MessageForm.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  messageCreate: PropTypes.func.isRequired,
  product: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }),
  handleSubmit: PropTypes.func.isRequired,
};

const MessageFormRedux = reduxForm({ form: 'MessageForm' })(MessageForm);
const mapStateToProps = ({ currentProduct }) => {
  if (currentProduct) {
    return ({ product: { uid: currentProduct.uid } });
  }

  return {};
};
export default connect(mapStateToProps, {
  messageCreate,
})(MessageFormRedux);
