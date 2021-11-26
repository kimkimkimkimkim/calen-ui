import React, { Component, memo } from "react";
import { Props, State } from "../interface/HomeScreenInterface";
import Config from "../../config/Config"
import { SelfScreen, CalendarScreen, TodoScreen, MemoScreen, GraphScreen, AlbumScreen } from "../../screens"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

const Tab = createMaterialTopTabNavigator();

export default class HomeScreen extends Component<Props, State> {
  render(){
    return(
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Config.color.white,
          tabBarInactiveTintColor: Config.color.textGray,
          tabBarIndicatorStyle: { backgroundColor:Config.color.main, height:28, marginBottom:10, borderRadius:14},
          tabBarLabelStyle:{ fontSize:Config.fontSize.regular, width:100, fontWeight:"bold"},
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
    )
  }
}