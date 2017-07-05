/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ReactPage from './ReactPage';
var ScrollableTabView = require('react-native-scrollable-tab-view');
export default class CustomTabBar extends Component {

    render() {
      return (
       <ScrollableTabView>
         <ReactPage tabLabel="React" />
         <ReactPage tabLabel="Flow" />
         <ReactPage tabLabel="Jest" />
       </ScrollableTabView>
     );
 }
  }
