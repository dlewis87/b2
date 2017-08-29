import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardItem } from 'native-base';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    Actions.productView({ product: this.props.product });
  }

  render() {
    const { name } = this.props.product;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

export default ListItem;
