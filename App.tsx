import React, { Component } from "react";
import { StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, FriendScreen, NotificationScreen, ChatScreen, TimelineScreen } from "./scripts/screens"
import { Ionicons } from "@expo/vector-icons"
import Config from "./scripts/config/Config"
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()
const Tab = createBottomTabNavigator();

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator
          screenOptions = {({ route }) => ({
            tabBarActiveTintColor: Config.color.main,
            tabBarInactiveTintColor: Config.color.iconGray,
            tabBarIcon: ({ focused, color, size }) => {
              switch(route.name){
                case "Home":
                  return focused ? <Ionicons name={"home"} size={size} color={color} /> : <Ionicons name={"home-outline"} size={size} color={color} />;
                case "Friend":
                  return focused ? <Ionicons name={"people"} size={size} color={color} /> : <Ionicons name={"people-outline"} size={size} color={color} />;
                case "Notification":
                  return focused ? <Ionicons name={"notifications"} size={size} color={color} /> : <Ionicons name={"notifications-outline"} size={size} color={color} />;
                case "Chat":
                  return focused ? <Ionicons name={"chatbox"} size={size} color={color} /> : <Ionicons name={"chatbox-outline"} size={size} color={color} />;
                case "Timeline":
                  return focused ? <Ionicons name={"document-text"} size={size} color={color} /> : <Ionicons name={"document-text-outline"} size={size} color={color} />;
              }
            },
            headerShown: false,
          })}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options = {{
              tabBarLabel: "ホーム",
            }}
          />
          <Tab.Screen 
            name="Friend" 
            component={FriendScreen} 
            options = {{
              tabBarLabel: "フレンド",
            }}
          />
          <Tab.Screen 
            name="Notification" 
            component={NotificationScreen} 
            options = {{
              tabBarLabel: "通知",
            }}
          />
          <Tab.Screen 
            name="Chat" 
            component={ChatScreen} 
            options = {{
              tabBarLabel: "チャット",
            }}
          />
          <Tab.Screen 
            name="Timeline" 
            component={TimelineScreen} 
            options = {{
              tabBarLabel: "タイムライン",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
