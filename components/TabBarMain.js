import
React, {
Component
}
from 'react';
import {

AppRegistry,
Alert,
StyleSheet,
Button,
 Text,
  View ,
}
from 'react-native';
import {StackNavigator,Menu,TabNavigator,DrawerNavigator} from 'react-navigation';
import PhimMoi from './PhimMoi';
export const TabBar=TabNavigator({
  DangChieu:{
    screen:PhimMoi,
    navigationOptions:{
      tabBarLabel: 'Đang chiếu'
    }
},
  SapChieu:{
    screen:PhimMoi
  },
  DacBiet:{
    screen:PhimMoi
  },
},
{
 tabBarOptions: {
   upperCaseLabel :false,
   activeTintColor: 'black',
   inactiveTintColor:'gray',
   style:{
     backgroundColor:'white',

   }
 },
}


)
