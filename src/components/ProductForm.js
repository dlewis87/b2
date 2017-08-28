import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Item, Input, Button } from 'native-base';
import { Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { productUpdate, productCreate } from '../actions';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(values) {
    const { name, type, price } = values;

    this.props.productCreate({ name, type, price });
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
          <Button onPress={handleSubmit(this.onButtonPress)}>
            <Text>Create</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const ProductFormRedux = reduxForm()(ProductForm);
const mapStateToProps = state => {
  return (
    {
      form: 'ProductForm',
    }
  );
};

export default connect(mapStateToProps, {
  productUpdate, productCreate,
})(ProductFormRedux);
