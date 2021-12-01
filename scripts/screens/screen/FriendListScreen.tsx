import React, { Component } from "react";
import { View, FlatList} from "react-native"
import Config from "../../config/Config"
import { FriendListComponent } from "../../components"
import { Props } from "../../components/interface/FriendListComponentInterface"

const PADDING = 4;

let friendList: Array<Props> = [
  {
    name: "道井卓樹",
    isGroup: false,
    imageSource: require("../../../resources/avatar/2.png"),
  },
  {
    name: "高林千穂",
    isGroup: false,
    imageSource: require("../../../resources/avatar/3.png"),
  },
  {
    name: "まさ",
    isGroup: false,
    imageSource: require("../../../resources/avatar/4.png"),
  },
  {
    name: "丹後 由香里",
    isGroup: false,
    imageSource: require("../../../resources/avatar/5.png"),
  },
  {
    name: "長嶋",
    isGroup: false,
    imageSource: require("../../../resources/avatar/6.png"),
  },
]

export default class FriendListScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <FlatList 
          data = {friendList}
          renderItem = {({item}) => <FriendListComponent name={item.name} isGroup={item.isGroup} imageSource={item.imageSource}/>}
          style={{flex:1,width:Config.screen.width}}
          ItemSeparatorComponent={() => <View style={{height:PADDING}}/>}
        />
      </View>
    )
  }
}