import React, { Component, memo } from "react";
import { View } from "react-native"
import { Props, State } from "../interface/HomeScreenInterface";
import Config from "../../config/Config"
import { SelfScreen, CalendarScreen, TodoScreen, MemoScreen, GraphScreen, AlbumScreen } from "../../screens"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Header, Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"

const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends Component<Props, State> {

  render(){
    return(
      <View style={{flex:1}}>
        <Header 
          backgroundColor = {Config.color.white}
          centerComponent = {{text: "Home", style:{fontWeight: "bold", fontSize: Config.fontSize.header}}}
          rightComponent = {<Ionicons name="options-outline" size={Config.iconSize.header} color={Config.color.main}/>}
          leftComponent = {<Avatar rounded source={require("../../../resources/avatar/1.png")}/>}
        />
        <Tab.Navigator
          initialRouteName = "Calendar"
          screenOptions={{
            tabBarActiveTintColor: Config.color.white,
            tabBarInactiveTintColor: Config.color.iconGray,
            tabBarIndicatorStyle: { backgroundColor:Config.color.main, height:28, marginBottom:10, borderRadius:14},
            tabBarLabelStyle:{ fontSize:Config.fontSize.regular, width:100, fontWeight:"bold"},
            tabBarStyle: { elevation: 0, shadowOpacity: 0}
          }}
        >
          <Tab.Screen 
            name="Self" 
            component={SelfScreen} 
            options = {{
              tabBarLabel: "セルフ",
            }}
          />
          <Tab.Screen 
            name="Calendar" 
            component={CalendarScreen} 
            options = {{
              tabBarLabel: "カレンダー",
            }}
          />
          <Tab.Screen 
            name="Todo" 
            component={TodoScreen} 
            options = {{
              tabBarLabel: "Todo",
            }}
          />
          <Tab.Screen 
            name="Memo" 
            component={MemoScreen} 
            options = {{
              tabBarLabel: "メモ",
            }}
          />
          <Tab.Screen 
            name="Graph" 
            component={GraphScreen} 
            options = {{
              tabBarLabel: "グラフ",
            }}
          />
          <Tab.Screen 
            name="Album" 
            component={AlbumScreen} 
            options = {{
              tabBarLabel: "アルバム",
            }}
          />
        </Tab.Navigator>
      </View>
    )
  }
}