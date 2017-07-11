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
  TouchableOpacity,
  View,
  Image
} from "react-native";
import ViewPager from "react-native-viewpager";
export default class TinNongViewPager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ViewPager.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  _renderPage(dataSource) {
    return (
      <TouchableOpacity
      onPress={() => {
        this.props.clickTinNongItem(
          dataSource.LinkPoster,
          dataSource.TieuDe,
          dataSource.NoiDung
        );
      }}
      >
        <View>
        <Image source={{ uri: dataSource.LinkPoster }} style={styles.image} />
        <Text style={styles.textTieuDe}>{dataSource.TieuDe}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ViewPager
         isLoop={true}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage.bind(this)}
        />
      </View>
    );
  }

  componentDidMount() {
    fetch("http://demo9272831.mockable.io/tinnong")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          dataSource: this.state.dataSource.cloneWithPages(responseJson)
        });
      })
      .catch(error => {});
  }
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },

  image: {
    height: height / 3,
    width: width,
    resizeMode: 'stretch'
  }
  ,textTieuDe:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    position:'absolute',
    top:height / 3-50,
    left:16
  }
});
