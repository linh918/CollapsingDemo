import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  View
} from "react-native";
import SlideEntry from "./SlideEntry";
import { sliderWidth, itemWidth } from "./SlideEntry";
import Carousel from "react-native-snap-carousel";

var data = [];

export default class CarouselPhimMoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingData: true,
      TieuDe:'',
      ThoiLuong:'',
      KhoiChieu:'',
      currentTab:1,

    };
  }

  getSlides(entries) {
    if (!entries) {
      return false;
    }
    console.log("aaaaaaaaaaaaa" + data.length);
    return entries.map((entry, index) => {
      return (
        <SlideEntry
          key={`carousel-entry-${index}`}
          even={(index + 1) % 2 === 0}
          {...this.props}
          {...entry}
        />
      );
    });
  }
  _onCLickTab(index){
    console.log("++++"+index);
    this.setState({
      currentTab:index,
      isLoadingData:true,
    });
   this._loadData();

  }

  render() {
    console.log("render");
    if (this.state.isLoadingData) {
      return (
        <View style={styles.carouselContainter}>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.tabContainer} onPress={()=>{this._onCLickTab(1)}}>
              <Text style={{fontSize:16, color:(this.state.currentTab==1?'black':'gray')}}>Đang chiếu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabContainer} onPress={()=>{this._onCLickTab(2)}}>
              <Text style={{fontSize:16, color:(this.state.currentTab==2?'black':'gray')}}>Sắp chiếu</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabContainer} onPress={()=>{this._onCLickTab(3)}}>
              <Text style={{fontSize:16, color:(this.state.currentTab==3?'black':'gray')}}>Đặc biệt</Text>
            </TouchableOpacity>
          </View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.carouselContainter}>
        <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.tabContainer} onPress={()=>{this._onCLickTab(1)}}>
            <Text style={{fontSize:16, color:(this.state.currentTab==1?'black':'gray')}}>Đang chiếu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabContainer} onPress={()=>{this._onCLickTab(2)}}>
            <Text style={{fontSize:16, color:(this.state.currentTab==2?'black':'gray')}}>Sắp chiếu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabContainer} onPress={()=>{this._onCLickTab(3)}}>
            <Text style={{fontSize:16, color:(this.state.currentTab==3?'black':'gray')}}>Đặc biệt</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.6}
          enableMomentum={false}
          onSnapToItem={(index)=>{this._onSnapToItem(index)}}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid={true}
          removeClippedSubviews={false}
        >
          {this.getSlides(data)}
        </Carousel>
        <View style={styles.slideTitleContainter}>
        <View >
        <Text style={styles.phimTitle}>{this.state.TieuDe}</Text>
        <Text style={styles.phimDetail}>{this.state.ThoiLuong} {this.state.KhoiChieu}</Text>
        </View >
          <TouchableOpacity
          style={styles.datVeButon}
          onPress={this._datVe()}
          >
            <Text style={styles.phimTitle}>Đặt vé</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  _onSnapToItem(index){
    let firtItem=data[index];
    this.setState({
      KhoiChieu:firtItem.KhoiChieu,
      TieuDe:firtItem.TieuDe,
      ThoiLuong:firtItem.ThoiLuong,
    });
  }
  _datVe(){

  }

  _loadData(){
    fetch("http://demo9272831.mockable.io/phimmoi")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        data = responseJson;
          let firtItem=data[1];
        this.setState({
          isLoadingData: false,
          KhoiChieu:firtItem.KhoiChieu,
          TieuDe:firtItem.TieuDe,
          ThoiLuong:firtItem.ThoiLuong,
        });
      })
      .catch(error => {});

  }

  componentDidMount() {
   this._loadData();
  }

}

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const styles = StyleSheet.create({
  carouselContainter: {
    backgroundColor: "#222222",
    height: viewportHeight*0.8
  },

  slideTitleContainter:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:16,
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
  },
  phimTitle:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
  },
  phimDetail:{
    color:'#7C6C5D',
    fontSize:14,

  },
  datVeButon:{
    borderRadius:15,
    width:60,
    height:30,
    alignItems:'center',
    justifyContent:'center',

    backgroundColor:'#AD2B32',

  },

  slider: {

    marginTop: 20
  },
  sliderContainer: {

  }
});
