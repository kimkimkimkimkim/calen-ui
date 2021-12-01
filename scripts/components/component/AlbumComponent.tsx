import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"
import { Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { Props, State} from "../interface/AlbumComponentInterface"
import { AlbumInfo } from "../../data"
import ImageGridComponent from "./ImageGridComponent";

const PADDING = 14;

export default class AlbumComponent extends Component<Props, State> {
  render(){
    return(
      <View style={{width:"100%"}}>
        {this.renderHeader(this.props.album)}
        <ImageGridComponent imageSourceList = {this.props.album.imageSourceList} containerStyle={{width:Config.screen.width - PADDING*2, marginLeft:PADDING, marginTop:PADDING, marginBottom:PADDING}}/>
        {this.renderBottom(this.props.album)}
      </View>
    )
  }

  renderHeader(album: AlbumInfo): JSX.Element{
    return(
      <View style={{width:"100%",height:40, flexDirection:"row", alignItems:"center", paddingLeft:PADDING, paddingTop:PADDING, paddingRight:PADDING}}>
        <View style={{flex:1}}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{color: Config.color.textBlack, fontSize:Config.fontSize.big, fontWeight:"bold"}}>{album.title}</Text>
            <View style={{flex:1}}/>
            <View style={{width:PADDING}}/>
            <Ionicons name="ellipsis-horizontal" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
          </View>
          <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{album.createdAt.getFullYear()}年{album.createdAt.getMonth()+1}月{album.createdAt.getDate()}日({this.getWodText(album.createdAt)})</Text>
        </View>
      </View>
    )
  }

  renderBottom(album: AlbumInfo): JSX.Element{
    return(
      <View style={{flexDirection:"row", alignItems:"center", paddingLeft: PADDING, paddingBottom:PADDING, paddingRight:PADDING}}>
        <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>編集者</Text>
        {album.avatarSourceList.length != 0 && this.renderAvatar(album)}
        <View style={{flex:1}}/>
        <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{album.modifyAt.getFullYear()}年{album.modifyAt.getMonth()+1}月{album.modifyAt.getDate()}日({this.getWodText(album.modifyAt)})</Text>
      </View>
    )
  }

  renderAvatar(album: AlbumInfo): JSX.Element{
    return(
      <View style={{flexDirection:"row"}}>
        <View style={{width:PADDING}}/>
        <Avatar rounded source={album.avatarSourceList[0]} size={22}/>
      </View>
    )
  }

  getWodText(date: Date): string{
    let list = ["日","月","火","水","木","金","土"]
    return list[date.getDay()];
  }
}