import
React, {
  Component
}
from 'react';

import {

  AppRegistry,
  Alert,
  StyleSheet,
  Button,
  Text,
  View,
}
from 'react-native';
import {
  StackNavigator,
  Menu,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';
import SignInScreen from './SignInScreen';
import CGVMainView from './CGVMainView';

export const MyStack = StackNavigator({

    CGVMainView: {
      screen: CGVMainView,
      navigationOptions: {

      }
    },
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: {

      }
    },
  }, {
    headerMode: 'none'
  },

)
