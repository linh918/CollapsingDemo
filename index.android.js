/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";

import App from "./components/App";
import PhimMoiDetail from "./components/PhimMoiDetail";
import TinMoiUuDai from "./components/TinMoiUuDai";
import TinNongDetail from "./components/TinNongDetail";
import Test from './Test';

export default class CollapsingDemo extends Component {}
AppRegistry.registerComponent("CollapsingDemo", () => App);
