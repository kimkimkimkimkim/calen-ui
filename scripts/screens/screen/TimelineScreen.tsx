import React, { Component } from "react";
import { View, Text, FlatList } from "react-native"
import Config from "../../config/Config"
import { Header, Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { TimelineComponent } from "../../components"
import { TimelineInfo } from "../../data"

const PADDING = 14;
let timelineList: Array<TimelineInfo> = [
  {
    title: "予定1",
    date: new Date(2021,10,27),
    createdAtText: "1分",
    name: "芹沢花恋",
    avatarSource: require("../../../resources/avatar/6.png"),
    comment: "CanCam12月号ウキウキで買いに行きました！笑　ぜひ見てね～",
    imageSourceList:[],
    likeNum: 0,
    replyNum: 2,
    isLike: false,
    isBookmark: true,
  },
  {
    title: "予定2",
    date: new Date(2021,10,27),
    createdAtText: "1分",
    name: "芹沢花恋",
    avatarSource: require("../../../resources/avatar/2.png"),
    comment: "",
    imageSourceList:[],
    likeNum: 0,
    replyNum: 0,
    isLike: false,
    isBookmark: false,
  },
  {
    title: "予定3",
    date: new Date(2021,10,27),
    createdAtText: "1分",
    name: "芹沢花恋",
    avatarSource: require("../../../resources/avatar/3.png"),
    comment: "おはようございます！\n\n今日も1日頑張りましょう～",
    imageSourceList:[],
    likeNum: 1,
    replyNum: 0,
    isLike: true,
    isBookmark: false,
  },
  {
    title: "予定4",
    date: new Date(2021,10,27),
    createdAtText: "1分",
    name: "芹沢花恋",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "この日はアロママッサージに行きました💛\nびっくりするくらい疲れがとれて体が軽くなりました！\n\nよかったらぜひ！",
    imageSourceList:[],
    likeNum: 0,
    replyNum: 0,
    isLike: false,
    isBookmark: false,
  },
  {
    title: "予定5",
    date: new Date(2021,10,27),
    createdAtText: "1分",
    name: "芹沢花恋",
    avatarSource: require("../../../resources/avatar/5.png"),
    comment: "おはようございます！\n\n昨日のフィルム写真💛\n\n今日は久しぶりの撮影なんです！\n早起きできました、、！\n\n毎日お仕事お疲れ様です！\n今日も1日頑張りましょう！",
    imageSourceList:[require("../../../resources/iamges/1.png"), require("../../../resources/iamges/2.png")],
    likeNum: 0,
    replyNum: 0,
    isLike: false,
    isBookmark: true,
  },
]

export default class TimelineScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, backgroundColor:Config.color.backgroundWhite}}
      >
        <Header 
          backgroundColor = {Config.color.white}
          centerComponent = {{text: "タイムライン", style:{fontWeight: "bold", fontSize: Config.fontSize.header}}}
          rightComponent = {<Ionicons name="options-outline" size={Config.iconSize.header} color={Config.color.main}/>}
          leftComponent = {<Avatar rounded source={require("../../../resources/avatar/1.png")}/>}
          containerStyle = {{ marginBottom:-0.5}}
        />
        <FlatList 
          data = {timelineList}
          renderItem = {({item}) => <TimelineComponent timeline={item}/>}
          style={{flex:1,width:Config.screen.width, backgroundColor:Config.color.backgroundWhite}}
          ItemSeparatorComponent={() => <View style={{height:PADDING/2}}/>}
          showsVerticalScrollIndicator = {false}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
    )
  }
}