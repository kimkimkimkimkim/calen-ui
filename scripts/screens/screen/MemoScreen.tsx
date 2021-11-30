import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native"
import Config from "../../config/Config"
import { TimelineInfo } from "../../data"
import { Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"

const PADDING = 12;
const memoList: Array<TimelineInfo> = [
  {
    name: "",
    title: "にら玉",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "ニラ...1/2袋　卵...2個　ごま油...適量　鶏がらスープの素...小さじ1杯",
    imageSourceList: [],
    likeNum: 0,
    replyNum: 0,
    isLike: false,
    isBookmark: false,
  },
  {
    name: "",
    title: "【本】inspired",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "シリコンバレーの有名なベンチャーキャピタリスト、ジョン・ドーアの言葉に象徴される。「私たちが求めているのは伝道師のチームだ。傭兵のチームではない。」\n\n報酬目当ての開発チームは、作れと言われたものをただ作るだけだ。一方、使命感を持った開発チームは、ビジョンのもと、顧客のために問題解決に全力を傾ける。\n\n良い開発チームは、業績に大きく貢献したときに祝う。悪い開発チームは、何かをリリースしたときに祝う。",
    imageSourceList: [],
    likeNum: 0,
    replyNum: 0,
    isLike: false,
    isBookmark: false,
  },
  {
    name: "",
    title: "にら玉",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "",
    imageSourceList: [],
    likeNum: 0,
    replyNum: 0,
    isLike: false,
    isBookmark: false,
  },
  {
    name: "",
    title: "撮影",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "ニラ...1/2袋　卵...2個　ごま油...適量　鶏がらスープの素...小さじ1杯",
    imageSourceList: [require("../../../resources/iamges/1.png"), require("../../../resources/iamges/2.png")],
    likeNum: 0,
    replyNum: 0,
    isLike: false,
    isBookmark: false,
  },
]

export default class MemoScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <FlatList
          data = {memoList}
          renderItem = {({item}) => {
            return(
              <View style={{width:"100%"}}>
                {this.renderMemoHeader(item)}
                {item.comment != "" && this.renderMemoComment(item)}
                {item.imageSourceList.length != 0 && this.renderMemoImage(item)}
              </View>
            )
          }}
          style={{width:Config.screen.width}}
          ItemSeparatorComponent={() => <View style={{height:PADDING}}/>}
        />
      </View>
    )
  }

  renderMemoHeader(memo: TimelineInfo): JSX.Element{
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

  renderMemoComment(memo: TimelineInfo): JSX.Element{
    return (
      <View style={{paddingTop:PADDING, paddingLeft:PADDING,paddingRight:PADDING}}>
        <Text style={{color: Config.color.textBlack, fontSize:Config.fontSize.regular}}>{memo.comment}</Text>
      </View>
    )
  }

  renderMemoImage(memo: TimelineInfo): JSX.Element{
    return(
      <View style={{flexDirection:"row", flex:1, height:160, marginTop: PADDING, marginLeft:PADDING, marginRight:PADDING, borderRadius:8, overflow:"hidden"}}>
        <Image source={memo.imageSourceList[0]} style={{flex:1, height:160}} resizeMode="cover"/>
        <View style={{width:PADDING/2}}/>
        <Image source={memo.imageSourceList[1]} style={{flex:1, height:160}} resizeMode="cover"/>
      </View>
    )
  }

  getWodText(date: Date): string{
    let list = ["日","月","火","水","木","金","土"]
    return list[date.getDay()];
  }
}