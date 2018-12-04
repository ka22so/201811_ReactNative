import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

import Counter from './src/containers/Container';
import store from './src/store';

const Application = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

// const Application = () => (
//   <StyleProvider style={getTheme(material)}>
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   </StyleProvider>
// );

AppRegistry.registerComponent('AwesomeProject', () => Application);
