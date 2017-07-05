import React,{Component} from 'react';
import {AppRegistry,Button,View,Text,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class UserScreen extends Component{
  click(){
    console.log("Click button");

  }

  render(){
    return(
      <TouchableOpacity onPress= {()=> {this.click()}}>
      <View>
      <Text>User Screen {this.props.name}</Text>
      </View>
      </TouchableOpacity>
    )
  }
}
UserScreen.defaultProps={
  name:'Linh'
}
// SimpleButton.propTypes={
//   name: React.PropTypes.string
// }
