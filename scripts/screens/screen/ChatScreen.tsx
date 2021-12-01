import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"
import { Header, Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"

export default class ChatScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, backgroundColor:Config.color.backgroundWhite}}
      >
        <Header 
          backgroundColor = {Config.color.white}
          centerComponent = {{text: "チャット", style:{fontWeight: "bold", fontSize: Config.fontSize.header}}}
          rightComponent = {<Ionicons name="options-outline" size={Config.iconSize.header} color={Config.color.main}/>}
          leftComponent = {<Avatar rounded source={require("../../../resources/avatar/1.png")}/>}
          containerStyle = {{ marginBottom:-0.5}}
        />
      </View>
    )
  }
}