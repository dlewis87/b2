import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet } from 'react-native';
import { productsFetch } from '../actions';
import ListItem from './ListItem';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
});


class ProductList extends Component {
  componentWillMount() {
    this.props.productsFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ product }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(product);
  }

  renderRow(product) {
    return <ListItem product={product} />;
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.container}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const product = _.map(state.product, (val, uid) => ({ ...val, uid }));

  return { product };
};

export default connect(mapStateToProps, { productsFetch })(ProductList);
