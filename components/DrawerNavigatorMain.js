import React, { Component } from "react";

import {
  AppRegistry,
  Alert,
  StyleSheet,
  Button,
  Text,
  View
} from "react-native";
import { MyStack } from "./StackNavigatorMain";
import HomeMenu from "./HomeMenu";
import {
  StackNavigator,
  Menu,
  TabNavigator,
  DrawerNavigator
} from "react-navigation";

export const SlideMenu = DrawerNavigator(
  {
    Tab: {
      screen: MyStack
    }
  },
  {
    drawerWidth: 300,
    drawerPosition: "right",
    contentComponent: props => <HomeMenu {...props} />
  }
);
