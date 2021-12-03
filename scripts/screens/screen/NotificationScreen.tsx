import React, { Component } from "react";
import { View, Text, FlatList } from "react-native"
import Config from "../../config/Config"
import { Header, Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { Props } from "../../components/interface/NotificationComponentInterface"
import { NotificationComponent} from "../../components"

const notificationList: Array<Props> = [
  {
    notificationType:"Invite", 
    avatarImageSource: require("../../../resources/avatar/3.png"),
    title:"高林千穂さんがイベント「忘年会」にあなたを招待しました。",
    content:"今年も忘年会の時期がやってきました！\n\n場所：新宿　かがり家\n時間：18:00\n予算：3000円\n\nみんな来てねー！",
  },
  {
    notificationType:"Like", 
    avatarImageSource: require("../../../resources/avatar/4.png"),
    title:"まささんがあなたの投稿にいいねしました",
    content:"この日はアロママッサージに行きました💛\nびっくりするくらい疲れがとれて体が軽くなりました！\n\nよかったらぜひ！",
  },
]

export default class NotificationScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, backgroundColor:Config.color.backgroundWhite}}
      >
        <Header 
          backgroundColor = {Config.color.white}
          centerComponent = {{text: "通知", style:{fontWeight: "bold", fontSize: Config.fontSize.header}}}
          rightComponent = {<Ionicons name="options-outline" size={Config.iconSize.header} color={Config.color.main}/>}
          leftComponent = {<Avatar rounded source={require("../../../resources/avatar/1.png")}/>}
          containerStyle = {{ marginBottom:-0.5}}
        />
        <FlatList 
          data = {notificationList}
          renderItem = {({item}) => <NotificationComponent notificationType={item.notificationType} avatarImageSource={item.avatarImageSource} title={item.title} content={item.content}/>}
          style={{flex:1,width:Config.screen.width, backgroundColor:Config.color.backgroundWhite}}
          ItemSeparatorComponent={() => <View style={{height:4}}/>}
        />
      </View>
    )
  }
}