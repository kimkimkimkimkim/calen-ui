import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"

export default class TodoScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <Text>Todo Screen</Text>
      </View>
    )
  }
}