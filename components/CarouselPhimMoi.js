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

var data=[];

export default class CarouselPhimMoi extends Component {
  constructor(props){
    super(props);
      this.state={
        isLoadingData:true,
      };
  }

  getSlides(entries) {
    if (!entries) {
      return false;
    }
    console.log("aaaaaaaaaaaaa"+data.length);
    return entries.map((entry, index) => {
      return (
        <SlideEntry
          key={`carousel-entry-${index}`}
          even={(index + 1) % 2 === 0}
          {...entry}
        />
      );
    });
  }

  render() {
    if (this.state.isLoadingData) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }
    return (


        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.6}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid={true}
          removeClippedSubviews={false}
        >
          {this.getSlides(data)}
        </Carousel>

    );
  }

  componentDidMount(){
    fetch('http://demo9272831.mockable.io/phimmoi')
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         data=responseJson;

         this.setState({
          isLoadingData: false,

        });
        })
        .catch((error) => {

        });
  }
}




const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    height: viewportHeight / 15,
    backgroundColor: "white"
  },

  slider: {
    marginBottom: 30,
    marginTop:20
  },
  sliderContainer: {


  },
  tabTitle: {
    fontSize: 16
  }
});
