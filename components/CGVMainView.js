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
          <View style={styles.carouselContainter}>
            <View style={styles.rowContainer}>
              <TouchableOpacity style={styles.tabContainer}>
                <Text style={styles.tabTitle}>Đang chiếu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabContainer}>
                <Text style={styles.tabTitle}>Sắp chiếu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabContainer}>
                <Text style={styles.tabTitle}>Đặc biệt</Text>
              </TouchableOpacity>
            </View>
            <CarouselPhimMoi style={{ margin: 10 }} />
          </View>
          <TinNong />
          
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
  carouselContainter: {
    backgroundColor: "#222222",
    height: viewportHeight
  },
  rowContainer: {
    flexDirection: "row",
    height: viewportHeight / 15,
    backgroundColor: "white"
  },
  tabContainer: {
    flex: 1,
    alignItems: "center"
  },
  tabTitle: {
    fontSize: 16
  }
});
