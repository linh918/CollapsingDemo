import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View
} from "react-native";

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 56;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
import ToolbarMain from './components/ToolbarMain'

export default class Test extends Component {
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
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>
              {i}
            </Text>
          </View>
        )}
      </View>
    );
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
          source={require("./media/icon/pic2.png")}
        />
       <View style={{flexDirection:'row'}}>
       <Image source={require("./media/icon/ic_user_25px.png")}/>
       <Text>Cultulplex</Text>
       </View>

       <Image source={require("./media/icon/ic_menu_25px.png")}/>
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
        <View style={{flexDirection:'row'}}>
        <Image source={require("./media/icon/ic_user_25px.png")}/>
        <Text>Cultulplex</Text>
        </View>

        <Image source={require("./media/icon/ic_menu_25px.png")}/>
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
    height: HEADER_MAX_HEIGHT
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
    justifyContent:'space-between'
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
    backgroundColor: "transparent",

    height: 32,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection:'row'
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
