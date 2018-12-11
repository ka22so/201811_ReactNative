
import * as React from 'react';
import { BackHandler } from 'react-native';
import { createStackNavigator, NavigationActions } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { Splash } from '../modules/Splash/Splash';
import { Counter } from '../modules/Counter/Counter';

interface Props {
  navigation: any;
  dispatch: any;
  value: any;
}

export const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      description: 'Splash screen',
    },
    Counter: {
      screen: Counter,
      description: 'Start screen',
    }
  },
  {
    initialRouteName: 'Counter',
    headerMode: 'none',
  },
);

export const NavMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.nav
);

export const NavReducer = createNavigationReducer(AppNavigator);

export const App = reduxifyNavigator(AppNavigator, 'root');

export class ReduxNavigation extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { navigation, dispatch } = this.props;
    if (navigation.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { navigation, dispatch, value } = this.props;
    const screenProps = { value };

    return <App state={navigation} dispatch={dispatch} screenProps={screenProps} />;
  }
}
