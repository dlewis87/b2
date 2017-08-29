import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    Actions.productEdit({ product: this.props.product });
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

export default ProductView;
