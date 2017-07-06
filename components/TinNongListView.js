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
  TouchableOpacity,
  TouchableHighlight,
  ListView} from 'react-native';

 export default class TinNongListView extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
    };

  }
_onCLick(dataSource){
  console.log("click"+dataSource.TieuDe);
}
  _renderRow(dataSource){

    return(
      <View>
      <View style={styles.container}>
      <TouchableHighlight style={{flex:4}} onPress={()=>{this.props.clickTinNongItem(dataSource.LinkPoster,dataSource.TieuDe,dataSource.NoiDung)}}>
       <Image source={{uri:dataSource.LinkPoster}} style={styles.image}  resizeMode='cover'/>
       </TouchableHighlight >
       <Text style={styles.title} onPress={()=>{this.props.clickTinNongItem(dataSource.LinkPoster,dataSource.TieuDe,dataSource.NoiDung)}}>
       {dataSource.TieuDe}</Text>




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
      backgroundColor:'white',
  },
  image:{

    width:200,
    height:100,
  },
  title:{
    flex:6,
    color:'gray',
    fontSize:14,

  },

});
