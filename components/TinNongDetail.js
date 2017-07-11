/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry,
   StyleSheet,
    Text,
     Dimensions,
     View ,
     ScrollView,
     Image,
   } from "react-native";

import ToolbarDetail from  './ToolbarDetail';

export default class TinNongDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   const{state}=this.props.navigation;

    return (
      <View style={styles.container}>
        <ToolbarDetail {...this.props} name="Tin mới & Ưu đãi"/>
        <ScrollView>
        <Image style={styles.imagePoster}  source={{uri:state.params.LinkPoster}}/>
        <Text style={styles.textTieuDe}>{state.params.TieuDe}</Text>
          <Text style={styles.textNoiDung}>{state.params.NoiDung}</Text>
        </ScrollView>
      </View>
    );
  }
}
const { height,width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#DAD6CC"
  },
  imagePoster: {
    backgroundColor:'black',
     height:height*0.33,
     width:width,
     resizeMode:'cover'
  },

  textNoiDung: {
    fontSize: 14,
    color: "#5B4E44",
    fontWeight:'bold',
    margin:16
  },
  textTieuDe: {
    fontSize: 16,
    color: "#5B4E44",
    fontWeight:'bold',
      margin:16
  },
});
