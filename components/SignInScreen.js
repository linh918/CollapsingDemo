import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
  View
} from 'react-native';
import ToolbarSignIn from './ToolbarSignIn';

export default class CGVDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ToolbarSignIn {...this.props}/>
      <View style={{flex:1}} >
      </View>
      <View style={styles.editTextContainer} >
      <TextInput
      placeholder="Email hoặc tên đăng nhập"
      underlineColorAndroid= 'transparent'
      />
      <TextInput
      placeholder="Mật khẩu"
      underlineColorAndroid= 'transparent'
      />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonDangNhap} >
        <Text style={styles.titleButton} >Đăng nhập</Text>


      </TouchableOpacity>
      </View>
      <View style={{flex:0.2,alignItems:'center'}}>
      <Text>hoặc</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonDangNhapFB} >
        <Text style={styles.titleButton}  >Đăng nhập bằng facebook</Text>


      </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
      <Text style={{color:'white'}}>Đăng ký tài khoản CGV</Text>
      </View>

      <View style={styles.textContainer}>
      <Text style={{color:'white'}}>Quên mật khẩu CGV</Text>
      </View>

      </View>
    );
  }
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
      flexDirection:'column',
    backgroundColor: '#DAD6CC',
  },
   editTextContainer: {
    flex:1,
    flexDirection:'column',
    backgroundColor :'white',

  },
  buttonContainer: {
   flex:1,
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',


 },
  buttonDangNhap:{
    height:40,
    width:viewportWidth*0.8,
    borderRadius:20,
    backgroundColor:'#AD2B32',
justifyContent:'center',
  alignItems:'center'

  },
  buttonDangNhapFB:{

    height:40,
    width:viewportWidth*0.8,
    borderRadius:20,
    backgroundColor:'#3F60AF',
   justifyContent:'center',
    alignItems:'center'


  },
  textContainer: {
    flex:0.5,
    alignItems:'center',
    justifyContent:'center'

 },
 titleButton:{
   fontSize:16,
   color:'white',
   fontWeight:'bold',

 }

});
