import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from "react-native";

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 56;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
import TinNong from "./TinNong";
import CarouselPhimMoi from "./CarouselPhimMoi";
import TinNongViewPager from './TinNongViewPager';

export default class CGVMainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
      <CarouselPhimMoi {...this.props} style={{ margin: 10 }} />

         <TinNong {...this.props}/>

      </View>
    );
  }

  _onMenu(){
      this.props.navigation.navigate("DrawerOpen");
  }
  _onUser(){
      this.props.navigation.navigate("SignInScreen");
  }

  render() {
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const titleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });
    const header2Translate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 200],
      extrapolate: "clamp"
    });

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp"
    });
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 8],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.fill}>
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] }
          ]}
        >
       <Animated.View
       style={[
         styles.header2,
         { transform: [{ translateY: header2Translate }] }
       ]}
       >
       <Animated.Image
          style={[
            styles.backgroundImage,
            {
              opacity:imageOpacity
            }

          ]}
          source={{uri:"https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/t/r/transformers_980-x-448.jpg"}}
        />
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity onPress={()=> {this._onUser()}}>
        <Image source={require("../media/icon/ic_user_25px.png")}/>
       </TouchableOpacity>


       </View>
        <TouchableOpacity onPress={()=> this._onMenu()}>
       <Image  source={require("../media/icon/ic_menu_25px.png")}/>
        </TouchableOpacity>
       </Animated.View>


        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {  opacity: titleOpacity,
              transform: [ { translateY: titleTranslate }]
            }
          ]}
        >
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity onPress={()=> {this._onUser()}}>
        <Image source={require("../media/icon/ic_user_25px.png")}/>
        </TouchableOpacity>
        <Text style={{ color: "black" }}>Cultulplex</Text>
        <Text style={{ color: "red" }}>CGV</Text>
        </View>
          <TouchableOpacity onPress={()=>{ this._onMenu()}}>
        <Image  source={require("../media/icon/ic_menu_25px.png")}/>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
      padding:16
  },

  header2: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:16
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover"
  },

 backgroudView:{
   position: "absolute",
   top: 0,
   left: 0,
   right: 0,
   width: null,
   height: HEADER_MAX_HEIGHT,

 },

  bar: {

    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    overflow: "hidden",
    height: 56,
    flexDirection:'row',
    justifyContent:'space-between',
  alignItems:'center',
    padding:16
  },
  title: {
    color: "white",
    fontSize: 18
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  }
});
