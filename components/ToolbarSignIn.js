import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import ic_back from '../media/icon/ic_arrow_left_25px.png';
import ic_menu from '../media/icon/ic_menu_25px.png';

export default class ToolbarMain extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.toolbar}>
      <TouchableOpacity  onPress={() =>{
        this.props.navigation.goBack()}
      } >
          <Image source ={ic_back}

      />
      </TouchableOpacity>

      <View style={styles.toobarTitle} >
      <Text style={{color:'black'}}>Đăng nhập</Text>
      </View>
      <TouchableOpacity onPress={() =>{
      this.props.navigation.navigate('DrawerOpen')}
      } >
        <Image source ={ic_menu} />
      </TouchableOpacity>

      </View>


    );
  }
}
const {height} =Dimensions.get('window');

const styles = StyleSheet.create({
  toolbar:{
    height:56,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    padding:16

  },
  iconMenu:{
  margin :12,
    flex:1,


  },
  iconBack:{
    margin :12,
    flex:1

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toobarTitle: {
    flex: 8,
    flexDirection:'row',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
