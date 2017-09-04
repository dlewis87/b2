import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
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
  Image,
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
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                {/*<Thumbnail source={{ uri: 'https://cdn.pixabay.com/photo/2011/01/05/23/29/baboons-4371_960_720.jpg' }} />*/}
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
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
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ currentProduct }) => ({ product: currentProduct });
export default connect(mapStateToProps, { productEdit })(ProductView);
