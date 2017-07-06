/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, Dimensions, View } from "react-native";

export default class TinNongDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {" "}{this.props.navigation.state.params.TieuDe}
        </Text>
        <Text style={styles.instructions}>
          {state.params.LinkPoster}
        </Text>
        <Text style={styles.instructions} />
      </View>
    );
  }
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
