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
  TouchableOpacity,
  ScrollView,
  View
} from "react-native";
import ToolbarDetail from "./ToolbarDetail";
import pic from "../media/icon/anh_em_sieu_quay.jpg";
import ic_play from "../media/icon/ic_play.png";
import ic_2d from "../media/icon/ic_2d.png";
import {getThumbnailUrl} from './Utils';
import TinMoiUuDai from './TinMoiUuDai';

export default class PhimMoiDetail extends Component {
  constructor(props) {
    super(props);
  }
  _datVe() {}

  render() {
    const { state } = this.props.navigation;
    let uriThumbnail=getThumbnailUrl(state.params.LinkTrailer)
    return (
      <View style={styles.container}>
        <ToolbarDetail {...this.props} name="Phim" />
        <ScrollView>
          <TouchableOpacity >
            <View style={styles.thumbnailContainer}>
              <Image source={{uri:uriThumbnail}} style={styles.thumbnailImage} />
              <Image source={ic_play} style={styles.playIcon} />
            </View>
          </TouchableOpacity>
          <View style={styles.childContainer}>
            <View
              style={{
                margin: 12,
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={styles.textTieuDe}>
                {state.params.TieuDe}
              </Text>
              <TouchableOpacity
                style={styles.datVeButon}
                onPress={this._datVe()}
              >
                <Text style={styles.phimTitle}>Đặt vé</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 12,
                flex: 2,
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <Image source={ic_2d} />
            </View>
            <View style={{ margin: 12, flex: 4, flexDirection: "row" }}>
              <Text style={styles.textNoiDung}>
                {state.params.NoiDung}
              </Text>
            </View>
          </View>
          <View style={styles.childContainer}>
            <Line muc="Kiểm duyệt" noidung={state.params.KiemDuyet} />
            <Line muc="Khởi chiếu" noidung={state.params.KhoiChieu} />
            <Line muc="Thể loại" noidung={state.params.TheLoai} />
            <Line muc="Đạo diễn" noidung={state.params.DaoDien} />
            <Line muc="Thời lượng" noidung={state.params.ThoiLuong} />
          </View>

          <TinMoiUuDai {...this.props}/>
        </ScrollView>
      </View>
    );
  }
}

class Line extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.lineContainter}>
        <Text style={styles.textMuc}>
          {this.props.muc}
        </Text>
        <Text style={styles.textNoiDung2}>
          {this.props.noidung}
        </Text>
      </View>
    );
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const styles = StyleSheet.create({
  childContainer: {
    justifyContent: "center",
    flex: 2,
    marginTop: 12,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#DAD6CC"
  },
  textTieuDe: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black"
  },
  textNoiDung: {
    fontSize: 14,
    color: "#5B4E44"
  },

  datVeButon: {
    borderRadius: 15,
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#AD2B32"
  },
  phimTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold"
  },

  thumbnailImage: {
    height: viewportHeight * 0.35,
    width: viewportWidth,
    resizeMode: "cover",
    alignItems: "flex-end"
  },
  playIcon: {
    position: "absolute",
    top: viewportHeight * 0.35 * 0.45,
    left: viewportWidth * 0.48
  },
  thumbnailContainer: {
    backgroundColor: "black"
  },
  lineContainter: {
    marginTop: 6,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  textMuc: {
    color: "#847363",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 12,
    flex: 3,
    textAlign: "right"
  },
  textNoiDung2: {
    fontSize: 14,
    color: "#5B4E44",
    flex: 7
  }
});
