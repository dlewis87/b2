import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Item, Input, Button } from 'native-base';
import { Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { productSave, productCreate } from '../actions';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress(values) {
    const { name, type, price } = values;

    if (_.get(this.props, 'product.uid', false)) {
      this.props.productSave({ name, type, price, uid: this.props.product.uid });
    } else {
      this.props.productCreate({ name, type, price });
    }
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
            <Text>Submit</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const ProductFormRedux = reduxForm({ form: 'ProductForm' })(ProductForm);
const mapStateToProps = (state, ownProps) => {
  if (ownProps.product) {
    const { name, price, type } = ownProps.product;
    return (
      { initialValues: { name, price, type } }
    );
  }

  return {};
};

export default connect(mapStateToProps, {
  productSave, productCreate,
})(ProductFormRedux);
