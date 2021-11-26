import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"

export default class SelfScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <Text>Self Screen</Text>
      </View>
    )
  }
}