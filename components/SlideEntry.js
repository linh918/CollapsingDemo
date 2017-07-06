import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  PropTypes,
  Dimensions,
  View
} from "react-native";

export default class SlideEntry extends Component {
  render() {
    const {KhoiChieu,DaoDien,TheLoai,ThoiLuong,KiemDuyet,LinkTrailer, LinkPoster, TieuDe, NoiDung } = this.props;
    return (
      <TouchableOpacity
        style={styles.slideInnerContainer}
        onPress={() => {
          this.props.navigation.navigate('PhimMoiDetail',{LinkPoster:LinkPoster,
                                                          LinkTrailer:LinkTrailer,
                                                          TieuDe:TieuDe,
                                                          NoiDung:NoiDung,
                                                          KiemDuyet:KiemDuyet,
                                                          DaoDien:DaoDien,
                                                          TheLoai:TheLoai,
                                                          ThoiLuong:ThoiLuong,
                                                          KhoiChieu:KhoiChieu,

                                                        })


        }}
      >
        <Image source={{ uri: LinkPoster }} style={styles.imagePoster} resizeMode='contain' />
      </TouchableOpacity>
    );
  }
}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
function wp(percentage) {
  const value = percentage * viewportWidth / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.3;
const slideWidth = wp(60);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;
const styles = StyleSheet.create({
  slideInnerContainer: {
    flex: 1,
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,



  },
  imagePoster: {
    width: slideWidth,
    height: viewportHeight *0.6,

  }
});
