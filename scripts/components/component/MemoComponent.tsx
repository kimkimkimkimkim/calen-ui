import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"
import { MemoInfo } from "../../data"
import { Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import ImageGridComponent from "../../components/component/ImageGridComponent";
import { Props, State} from "../interface/MemoComponentInterface"

const PADDING = 12;

export default class MemoComponent extends Component<Props, State> {
  render(){
    let memo = this.props.memo;
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <View style={{width:"100%"}}>
          {this.renderMemoHeader(memo)}
          {memo.comment != "" && this.renderMemoComment(memo)}
          {memo.imageSourceList.length != 0 && this.renderMemoImage(memo)}
        </View>
      </View>
    )
  }

  renderMemoHeader(memo: MemoInfo): JSX.Element{
    return(
      <View style={{width:"100%",height:40, flexDirection:"row", alignItems:"center", paddingLeft:PADDING, paddingTop:PADDING, paddingRight:PADDING}}>
        <Avatar rounded source={memo.avatarSource}/>
        <View style={{width:PADDING}} />
        <View style={{flex:1}}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{color: Config.color.textBlack, fontSize:Config.fontSize.big, fontWeight:"bold"}}>{memo.title}</Text>
            <View style={{flex:1}}/>
            <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{memo.createdAtText}</Text>
            <View style={{width:PADDING}}/>
            <Ionicons name="ellipsis-horizontal" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
          </View>
          <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{memo.date.getFullYear()}年{memo.date.getMonth()+1}月{memo.date.getDate()}日({this.getWodText(memo.date)})</Text>
        </View>
      </View>
    )
  }

  renderMemoComment(memo: MemoInfo): JSX.Element{
    return (
      <View style={{paddingTop:PADDING, paddingLeft:PADDING,paddingRight:PADDING}}>
        <Text style={{color: Config.color.textBlack, fontSize:Config.fontSize.regular}}>{memo.comment}</Text>
      </View>
    )
  }

  renderMemoImage(memo: MemoInfo): JSX.Element{
    return(
      <View style={{paddingTop: PADDING, paddingLeft:PADDING, paddingRight:PADDING}}>
        <ImageGridComponent containerStyle={{height:160, width:Config.screen.width - PADDING*2}} imageSourceList={memo.imageSourceList}/>
      </View>
    )
  }

  getWodText(date: Date): string{
    let list = ["日","月","火","水","木","金","土"]
    return list[date.getDay()];
  }
}