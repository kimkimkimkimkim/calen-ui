import React, { Component } from "react";
import { View, FlatList } from "react-native"
import AlbumComponent from "../../components/component/AlbumComponent";
import Config from "../../config/Config"
import { AlbumInfo } from "../../data";

const PADDING = 12;
const albumList: Array<AlbumInfo> = [
  {
    title:"撮影",
    createdAt: new Date(),
    modifyAt: new Date(),
    avatarSourceList: [require("../../../resources/avatar/1.png")],
    comment: "",
    imageSourceList: [require("../../../resources/iamges/1.png")],
  },
  {
    title:"卒業旅行",
    createdAt: new Date(),
    modifyAt: new Date(),
    avatarSourceList: [require("../../../resources/avatar/1.png")],
    comment: "",
    imageSourceList: [require("../../../resources/iamges/1.png"),require("../../../resources/iamges/2.png")],
  },
  {
    title:"撮影",
    createdAt: new Date(),
    modifyAt: new Date(),
    avatarSourceList: [require("../../../resources/avatar/1.png")],
    comment: "",
    imageSourceList: [require("../../../resources/iamges/1.png")],
  },
  {
    title:"撮影",
    createdAt: new Date(),
    modifyAt: new Date(),
    avatarSourceList: [require("../../../resources/avatar/1.png")],
    comment: "",
    imageSourceList: [require("../../../resources/iamges/1.png"),require("../../../resources/iamges/2.png"),require("../../../resources/iamges/1.png"),require("../../../resources/iamges/2.png")],
  },
]

export default class AlbumScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <FlatList
          data = {albumList}
          renderItem = {({item}) => <AlbumComponent album={item}/>}
          style = {{width:Config.screen.width}}
          ItemSeparatorComponent={() => <View style={{height:PADDING}}/>}
          showsVerticalScrollIndicator = {false}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
    )
  }
}