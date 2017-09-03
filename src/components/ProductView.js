import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Button, Card, CardItem } from 'native-base';
import { productEdit } from '../actions';

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    this.props.productEdit(this.props.product);
  }

  render() {
    const { name, type, price } = this.props.product;

    return (
      <Card>
        <CardItem>
          <Text>{name}</Text>
        </CardItem>

        <CardItem>
          <Text>{type}</Text>
        </CardItem>

        <CardItem>
          <Text>{price}</Text>
        </CardItem>

        <CardItem>
          <Button onPress={this.onButtonPress}>
            <Text>Edit</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = ({ currentProduct }) => ({ product: currentProduct });
export default connect(mapStateToProps, { productEdit })(ProductView);
