import React, { Component } from "react";
import { View, FlatList} from "react-native"
import Config from "../../config/Config"
import { FriendListComponent } from "../../components"
import { Props } from "../../components/interface/FriendListComponent"

const PADDING = 4;

let timelineList: Array<Props> = [
  {
    name: "UTMS",
    isGroup: true,
    imageSource: require("../../../resources/avatar/7.png"),
  },
  {
    name: "メイク同好会",
    isGroup: true,
    imageSource: require("../../../resources/avatar/8.png"),
  },
  {
    name: "仲良し四人組",
    isGroup: true,
    imageSource: require("../../../resources/avatar/9.png"),
  },
]

export default class GroupListScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <FlatList 
          data = {timelineList}
          renderItem = {({item}) => <FriendListComponent name={item.name} isGroup={item.isGroup} imageSource={item.imageSource}/>}
          style={{flex:1,width:Config.screen.width}}
          ItemSeparatorComponent={() => <View style={{height:PADDING}}/>}
        />
      </View>
    )
  }
}