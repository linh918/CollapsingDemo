import React,{Component} from 'react';
import {AppRegistry,Button,View,Text,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class DetailScreen extends Component{
  click(){
    console.log("Click button");
  
  }

  render(){
    return(
      <TouchableOpacity onPress= {()=> {this.click()}}>
      <View>
      <Text>Detail Screen {this.props.name}</Text>
      </View>
      </TouchableOpacity>
    )
  }
}
DetailScreen.defaultProps={
  name:'Linh'
}
// SimpleButton.propTypes={
//   name: React.PropTypes.string
// }
