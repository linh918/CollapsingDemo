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

 export default class TinNongListView extends Component {
  constructor(){
    super();
    this.state = {
      dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
    };

  }
  _renderRow(dataSource){
    return(
      <View>
      <View style={styles.container}>
       <Image source={{uri:dataSource.LinkPoster}} style={styles.image}/>
       <Text style={styles.title}>{dataSource.TieuDe}</Text>
      </View>
      <View style={{height:1,backgroundColor:'black'}}></View>
      </View>
    );
  }

  render(){
    return(

      <View >
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        />
      </View>


   );
  }

  componentDidMount(){
      fetch('http://demo9272831.mockable.io/tinnong')
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
           dataSource:this.state.dataSource.cloneWithRows(responseJson),

         });
        })
        .catch((error) => {

        });
    }

}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
      alignItems: "center",
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

});
