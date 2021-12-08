import React, { Component } from "react";
import { View, Text, Image } from "react-native"
import Config from "../../config/Config"
import { Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { Props, State, DefaultProps} from "../interface/TimelineComponentInterface"
import { TimelineInfo } from "../../data"
import ImageGridComponent from "./ImageGridComponent";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/interface";

const PADDING = 16;

class TimelineComponent extends Component<Props, State> {
  static defaultProps: DefaultProps = {
  }

  render(){
    let backgroundColor = this.getBackgroundColor();
    return(
      <View style={{width:"100%", backgroundColor}}>
        {this.renderTimelineHeader(this.props.timeline)}
        {this.props.timeline.comment != "" && this.renderTimelineComment(this.props.timeline)}
        {this.props.timeline.imageSourceList.length != 0 && this.renderTimelineImage(this.props.timeline)}
        {this.renderTimelineBottom(this.props.timeline)}
      </View>
    )
  }

  getBackgroundColor(): string {
    switch(this.props.uiType){
      case "Simple":
        return "transparent";
      case "BgGray":
        return "white";
      default:
        return "white";
    }
  }

  renderTimelineHeader(timeline: TimelineInfo): JSX.Element{
    return(
      <View style={{width:"100%",height:40, flexDirection:"row", alignItems:"center", paddingLeft:PADDING, paddingTop:PADDING, paddingRight:PADDING}}>
        <Avatar rounded source={timeline.avatarSource}/>
        <View style={{width:PADDING}} />
        <View style={{flex:1}}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{color: Config.color.textBlack, fontSize:Config.fontSize.big, fontWeight:"bold"}}>{timeline.title}</Text>
            <View style={{flex:1}}/>
            <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{timeline.createdAtText}</Text>
            <View style={{width:PADDING}}/>
            <Ionicons name="ellipsis-horizontal" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
          </View>
          <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{timeline.date.getFullYear()}年{timeline.date.getMonth()+1}月{timeline.date.getDate()}日({this.getWodText(timeline.date)})</Text>
        </View>
      </View>
    )
  }

  renderTimelineComment(timeline: TimelineInfo): JSX.Element{
    return (
      <View style={{paddingTop:PADDING, paddingLeft:PADDING,paddingRight:PADDING}}>
        <Text>{timeline.comment}</Text>
      </View>
    )
  }

  renderTimelineImage(timeline: TimelineInfo): JSX.Element{
    return(
      <View style={{flexDirection:"row", flex:1, paddingTop: PADDING, paddingLeft:PADDING, paddingRight:PADDING}}>
        <ImageGridComponent containerStyle={{height:160, width:Config.screen.width - PADDING*2}} imageSourceList={timeline.imageSourceList}/>
      </View>
    )
  }

  renderTimelineBottom(timeline: TimelineInfo): JSX.Element {
    switch(this.props.uiType){
      case "Simple":
        return this.renderSimpleTimelineBottom(timeline);
      case "BgGray":
        return this.renderBgGrayTimelineBottom(timeline);
      default:
        return this.renderSimpleTimelineBottom(timeline);
    }
  }

  renderBgGrayTimelineBottom(timeline: TimelineInfo): JSX.Element{
    return(
      <View style={{width:"100%", padding: PADDING, flexDirection:"row", alignItems:"center"}}>
        <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
          <Ionicons name="chatbubble-outline" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
          <View style={{width:PADDING}}/>
          <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.big}}>{timeline.replyNum}</Text>
        </View>
        <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
          <Ionicons name={timeline.isLike ?"heart-sharp" : "heart-outline"} color={timeline.isLike ? Config.color.main : Config.color.iconGray} size={Config.iconSize.timeline}/>
          <View style={{width:PADDING}}/>
          <Text style={{color: timeline.isLike ? Config.color.main : Config.color.iconGray, fontSize:Config.fontSize.big}}>{timeline.likeNum}</Text>
        </View>
        <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
          <Ionicons name="person-add-outline" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
          <View style={{width:PADDING}}/>
          <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.big}}>0</Text>
        </View>
        <View style={{flex:1, flexDirection:"row-reverse", alignItems:"center"}}>
          <Ionicons name={timeline.isBookmark ? "bookmark" : "bookmark-outline"} color={timeline.isBookmark ? Config.color.main : Config.color.iconGray} size={Config.iconSize.timeline}/>
        </View>
      </View>
    )
  }
  
  renderSimpleTimelineBottom(timeline: TimelineInfo): JSX.Element{
    return(
      <View style={{width:"100%", padding: PADDING, paddingTop: PADDING/2 + 4, flexDirection:"row", alignItems:"center"}}>
        <Ionicons name="chatbubble-outline" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
        <View style={{width:PADDING}}/>
        <Ionicons name={timeline.isLike ?"heart-sharp" : "heart-outline"} color={timeline.isLike ? Config.color.main : Config.color.iconGray} size={Config.iconSize.timeline}/>
        <View style={{width:PADDING}}/>
        <Ionicons name="person-add-outline" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
        <View style={{flex:1}}/>
        <Ionicons name={timeline.isBookmark ? "bookmark" : "bookmark-outline"} color={timeline.isBookmark ? Config.color.main : Config.color.iconGray} size={Config.iconSize.timeline}/>
      </View>
    )
  }

  getWodText(date: Date): string{
    let list = ["日","月","火","水","木","金","土"]
    return list[date.getDay()];
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TimelineComponent)