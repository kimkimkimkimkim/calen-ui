import React, { Component } from "react";
import { View, Text } from "react-native"
import Config from "../../config/Config"
import { Header, Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { FriendListScren, GroupListScreen } from "../../screens"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

const Tab = createMaterialTopTabNavigator();

export default class FriendScreen extends Component {
  render(){
    let indicatorWidth = 100;
    let tabNum = 2;
    let tabWidth = Config.screen.width / tabNum;
    let marginLeft = (tabWidth - indicatorWidth) / 2;
    return(
      <View
        style = {{flex:1, backgroundColor:Config.color.backgroundWhite}}
      >
        <Header 
          backgroundColor = {Config.color.white}
          centerComponent = {{text: "フレンド", style:{fontWeight: "bold", fontSize: Config.fontSize.header}}}
          rightComponent = {<Ionicons name="options-outline" size={Config.iconSize.header} color={Config.color.main}/>}
          leftComponent = {<Avatar rounded source={require("../../../resources/avatar/1.png")}/>}
          containerStyle = {{ marginBottom:-0.5}}
        />
        <Tab.Navigator
          initialRouteName = "Calendar"
          screenOptions={{
            tabBarActiveTintColor: Config.color.white,
            tabBarInactiveTintColor: Config.color.iconGray,
            tabBarIndicatorStyle: { backgroundColor:Config.color.main, height:28, marginBottom:10, borderRadius:14,width:100, marginLeft},
            tabBarLabelStyle:{ fontSize:Config.fontSize.regular, width:100, fontWeight:"bold"},
            tabBarStyle: { elevation: 0, shadowOpacity: 0}
          }}
        >
          <Tab.Screen 
            name="GroupList" 
            component={GroupListScreen} 
            options = {{
              tabBarLabel: "グループ",
            }}
          />
          <Tab.Screen 
            name="FrienList" 
            component={FriendListScren} 
            options = {{
              tabBarLabel: "フレンド",
            }}
          />
        </Tab.Navigator>
      </View>
    )
  }
}