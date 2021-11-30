import React, { Component } from "react";
import { View, Text, FlatList, ImageSourcePropType } from "react-native"
import Config from "../../config/Config"
import { Ionicons } from "@expo/vector-icons"
import { Avatar } from "react-native-elements"

const PADDING = 12;
const todoList: Array<TodoInfo> = [
  {
    title: "Todo1",
    isDone: false,
    deadlineDate: new Date(2021,11,2,12,15),
    avatarSource: require("../../../resources/avatar/1.png"),
  },
  {
    title: "Todo2",
    isDone: true,
    deadlineDate: new Date(2021,10,28,9,45),
    avatarSource: require("../../../resources/avatar/1.png"),
  },
  {
    title: "Todo3",
    isDone: false,
    deadlineDate: new Date(2021,11,23,12,15),
    avatarSource: require("../../../resources/avatar/1.png"),
  },
  {
    title: "Todo4",
    isDone: false,
    deadlineDate: new Date(2022,0,2,12,15),
    avatarSource: require("../../../resources/avatar/1.png"),
  },
  {
    title: "Todo5",
    isDone: true,
    deadlineDate: new Date(2022,1,23,22,30),
    avatarSource: require("../../../resources/avatar/1.png"),
  },
]

export default class TodoScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <FlatList
          style={{width:Config.screen.width}}
          data={todoList}
          renderItem={({item}) => {
            return(
              <View style={{flexDirection:"row", alignItems:"center", padding: PADDING}}>
                <Avatar rounded source={item.avatarSource} size={32}/>
                <View style={{width:PADDING}}/>
                <Text style={{color:Config.color.textBlack, fontSize:Config.fontSize.big}}>{item.title}</Text>
                <View style={{flex:1}}/>
                <Text style={{color:Config.color.iconGray, fontSize:Config.fontSize.small}}>{item.deadlineDate.getFullYear()}.{item.deadlineDate.getMonth()+1}.{item.deadlineDate.getDate()} {item.deadlineDate.getHours()}:{item.deadlineDate.getMinutes()}</Text>
                <View style={{width:PADDING}}/>
                <Ionicons name={item.isDone ? "checkbox-outline" : "square-outline"} color={item.isDone ? Config.color.main : Config.color.iconGray} size={24}/>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

interface TodoInfo {
  title: string,
  isDone: boolean, 
  deadlineDate: Date,
  avatarSource: ImageSourcePropType,
}