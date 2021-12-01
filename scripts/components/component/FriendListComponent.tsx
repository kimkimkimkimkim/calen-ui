import React, { Component } from "react";
import { View, Text, Image } from "react-native"
import Config from "../../config/Config"
import { Avatar } from "react-native-elements"
import { Props, State} from "../interface/FriendListComponentInterface"

const PADDING = 20;

export default class FriendListComponent extends Component<Props, State> {
  render(){
    return(
      <View style={{width:"100%", height:60, flexDirection:"row", paddingLeft: PADDING, paddingRight:PADDING, alignItems:"center"}}>
        <Avatar source = {this.props.imageSource} rounded = {!this.props.isGroup} size={42} avatarStyle={{borderRadius:5}}/>
        <View style={{width:PADDING}}/>
        <Text style={{fontSize:Config.fontSize.big, color:Config.color.textBlack, fontWeight:"bold"}}>{this.props.name}</Text>
      </View>
    )
  }
}