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
    const { LinkPoster, TieuDe } = this.props;
    return (
      <TouchableOpacity
        style={styles.slideInnerContainer}
        onPress={() => {
          console.log("click item");
        }}
      >
        <Image source={{ uri: LinkPoster }} style={styles.imagePoster} />
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

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
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
    paddingBottom: 18 // needed for shadow
  },
  imagePoster: {
    width: slideWidth,
    height: viewportHeight * 0.7
  }
});
