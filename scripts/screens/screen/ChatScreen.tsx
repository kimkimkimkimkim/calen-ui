import React, { Component } from "react";
import { View, Text, FlatList } from "react-native"
import Config from "../../config/Config"
import { Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { ChatListComponent, HeaderComponent } from "../../components"
import { Props } from "../../components/interface/ChatListComponentInterface"

let chatList: Array<Props> = [
  {
    name: "UTMS",
    imageSource: require("../../../resources/avatar/7.png"),
    lastMessage: "今週の練習は総合コートでやります！",
    lastMessageDateText: "12:23",
    badgeNum: 12,
  },
  {
    name: "メイク同好会",
    imageSource: require("../../../resources/avatar/8.png"),
    lastMessage: "おっけー",
    lastMessageDateText: "月曜日",
    badgeNum: 3,
  },
  {
    name: "仲良し四人組",
    imageSource: require("../../../resources/avatar/9.png"),
    lastMessage: "ありがとー！",
    lastMessageDateText: "6/12",
    badgeNum: 0,
  },
]

export default class ChatScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, backgroundColor:Config.color.backgroundWhite}}
      >
        <HeaderComponent 
          title={"チャット"}
          rightComponent = {<Ionicons name="options-outline" size={Config.iconSize.header} color={Config.color.main}/>}
          leftComponent = {<Avatar rounded source={require("../../../resources/avatar/1.png")}/>}
        />
        <FlatList 
          data = {chatList}
          renderItem = {({item}) => <ChatListComponent name={item.name} imageSource={item.imageSource} lastMessage={item.lastMessage} lastMessageDateText={item.lastMessageDateText} badgeNum={item.badgeNum}/>}
          style={{flex:1,width:Config.screen.width, backgroundColor:Config.color.backgroundWhite}}
          ItemSeparatorComponent={() => <View style={{height:4}}/>}
          showsVerticalScrollIndicator = {false}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
    )
  }
}