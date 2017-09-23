import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, Image } from 'react-native';
import {
  Button,
  Card,
  CardItem,
  Container,
  // Header,
  Content,
  Left,
  // Thumbnail,
  Body,
  // Image,
  Icon,
  Right,
} from 'native-base';
import { productView } from '../actions';
import images from '../data/product_images.json';


const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  containerStyle: {
    height: 350,
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

  randImage() {
    const imageNum = Math.floor((Math.random() * images.images.length));
    return images.images[imageNum];
  }

  render() {
    const { name, type, price } = this.props.product;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <Container style={styles.containerStyle}>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  {/* <Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2011/01/05/23/29/baboons-4371_960_720.jpg' }} /> */}
                  <Image
                    style={{ height: 50, width: null, flex: 1 }}
                    source={{ uri: 'https://ichef.bbci.co.uk/images/ic/1200x675/p01m2125.jpg' }}
                  />
                  <Body>
                    <Text>Name: {name}</Text>
                    <Text note>Type: {type}</Text>
                    <Text note>Price: {price}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  style={{ height: 200, width: null, flex: 1 }}
                  source={{ uri: this.randImage() }}
                />
                {/* <Image source={{ uri: 'https://cdn.pixabay.com/photo/2011/01/05/23/29/baboons-4371_960_720.jpg' }} style={{ height: 200, width: null, flex: 1 }} /> */}
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="thumbs-up" />
                    <Text>12 Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text>4 Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  productView: PropTypes.func.isRequired,
  product: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default connect(null, { productView })(ListItem);
