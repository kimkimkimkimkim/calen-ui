import React, { Component } from "react";
import { View, Text, Image } from "react-native"
import Config from "../../config/Config"
import { Ionicons, createIconSet } from "@expo/vector-icons"
import { IconProps } from "@expo/vector-icons/build/createIconSet"
import { Avatar, Badge } from "react-native-elements"
import { Props, State} from "../interface/NotificationComponentInterface"

const PADDING = 12;

export default class ChatListComponent extends Component<Props, State> {
  render(){
    return(
      <View style={{width:"100%", padding: PADDING, paddingLeft:PADDING*2, paddingRight:PADDING*2}}>
        <View style={{flexDirection: "row"}}>
          {this.renderIcon()}
          <View style={{width:PADDING}}/>
          <Avatar rounded source={this.props.avatarImageSource}/>
        </View>
        <View style={{height:PADDING}}/>
        <Text style={{color:Config.color.textBlack, fontSize:Config.fontSize.big}}>{this.props.title}</Text>
        <View style={{height:PADDING}}/>
        <Text style={{color:Config.color.textGray, fontSize:Config.fontSize.big}}>{this.props.content}</Text>
      </View>
    )
  }

  renderIcon(){
    return <Ionicons size={24} name={this.props.notificationType == "Invite" ? "person-add" : "heart"} color={this.props.notificationType == "Invite" ? "#794BC4" : "#F91880"}/>
  }
}