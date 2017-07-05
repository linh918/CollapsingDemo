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
  ScrollView,
  ToolbarAndroid,
  View
} from 'react-native';
import {
  AppBarLayout,
  CoordinatorLayout,
  CollapsingToolbarLayout,
  CollapsingParallax,
  NestedScrollView,
} from 'react-native-collapsing-toolbar'
import CustomTabBar from './components/CustomTabBar';
import ToolbarMain from './components/ToolbarMain';

var HEADER_HEIGHT=300;
export default class App extends Component {
  render() {
    return (
      <CoordinatorLayout>
      <AppBarLayout style={{height: HEADER_HEIGHT, backgroundColor: '#000'}}>
        <CollapsingToolbarLayout
          title='Collapsing Toolbar'
          contentScrimColor='#ffffff'
          expandedTitleColor='#000000'
          expandedTitleGravity='BOTTOM'
          scrimAnimationDuration={500}
          expandedTitleMarginStart={22}
          expandedTitleMarginBottom={22}
          scrollFlags={
              AppBarLayout.SCROLL_FLAG_SCROLL
            | AppBarLayout.SCROLL_FLAG_EXIT_UNTIL_COLLAPSED
            | AppBarLayout.SCROLL_FLAG_SNAP
          }>
          <CollapsingParallax parallaxMultiplier={0.6}>
            <View collapsable={false} style={{height: HEADER_HEIGHT, justifyContent: 'center' }}>
              <Text style={{color:'white'}}>Some Custom Inside the Parallax</Text>
            </View>
          </CollapsingParallax>

          <ToolbarAndroid
           actions={[{title: 'Settings', icon: require('./media/icon/ic_menu_25px.png'), show: 'always'}]}
          navIcon={require('./media/icon/ic_user_25px.png')}
           onIconClicked={() =>{console.log("click icon");}}
            onActionSelected={() =>{console.log("click action");}}
          />
        </CollapsingToolbarLayout>
      </AppBarLayout>
      <NestedScrollView>
      <CustomTabBar/>
        <CustomTabBar/>
      </NestedScrollView>
    </CoordinatorLayout>
    );
  }
  // onIconClicked() {
  //   console.log("click icon");
  // },
  //  onActionSelected: function(position) { if (position === 0) {
  // console.log("click icon"); } }
}
