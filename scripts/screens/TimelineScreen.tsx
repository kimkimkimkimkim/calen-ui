import React, { Component } from "react";
import { View, Text } from "react-native"

export default class TimelineScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center"}}
      >
        <Text>Timeline Screen</Text>
      </View>
    )
  }
}