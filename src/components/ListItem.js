import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardItem } from 'native-base';
import { productView } from '../actions';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    this.props.productView(this.props.product);
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

export default connect(null, { productView })(ListItem);
