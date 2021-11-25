import React, { Component } from "react";
import { StyleSheet} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from "./scripts/screens/HomeScreen";
import FriendScreen from "./scripts/screens/FriendScreen";
import NotificationScreen from "./scripts/screens/NotificationScreen";
import ChatScreen from "./scripts/screens/ChatScreen";
import TimelineScreen from "./scripts/screens/TimelineScreen";

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options = {{
            tabBarLabel: "Home",
          }}/>
          <Tab.Screen name="Friend" component={FriendScreen} options = {{
            tabBarLabel: "フレンド",
          }}/>
          <Tab.Screen name="Notification" component={NotificationScreen} options = {{
            tabBarLabel: "通知",
          }}/>
          <Tab.Screen name="Chat" component={ChatScreen} options = {{
            tabBarLabel: "チャット",
          }}/>
          <Tab.Screen name="Timeline" component={TimelineScreen} options = {{
            tabBarLabel: "タイムライン",
          }}/>
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
