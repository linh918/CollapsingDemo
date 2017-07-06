import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import ic_menu from "../media/icon/ic_menu_20px.png";
import ic_user from "../media/icon/ic_user_25px.png";

export default class ToolbarMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.toolbar}>
        <TouchableOpacity
          style={styles.iconUser}
          onPress={() => {
            this.props.navigation.navigate("SignInScreen");
          }}
        >
          <Image source={ic_user} />
        </TouchableOpacity>
        <View style={styles.toobarTitle}>
          <Text style={{ color: "black" }}>Cultulplex</Text>
          <Text style={{ color: "red" }}>CGV</Text>
        </View>
        <TouchableOpacity
          style={styles.iconMenu}
          onPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
        >
          <Image source={ic_menu} />
        </TouchableOpacity>
      </View>
    );
  }
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  toolbar: {
    height: height / 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  },
  iconMenu: {
    margin: 16,
    flex: 1
  },
  iconUser: {
    margin: 12,
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  toobarTitle: {
    flex: 8,
    flexDirection: "row"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
