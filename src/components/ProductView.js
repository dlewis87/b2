import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Image } from 'react-native';
import {
  Button,
  Card,
  CardItem,
  Container,
  Header,
  Content,
  Left,
  Thumbnail,
  Body,
  // Image,
  Icon,
  Right,
} from 'native-base';
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
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                {/*<Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2011/01/05/23/29/baboons-4371_960_720.jpg' }} />*/}
                <Image
                  style={{ height: 50, width: null, flex: 1 }}
                  source={{ uri: 'https://ichef.bbci.co.uk/images/ic/1200x675/p01m2125.jpg' }}
                />
                <Body>
                  <Text>{name}</Text>
                  <Text note>{type}</Text>
                  <Text note>{price}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                style={{ height: 200, width: null, flex: 1 }}
                source={{ uri: 'https://cdn.pixabay.com/photo/2011/01/05/23/29/baboons-4371_960_720.jpg' }}
              />
              {/*<Image source={{ uri: 'https://cdn.pixabay.com/photo/2011/01/05/23/29/baboons-4371_960_720.jpg' }} style={{ height: 200, width: null, flex: 1 }} />*/}
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
          <Card>
            <CardItem>
              <Button full success rounded={false} onPress={this.onButtonPress}>
                <Text>Edit Product</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ currentProduct }) => ({ product: currentProduct });
export default connect(mapStateToProps, { productEdit })(ProductView);
