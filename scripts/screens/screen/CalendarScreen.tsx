import React, { Component } from "react";
import { Props, State } from "../interface/CalendarScreenInterface";
import { View, Text, ScrollView, LayoutChangeEvent } from "react-native"
import Config from "../../config/Config"
import { WeekOfDate } from "../../unions";

const CALENDAR_HEADER_HEIGHT = 40;
const CALENDAR_WOD_HEIGHT = 40;
const CALENDAR_MARGIN = 8;

export default class CalendarScreen extends Component<Props, State>{
  constructor(props: Props){
    super(props)

    this.state = {
      viewPortHeight: 0,
    }
  }

  render(): JSX.Element{
    return(
      <View
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundGray}}
        onLayout = {this.onLayout}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
        >
          {this.renderCalendar()}
        </ScrollView>
      </View>
    )
  }

  onLayout = (event: LayoutChangeEvent) => {
    this.setState({
      viewPortHeight: event.nativeEvent.layout.height
    })
  }

  renderCalendar(): JSX.Element[]{
    var dateList = [new Date(2021, 11,27), new Date(2021, 12), new Date(2022, 1), new Date(2022, 2)]
    return dateList.map(d => this.renderMonthCalendar(d));
  }

  renderMonthCalendar(date: Date): JSX.Element{
    return(
      <View
        style = {{width:Config.screen.width, height:this.state.viewPortHeight}}
      >
        <View
          style = {{flex:1, margin:CALENDAR_MARGIN, backgroundColor:Config.color.backgroundWhite}}
        >
          {this.renderCalendarHeader(date)}
          {this.renderCalendarWeekOfDate()}
          {this.renderCalendarDate(date)}
        </View>
      </View>
    )
  }

  renderCalendarHeader(date: Date): JSX.Element{
    return(
      <View style = {{flexDirection:"row", alignItems:"center", width:"100%", height:CALENDAR_HEADER_HEIGHT}}>
        <View style = {{width:60}}>
          <Text style = {{color: Config.color.textBlack}}>今日</Text>
        </View>
        <View style = {{flex:1, alignItems:"center"}}>
          <Text style = {{color: Config.color.textBlack}}>{date.getFullYear()}年{date.getMonth()+1}月</Text>
        </View>
        <View style = {{width:60}}>
        </View>
      </View>
    )
  }

  renderCalendarWeekOfDate(): JSX.Element{
    var wodList: Array<WeekOfDate> = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return(
      <View style = {{flexDirection:"row", alignItems:"center", width:"100%", height:CALENDAR_WOD_HEIGHT}}>
        {wodList.map(wod => {
          return(
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:Config.fontSize.regular, color:this.getWodTextColor(wod)}}>{this.getWodText(wod)}</Text>
            </View>
          )
        })}
      </View>
    )
  }

  renderCalendarDate(date: Date): JSX.Element{
    var containerHeight = this.state.viewPortHeight - (CALENDAR_MARGIN * 2) - CALENDAR_HEADER_HEIGHT - CALENDAR_WOD_HEIGHT;
    var height = containerHeight/4;
    var width = (Config.screen.width - (CALENDAR_MARGIN*2))/7 - 1;
    var dateList: Array<Date> = [
      new Date(date.getFullYear(), date.getMonth()+1, 1),
      new Date(date.getFullYear(), date.getMonth()+1, 2),
      new Date(date.getFullYear(), date.getMonth()+1, 3),
      new Date(date.getFullYear(), date.getMonth()+1, 4),
      new Date(date.getFullYear(), date.getMonth()+1, 5),
      new Date(date.getFullYear(), date.getMonth()+1, 6),
      new Date(date.getFullYear(), date.getMonth()+1, 7),
      new Date(date.getFullYear(), date.getMonth()+1, 8),
      new Date(date.getFullYear(), date.getMonth()+1, 9),
      new Date(date.getFullYear(), date.getMonth()+1, 10),
      new Date(date.getFullYear(), date.getMonth()+1, 11),
      new Date(date.getFullYear(), date.getMonth()+1, 12),
      new Date(date.getFullYear(), date.getMonth()+1, 13),
      new Date(date.getFullYear(), date.getMonth()+1, 14),
      new Date(date.getFullYear(), date.getMonth()+1, 15),
      new Date(date.getFullYear(), date.getMonth()+1, 16),
      new Date(date.getFullYear(), date.getMonth()+1, 17),
      new Date(date.getFullYear(), date.getMonth()+1, 18),
      new Date(date.getFullYear(), date.getMonth()+1, 19),
      new Date(date.getFullYear(), date.getMonth()+1, 20),
      new Date(date.getFullYear(), date.getMonth()+1, 21),
      new Date(date.getFullYear(), date.getMonth()+1, 22),
      new Date(date.getFullYear(), date.getMonth()+1, 23),
      new Date(date.getFullYear(), date.getMonth()+1, 24),
      new Date(date.getFullYear(), date.getMonth()+1, 25),
      new Date(date.getFullYear(), date.getMonth()+1, 26),
      new Date(date.getFullYear(), date.getMonth()+1, 27),
      new Date(date.getFullYear(), date.getMonth()+1, 28),
    ]
    return(
      <View style = {{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
        {dateList.map(d => {
          return(
            <View style = {{width:width, height:height, alignItems:"center", borderTopWidth:Config.width.border, borderColor:Config.color.borderGray}}>
              <Text style={{fontSize:Config.fontSize.regular}}>{d.getDate()}</Text>
            </View>
          )
        })}
      </View>
    )
  }

  getWodText(wod: WeekOfDate): string{
    switch(wod){
      case "Mon":
        return "月";
      case "Tue":
        return "火";
      case "Wed":
        return "水";
      case "Thu":
        return "木";
      case "Fri":
        return "金";
      case "Sat":
        return "土";
      case "Sun":
        return "日";
      default:
        return "";
    }
  }

  getWodTextColor(wod: WeekOfDate): string{
    switch(wod){
      case "Sat":
        return Config.color.blue;
      case "Sun":
        return Config.color.red;
      default:
        return Config.color.textGray;
    }
  }
}