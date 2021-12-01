import React, { Component } from "react";
import { View, Image, Text } from "react-native"
import Config from "../../config/Config";
import { DefaultProps, Props, State} from "../interface/ImageGridComponentInterface"

const PADDING = 4;
const DEFAULT_HEIGHT = 160;

export default class ImageGridComponent extends Component<Props, State> {
  public static defaultProps: DefaultProps = {
    containerStyle: {},
  };

  render(){
    return(
      <View style={[{width:Config.screen.width, height:DEFAULT_HEIGHT, overflow:"hidden", borderRadius:8},this.props.containerStyle]}>
        {this.renderImageGrid()}
      </View>
    )
  }

  renderImageGrid(): JSX.Element{
    let length = this.props.imageSourceList.length;
    let { height } = this.props.containerStyle ?? {};
    height = height ?? DEFAULT_HEIGHT;
    height = height as number;
    let smallHeight = (height - PADDING) / 2;
    
    switch(length){
      case 0:
        return (
          <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:Config.fontSize.regular, color:Config.color.textGray}}>写真はありません</Text>
          </View>
        )
      case 1:
        return (
          <View style={{flex:1}}>
            <Image style={[{width:"100%", height}]} source={this.props.imageSourceList[0]} resizeMode="cover"/>
          </View>
        )
      case 2:
        return (
          <View style={{flex:1, flexDirection:"row"}}>
            <Image style={[{flex:1, height}]} source={this.props.imageSourceList[0]} resizeMode="cover"/>
            <View style={{width:PADDING}}/>
            <Image style={[{flex:1, height}]} source={this.props.imageSourceList[1]} resizeMode="cover"/>
          </View>
        )
      case 3:
        return (
          <View style={{flex:1}}>
            <Image style={[{width:"100%",  height}]} source={this.props.imageSourceList[0]} resizeMode="cover"/>
            <View style={{width:PADDING}}/>
            <View style={{flex:1}}>
              <Image style={[{width:"100%", height:smallHeight}]} source={this.props.imageSourceList[1]} resizeMode="cover"/>
              <View style={{height:PADDING}}/>
              <Image style={[{width:"100%", height:smallHeight}]} source={this.props.imageSourceList[2]} resizeMode="cover"/>
            </View>
          </View>
        )
      case 4:
      default:
        return (
          <View style={{flex:1, flexDirection:"row"}}>
            <View style={{flex:1}}>
              <Image style={[{width:"100%", height:smallHeight}]} source={this.props.imageSourceList[0]} resizeMode="cover"/>
              <View style={{height:PADDING}}/>
              <Image style={[{width:"100%", height:smallHeight}]} source={this.props.imageSourceList[1]} resizeMode="cover"/>
            </View>
            <View style={{width:PADDING}}/>
            <View style={{flex:1}}>
              <Image style={[{width:"100%", height:smallHeight}]} source={this.props.imageSourceList[2]} resizeMode="cover"/>
              <View style={{height:PADDING}}/>
              <Image style={[{width:"100%", height:smallHeight}]} source={this.props.imageSourceList[3]} resizeMode="cover"/>
            </View>
          </View>
        )
    }
  }
}