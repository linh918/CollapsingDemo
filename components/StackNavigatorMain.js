import React, { Component } from "react";

import {
  AppRegistry,
  Alert,
  StyleSheet,
  Button,
  Text,
  View
} from "react-native";
import {
  StackNavigator,
  Menu,
  TabNavigator,
  DrawerNavigator
} from "react-navigation";
import SignInScreen from "./SignInScreen";
import CGVMainView from "./CGVMainView";
import PhimMoiDetail from "./PhimMoiDetail";
import TinNongDetail from "./TinNongDetail";

export const MyStack = StackNavigator(
  {
    CGVMainView: {
      screen: CGVMainView,
      navigationOptions: {}
    },
    SignInScreen: {
      screen: SignInScreen,
      navigationOptions: {}
    },
    PhimMoiDetail: {
      screen: PhimMoiDetail,
      navigationOptions: {}
    },
    TinNongDetail: {
      screen: TinNongDetail,
      navigationOptions: {}
    }
  },
  {
    headerMode: "none"
  }
);
