import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableHighlight } from 'react-native';
import { Card, CardItem, Button, Item, Input } from 'native-base';
import { Field, reduxForm } from 'redux-form';

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
    this.onButtonPress = this.onButtonPress(this);
  }

  onButtonPress(values) {
  }

  closeMessage() {
    // this.props.sendMessage(false);
  }

  sendMessage() {
    // this.props.sendMessage(false);
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
      <View style={{ marginTop: 22 }}>
        <View>
          <Card>
            <CardItem>
              <Field name="name" component={this.renderInput} />
            </CardItem>

            <CardItem>
              <Field name="type" component={this.renderInput} />
            </CardItem>

            <CardItem>
              <Field name="price" component={this.renderInput} />
            </CardItem>

            <CardItem>
              {/*<Button onPress={handleSubmit(this.onButtonPress)}>*/}
                {/*<Text>Submit</Text>*/}
              {/*</Button>*/}
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.buttonContainerStyles}>
              <Button full success rounded={false} onPress={this.sendMessage}>
                <Text>Edit Product</Text>
              </Button>
              <Button full primary rounded={false} onPress={this.closeMessage}>
                <Text>Send Message</Text>
              </Button>
            </CardItem>
          </Card>
          <TouchableHighlight >
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const MessageFormRedux = reduxForm({ form: 'MessageForm' })(MessageForm);
export default connect()(MessageFormRedux);
