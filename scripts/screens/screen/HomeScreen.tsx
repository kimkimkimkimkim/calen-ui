import React, { Component } from "react";
import { View,Modal, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Props, State } from "../interface/HomeScreenInterface";
import Config from "../../config/Config"
import { SelfScreen, CalendarScreen, TodoScreen, MemoScreen, GraphScreen, AlbumScreen } from "../../screens"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Header, Avatar } from "react-native-elements"
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/interface";
import { UIType } from "../../unions";

const Tab = createMaterialTopTabNavigator();

interface UITypeAndNameSet{
  uiType: UIType,
  name: string,
}
const uiTypeAndNameSetList: Array<UITypeAndNameSet> = [
  {
    uiType: "Simple",
    name: "ノーマル",
  },
  {
    uiType: "BgGray",
    name: "背景グレーでスペースあり",
  },
]

class HomeScreen extends Component<Props, State> {
  constructor(props: Props){
    super(props)

    this.state = {
      isModalShow : false,
    }
  }

  renderButtonList(uiTypeAndNameSetList: Array<UITypeAndNameSet>): JSX.Element[]{
    return uiTypeAndNameSetList.map((set, index) => {
      return(
        <>
          <TouchableOpacity
            style={{
              width:"80%",
              height:50,
              justifyContent:"center",
              alignItems:"center",
              backgroundColor:Config.color.main,
              borderRadius:15,
            }}
            onPress={() => {
              this.props.setUIType(set.uiType)
              this.setState({isModalShow: false})
            }}
          >
            <Text style={{color:"white"}}>{set.name}</Text>
          </TouchableOpacity>
          {uiTypeAndNameSetList.length - 1 != index && <View style={{height:24}}/>}
        </>
      )
    });
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Header 
          backgroundColor = {Config.color.white}
          centerComponent = {{text: "Home", style:{fontWeight: "bold", fontSize: Config.fontSize.header}}}
          rightComponent = {(
            <TouchableOpacity
              onPress={() => this.setState({isModalShow: true})}
            >
              <Ionicons name="options-outline" size={Config.iconSize.header} color={Config.color.main}/>
            </TouchableOpacity>
          )}
          leftComponent = {<Avatar rounded source={require("../../../resources/avatar/1.png")}/>}
          containerStyle = {{ marginBottom:-0.5}}
        />
        <Tab.Navigator
          // initialRouteName = "Calendar"
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
        <Modal
          animationType="fade"
          visible={this.state.isModalShow}
          transparent={true}
          statusBarTranslucent={true}
        >
          <View 
            style={{
              flex: 1,
              backgroundColor:"rgba(0,0,0,0.3)"
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => this.setState({isModalShow: false})}
            >
              <View style={{flex:1, backgroundColor:"transparent"}}/>
            </TouchableWithoutFeedback>
            <View style={{
              backgroundColor:"white",
              width:"100%",
              height:500,
              justifyContent:"center",
              alignItems:"center",
              borderTopLeftRadius:15,
              borderTopRightRadius:15,
            }}>
              {this.renderButtonList(uiTypeAndNameSetList)}
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)