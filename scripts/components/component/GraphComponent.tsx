import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"
import { LineChart } from "react-native-chart-kit";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes"
import { Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { GraphInfo } from "../../data";
import { Props, State } from "../interface/GraphComponentInterface"

const PADDING = 12;
const chartConfig: ChartConfig = {
  backgroundGradientFrom: Config.color.main,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: Config.color.main,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(254, 167, 72, ${opacity})`,
  labelColor: (opacity = 1) => Config.color.textBlack,
  barPercentage: 0.5,
  scrollableDotFill: Config.color.main,
  strokeWidth: 0.2,
};

export default class GraphScreen extends Component<Props, State> {
  render(){
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
      >
        {this.renderGraphHeader(this.props.graph)}
        {this.renderGraph(this.props.graph)}
        {this.renderGraphBottom(this.props.graph)}
      </View>
    )
  }

  renderGraphHeader(graph: GraphInfo): JSX.Element{
    return(
      <View style={{width:"100%",height:40, flexDirection:"row", alignItems:"center", paddingLeft:PADDING, paddingTop:PADDING, paddingRight:PADDING}}>
        <View style={{flex:1}}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{color: Config.color.textBlack, fontSize:Config.fontSize.big, fontWeight:"bold"}}>{graph.title}</Text>
            <View style={{flex:1}}/>
            <View style={{width:PADDING}}/>
            <Ionicons name="ellipsis-horizontal" color={Config.color.iconGray} size={Config.iconSize.timeline}/>
          </View>
          <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{graph.createdAt.getFullYear()}年{graph.createdAt.getMonth()+1}月{graph.createdAt.getDate()}日({this.getWodText(graph.createdAt)})</Text>
        </View>
      </View>
    )
  }

  renderGraph(graph: GraphInfo): JSX.Element{
    return(
      <LineChart
        data={graph.data}
        width={Config.screen.width * 1.15}
        height={220}
        chartConfig={chartConfig}
        yAxisSuffix={""}
        fromZero={true}
        style={{padding:PADDING, marginLeft:-40, marginRight:-20}}
        withHorizontalLines={false}
        withVerticalLines={false}
        formatYLabel={(value: string) => ""}
      />
    )
  }

  renderGraphBottom(graph: GraphInfo): JSX.Element{
    return(
      <View style={{flexDirection:"row", alignItems:"center", paddingLeft: PADDING, paddingBottom:PADDING, paddingRight:PADDING, marginTop: -PADDING/2}}>
        <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>編集者</Text>
        {graph.avatarSourceList.length != 0 && this.renderGraphAvatar(graph)}
        <View style={{flex:1}}/>
        <Text style={{color: Config.color.iconGray, fontSize:Config.fontSize.regular}}>{graph.modifyAt.getFullYear()}年{graph.modifyAt.getMonth()+1}月{graph.modifyAt.getDate()}日({this.getWodText(graph.modifyAt)})</Text>
      </View>
    )
  }

  renderGraphAvatar(graph: GraphInfo): JSX.Element{
    return(
      <View style={{flexDirection:"row"}}>
        <View style={{width:PADDING}}/>
        <Avatar rounded source={graph.avatarSourceList[0]} size={22}/>
      </View>
    )
  }

  getWodText(date: Date): string{
    let list = ["日","月","火","水","木","金","土"]
    return list[date.getDay()];
  }

  getRgbFromHex ( hex: string ) : Array<number>{
    if ( hex.slice(0, 1) == "#" ) hex = hex.slice(1) ;
    if ( hex.length == 3 ) hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3) ;
  
    return [ hex.slice( 0, 2 ), hex.slice( 2, 4 ), hex.slice( 4, 6 ) ].map( function ( str ) {
      return parseInt( str, 16 ) ;
    } ) ;
  }
}