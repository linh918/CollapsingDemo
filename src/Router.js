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
import SimpleButton from './SimpleButton';
import ListViewGrid from './ListViewGrid';
import UserScreen from './UserScreen';



export const MyStack= StackNavigator({
  SimpleButton:{
    screen:SimpleButton,
    navigationOptions:{

    }
  },
  ListViewGrid:{
    screen:ListViewGrid,
    navigationOptions:{
      title:'ListViewGrid'
    }
  }
})
export const User= StackNavigator({

  UserScreen:{
    screen:UserScreen,
    navigationOptions:{

    }
  }
})

export const TabBar=TabNavigator({
  Home:{
    screen:MyStack
},
  User:{
    screen:User
  },
},
{
 tabBarOptions: {
   activeTintColor: '#e91e63',
   style:{
     backgroundColor:'transparent'
   }
 },
}


)

export const SlideMenu=DrawerNavigator({
  Tab:{
    screen:TabBar
  },

},{
drawerWidth: 300,
drawerPosition: 'right',

}



)
