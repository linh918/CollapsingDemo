import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  View
} from "react-native";

import ToolbarMain from "./ToolbarMain";

import TinNong from "./TinNong";
import CarouselPhimMoi from "./CarouselPhimMoi";

export default class CGVMainView extends Component {
  click() {
    console.log("Click button");

    this.props.navigation.navigate("DrawerOpen"); // open drawe
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarMain {...this.props} />
        <ScrollView>

            <CarouselPhimMoi {...this.props} style={{ margin: 10 }} />

          <TinNong {...this.props}/>

        </ScrollView>
      </View>
    );
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#DAD6CC"
  },


});
