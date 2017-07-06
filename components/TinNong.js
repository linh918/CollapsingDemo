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
      View,
      TouchableOpacity
    } from "react-native";
import TinNongListView from './TinNongListView';

export default class TinNong extends Component {
  constructor(props){
    super(props);
  }

  _navigateTinNongDetail(LinkPoster,TieuDe,NoiDung){
      this.props.navigation.navigate('TinNongDetail',{LinkPoster:LinkPoster,TieuDe:TieuDe,NoiDung:NoiDung})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowTitleContainer}>
        <Text style={{color:'black',fontWeight:'bold'}}>Tin nóng</Text>
        <TouchableOpacity style={styles.borderButton}>
          <Text style={{color:'black'}}>TẤT CẢ</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:9.5}}>
        <TinNongListView clickTinNongItem ={(LinkPoster,TieuDe,NoiDung)=>{
          console.log("aaa"+TieuDe);
          this.props.navigation.navigate('TinNongDetail',{LinkPoster:LinkPoster,TieuDe:TieuDe,NoiDung:NoiDung})

        }}/>
        </View>

      </View>
    );
  }
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    marginTop:20,
    backgroundColor: "#F5FCFF"
  },
  rowTitleContainer: {
    marginTop: 16,
    padding:5,
    flex:0.5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  borderButton:{
    borderColor:'black',
    borderWidth:1,
    padding:2,

    borderRadius:5,

  }
});
