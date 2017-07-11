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
     TouchableOpacity,
      View
     } from "react-native";

import TinNongViewPager from  './TinNongViewPager';
export default class TinMoiUuDai extends Component {
  constructor(props) {
    super(props);
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
        <View style={{flex:9}}>
        <TinNongViewPager
        clickTinNongItem ={(LinkPoster,TieuDe,NoiDung)=>{
          console.log("aaa"+TieuDe);
          this.props.navigation.navigate('TinNongDetail',{LinkPoster:LinkPoster,TieuDe:TieuDe,NoiDung:NoiDung})

        }}
        />
        </View>
      </View>

    );
  }
}
const { height,width} = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height:height/3+50,
    width:width,
    flexDirection:'column',
    marginTop:20,
    backgroundColor: "#F5FCFF"
  },
  rowTitleContainer: {
    marginTop: 16,
    padding:5,
    flex:1,
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
