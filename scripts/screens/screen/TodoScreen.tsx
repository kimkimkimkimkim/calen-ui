import React, { Component } from "react";
import { View, FlatList } from "react-native"
import Config from "../../config/Config"
import { TodoInfo } from "../../data";
import { TodoComponent } from "../../components";

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
          renderItem={({item}) => <TodoComponent todo = {item}/>}
          showsVerticalScrollIndicator = {false}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
    )
  }
}