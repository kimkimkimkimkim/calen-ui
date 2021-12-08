import React, { Component } from "react";
import { View, FlatList } from "react-native"
import Config from "../../config/Config"
import { GraphComponent } from "../../components";
import { GraphInfo } from "../../data";

const PADDING = 12;
const graphList: Array<GraphInfo> = [
  {
    title:"ダイエット記録",
    data: {
      labels: ["11/25", "26", "27", "28", "29", "30"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
          color: (opacity = 1) => Config.color.main,
          strokeWidth: 0.5,
        }
      ],
    },
    avatarSourceList:[require("../../../resources/avatar/1.png")],
    createdAt: new Date(),
    modifyAt: new Date(),
  },
  {
    title:"ダイエット記録",
    data: {
      labels: ["11/25", "26", "27", "28", "29", "30"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
          color: (opacity = 1) => Config.color.main,
          strokeWidth: 0.5,
        }
      ],
    },
    avatarSourceList:[require("../../../resources/avatar/1.png")],
    createdAt: new Date(),
    modifyAt: new Date(),
  },
  {
    title:"ダイエット記録",
    data: {
      labels: ["11/25", "26", "27", "28", "29", "30"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
          color: (opacity = 1) => Config.color.main,
          strokeWidth: 0.5,
        }
      ],
    },
    avatarSourceList:[require("../../../resources/avatar/1.png")],
    createdAt: new Date(),
    modifyAt: new Date(),
  },
]

export default class GraphScreen extends Component {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        <FlatList
          data = {graphList}
          renderItem = {({item}) => <GraphComponent graph = {item}/>}
          style = {{width:Config.screen.width}}
          ItemSeparatorComponent={() => <View style={{height:PADDING}}/>}
          showsVerticalScrollIndicator = {false}
          showsHorizontalScrollIndicator = {false}
        />
      </View>
    )
  }
}