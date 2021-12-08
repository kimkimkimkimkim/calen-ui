import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native"
import Config from "../../config/Config"
import { MemoInfo } from "../../data"
import { Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import ImageGridComponent from "../../components/component/ImageGridComponent";
import { MemoComponent } from "../../components";

const PADDING = 12;
const memoList: Array<MemoInfo> = [
  {
    name: "",
    title: "にら玉",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "ニラ...1/2袋　卵...2個　ごま油...適量　鶏がらスープの素...小さじ1杯",
    imageSourceList: [],
  },
  {
    name: "",
    title: "【本】inspired",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "シリコンバレーの有名なベンチャーキャピタリスト、ジョン・ドーアの言葉に象徴される。「私たちが求めているのは伝道師のチームだ。傭兵のチームではない。」\n\n報酬目当ての開発チームは、作れと言われたものをただ作るだけだ。一方、使命感を持った開発チームは、ビジョンのもと、顧客のために問題解決に全力を傾ける。\n\n良い開発チームは、業績に大きく貢献したときに祝う。悪い開発チームは、何かをリリースしたときに祝う。",
    imageSourceList: [],
  },
  {
    name: "",
    title: "にら玉",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "",
    imageSourceList: [],
  },
  {
    name: "",
    title: "撮影",
    date: new Date(),
    createdAtText: "",
    avatarSource: require("../../../resources/avatar/1.png"),
    comment: "ニラ...1/2袋　卵...2個　ごま油...適量　鶏がらスープの素...小さじ1杯",
    imageSourceList: [require("../../../resources/iamges/1.png"), require("../../../resources/iamges/2.png")],
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
          renderItem = {({item}) => <MemoComponent memo = {item}/>}
          style={{width:Config.screen.width}}
          ItemSeparatorComponent={() => <View style={{height:PADDING}}/>}
          showsVerticalScrollIndicator = {false}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
    )
  }
}