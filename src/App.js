import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCuDWNDyk9WUwLqsT2H7y17BMv_y5vs_5k',
      authDomain: 'btse2-31417.firebaseapp.com',
      databaseURL: 'https://btse2-31417.firebaseio.com',
      projectId: 'btse2-31417',
      storageBucket: 'btse2-31417.appspot.com',
      messagingSenderId: '151504074200',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
