import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import Counter from './src/containers/Container';
import store from './src/store';

const Application = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

AppRegistry.registerComponent('AwesomeProject', () => Application);
