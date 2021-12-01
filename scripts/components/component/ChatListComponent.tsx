import React, { Component } from "react";
import { View, Text, Image } from "react-native"
import Config from "../../config/Config"
import { Avatar, Badge } from "react-native-elements"
import { Props, State} from "../interface/ChatListComponentInterface"

const PADDING = 20;

export default class ChatListComponent extends Component<Props, State> {
  render(){
    return(
      <View style={{width:"100%", height:60, flexDirection:"row", paddingLeft: PADDING, paddingRight:PADDING, alignItems:"center"}}>
        <Avatar source = {this.props.imageSource} size={42} avatarStyle={{borderRadius:5}}/>
        <View style={{width:PADDING}}/>
        <View>
          <Text style={{fontSize:Config.fontSize.big, color:Config.color.textBlack, fontWeight:"bold"}}>{this.props.name}</Text>
          {this.props.lastMessage != "" && (
            <>
              <View style={{height:4}}/>
              <Text style={{fontSize:Config.fontSize.regular, color:Config.color.iconGray}}>{this.props.lastMessage}</Text>
            </>
          )}
        </View>
        <View style={{flex:1}}/>
        <View>
          <View style={{flex:1}}>
            <Text style={{fontSize:Config.fontSize.regular, color:Config.color.iconGray}}>{this.props.lastMessageDateText}</Text>
          </View>
          {this.props.badgeNum != 0 && <Badge value={this.props.badgeNum} badgeStyle={{backgroundColor:Config.color.main}}/>}
          <View style={{flex:1}}/>
        </View>
      </View>
    )
  }
}