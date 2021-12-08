import React, { Component } from "react";
import Config from "../../config/Config"
import { Header, Avatar } from "react-native-elements"
import { Props, State } from "../../components/interface/HeaderComponentInterface"

export default class HeaderComponent extends Component<Props, State> {
  render(){
    return(
      <Header 
        backgroundColor = {Config.color.white}
        centerComponent = {{text: this.props.title, style:{fontWeight: "bold", fontSize: Config.fontSize.header}}}
        rightComponent = {this.props.rightComponent}
        leftComponent = {this.props.leftComponent}
        containerStyle = {{ marginBottom:-0.5}}
      />
    )
  }
}