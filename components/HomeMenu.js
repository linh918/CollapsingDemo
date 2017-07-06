/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  View
} from "react-native";

import icAccount from "../media/icon/ic_account.png";
import icBell from "../media/icon/ic_bell.png";
import icSetting from "../media/icon/ic_setting.png";
import icHome from "../media/icon/ic_home.png";
import icMember from "../media/icon/ic_member.png";
import icInfo from "../media/icon/ic_info.png";
import icStar from "../media/icon/ic_star.png";
import icGift from "../media/icon/ic_gift.png";
import icTicket from "../media/icon/ic_ticket.png";

export default class HomeMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icBell} style={{ marginLeft: 40 }} />
          <Image source={icAccount} />
          <Image source={icSetting} style={{ marginRight: 40 }} />
        </View>

        <View style={styles.columnContainer}>
          <Text style={styles.textNormal}>Đăng nhập</Text>
          <View style={{ height: 1, backgroundColor: "white", width: 250 }} />
          <Text style={styles.textNormal}>Đặt vé theo phim</Text>
          <View style={{ height: 1, backgroundColor: "white", width: 250 }} />
          <Text style={styles.textNormal}>Đặt vé theo rạp</Text>
          <View style={{ height: 1, backgroundColor: "white", width: 250 }} />
        </View>

        <View style={styles.rowMenuContainer}>
          <View style={styles.menuContainer}>
            <Image source={icHome} />
            <Text style={styles.textSmall}>Trang chủ</Text>
          </View>
          <View style={styles.menuContainer}>
            <Image source={icMember} />
            <Text style={styles.textSmall}>Thành viên CGV</Text>
          </View>
          <View style={styles.menuContainer}>
            <Image source={icInfo} />
            <Text style={styles.textSmall}>Rạp CGV</Text>
          </View>
        </View>

        <View style={styles.rowMenuContainer}>
          <View style={styles.menuContainer}>
            <Image source={icStar} />
            <Text style={styles.textSmall}>Đặc trưng CGV</Text>
          </View>
          <View style={styles.menuContainer}>
            <Image source={icGift} />
            <Text style={styles.textSmall}>Tin mới & ưu đãi</Text>
          </View>
          <View style={styles.menuContainer}>
            <Image source={icTicket} />
            <Text style={styles.textSmall}>PhotoTicket</Text>
          </View>
        </View>
        <View style={{ flex: 3 }} />
      </View>
    );
  }
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column"
  },
  rowContainer: {
    marginTop: 16,
    padding: 5,
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rowMenuContainer: {
    marginTop: 16,

    flex: 0.5,
    backgroundColor: "black",

    flexDirection: "row",
    justifyContent: "space-between"
  },
  columnContainer: {
    flex: 1.5,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textSmall: {
    color: "white",
    fontSize: 12
  },
  textNormal: {
    color: "white",
    fontSize: 15,
    margin: 5
  },

  menuContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  }
});
