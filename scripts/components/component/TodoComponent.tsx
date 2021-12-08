import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"
import { Ionicons } from "@expo/vector-icons"
import { Avatar } from "react-native-elements"
import { Props, State } from "../interface/TodoComponentInterface"

const PADDING = 12;

export default class TodoComponent extends Component<Props, State> {
  render(){
    let todo = this.props.todo;
    return(
      <View style={{flex:1, flexDirection:"row", alignItems:"center", padding: PADDING}}>
        <Avatar rounded source={todo.avatarSource} size={32}/>
        <View style={{width:PADDING}}/>
        <Text style={{color:Config.color.textBlack, fontSize:Config.fontSize.big}}>{todo.title}</Text>
        <View style={{flex:1}}/>
        <Text style={{color:Config.color.iconGray, fontSize:Config.fontSize.small}}>{todo.deadlineDate.getFullYear()}.{todo.deadlineDate.getMonth()+1}.{todo.deadlineDate.getDate()} {todo.deadlineDate.getHours()}:{todo.deadlineDate.getMinutes()}</Text>
        <View style={{width:PADDING}}/>
        <Ionicons name={todo.isDone ? "checkbox-outline" : "square-outline"} color={todo.isDone ? Config.color.main : Config.color.iconGray} size={24}/>
      </View>
    )
  }
}