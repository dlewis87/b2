import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { AppWithNavigationStateContainer } from './navigators/AppNavigator';

const App = () => {
  const logger = createLogger();
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
  return (
    <Provider store={store}>
      <AppWithNavigationStateContainer />
    </Provider>
  );
};

export default App;
