import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, FriendScreen, NotificationScreen, ChatScreen, TimelineScreen } from "./scripts/screens"
import { Ionicons } from "@expo/vector-icons"
import Config from "./scripts/config/Config"
import { LogBox } from 'react-native';
import store from "./scripts/redux/store";
import { IDispatchToProps, IStateToProps, mapDispatchToProps, mapStateToProps } from "./scripts/redux/interface";

LogBox.ignoreAllLogs()
const Tab = createBottomTabNavigator();

export default class AppContainer extends Component {
  render(){
    return(
      <Provider store = {store}>
        <ConnectedApp />
      </Provider>
    )
  }
}

class App extends Component<IStateToProps & IDispatchToProps>{
  render(){
    this.props.syncReduxData();

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
              tabBarLabel: "?????????",
            }}
          />
          <Tab.Screen 
            name="Friend" 
            component={FriendScreen} 
            options = {{
              tabBarLabel: "????????????",
            }}
          />
          <Tab.Screen 
            name="Notification" 
            component={NotificationScreen} 
            options = {{
              tabBarLabel: "??????",
            }}
          />
          <Tab.Screen 
            name="Chat" 
            component={ChatScreen} 
            options = {{
              tabBarLabel: "????????????",
            }}
          />
          <Tab.Screen 
            name="Timeline" 
            component={TimelineScreen} 
            options = {{
              tabBarLabel: "??????????????????",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)