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

 export default class SimpleListView extends Component {
  constructor(){
    super();
    data =[
      {"LinkPoster": "https://www.cgv.vn/media/wysiwyg/Newsoffers/TF5-Sneak--350x495.jpg",
      "TieuDe":"SUẤT CHIẾU ĐẶC BIỆT - TRANSFORMERS: CHIẾN BINH CUỐI CÙNG",

      },
      {
        "LinkPoster": "https://www.cgv.vn/media/wysiwyg/Newsoffers/50k2_350x495.jpg",
        "TieuDe":"THƯỞNG THỨC ANH EM SIÊU QUẬY VÀ ĐẢO CỦA DÂN NGỤ CƯ CHỈ VỚI 50.000Đ",
      },{
        "LinkPoster": "https://www.cgv.vn/media/wysiwyg/Newsoffers/qua-350-x-495.jpg",
        "TieuDe":"ĐĂNG KÝ NGAY, QUÀ TẶNG TRAO TAY",
      },
    ]


    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };

  }
  _renderRow(dataSource){
    return(
      <View style={styles.container}>
       <Image source={{uri:dataSource.LinkPoster}} style={styles.image}/>
       <Text style={styles.title}>{dataSource.TieuDe}</Text>
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

});
