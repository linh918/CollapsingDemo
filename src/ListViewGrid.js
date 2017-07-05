import
React,
{Component}
from 'react';
import {
  AppRegistry,
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  ListView} from 'react-native';

 export default class ListViewGrid extends Component {
  constructor(){
    super();
    data =[];
    for(let i=0;i<100;i++){
      data.push(i);
    }



    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };

  }
  _renderRow(dataSource){
    return(

      <View  style={styles.box}>
      <Text>{dataSource}</Text>
      <Text>
      {this.props.navigation.state.params.thamso}
      </Text>
      </View>

    );
  }

  render(){
    return(

      <View style={styles.container}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        contentContainerStyle={{flexDirection:'row',flexWrap:'wrap'}}
        pageSize={data.length}

        />
      </View>


   );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  image:{
    flex:4,
    width:100,
    height:100,
  },
  title:{
    flex:6,
    color:'gray',
    fontSize:14,

  },
  box:{
    height:50,
    width:50,

    borderRadius:5,
    backgroundColor:'gray',
    margin:10,
    justifyContent:'center',
    alignItems:'center',


  }

});
