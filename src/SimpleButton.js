import React,{Component} from 'react';
import {AppRegistry,Button,View,Text,TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
export default class SimpleButton extends Component{
  click(){
    console.log("Click button");
//    this.props.navigation.navigate('ListViewGrid',{thamso:'Hello Linh'});
  this.props.navigation.navigate('DrawerOpen'); // open drawe
  }

  render(){
    return(
      <TouchableOpacity onPress= {()=> {this.click()}}>
      <View>
      <Text>Simple button {this.props.name}</Text>
      </View>
      </TouchableOpacity>
    )
  }
}
SimpleButton.defaultProps={
  name:'Linh'
}
// SimpleButton.propTypes={
//   name: React.PropTypes.string
// }
