import React, { Component } from "react";
import { Props, State } from "../interface/CalendarScreenInterface";
import { View, Text, ScrollView, LayoutChangeEvent } from "react-native"
import Config from "../../config/Config"
import { WeekOfDate } from "../../unions";

const CALENDAR_HEADER_HEIGHT = 40;
const CALENDAR_WOD_HEIGHT = 40;
const CALENDAR_MARGIN = 12;

const eventList: Array<EventInfo> = [
  {
    date: new Date(2021, 10, 28),
    title: "予定1",
    color: Config.color.eventRed,
  },
  {
    date: new Date(2021, 10, 12),
    title: "予定2",
    color: Config.color.eventBlue,
  },
  {
    date: new Date(2021, 10, 2),
    title: "予定3",
    color: Config.color.eventGreen,
  },
  {
    date: new Date(2021, 10, 12),
    title: "予定4",
    color: Config.color.eventPurple,
  },
  {
    date: new Date(2021, 10, 30),
    title: "予定5",
    color: Config.color.eventYellow,
  },
  {
    date: new Date(2021, 11, 28),
    title: "予定1",
    color: Config.color.eventRed,
  },
  {
    date: new Date(2021, 11, 12),
    title: "予定2",
    color: Config.color.eventBlue,
  },
  {
    date: new Date(2021, 11, 2),
    title: "予定3",
    color: Config.color.eventGreen,
  },
  {
    date: new Date(2021, 11, 12),
    title: "予定4",
    color: Config.color.eventPurple,
  },
  {
    date: new Date(2021, 11, 30),
    title: "予定5",
    color: Config.color.eventYellow,
  },
  {
    date: new Date(2022, 0, 28),
    title: "予定1",
    color: Config.color.eventRed,
  },
  {
    date: new Date(2022, 0, 12),
    title: "予定2",
    color: Config.color.eventBlue,
  },
  {
    date: new Date(2022, 0, 2),
    title: "予定3",
    color: Config.color.eventGreen,
  },
  {
    date: new Date(2022, 0, 12),
    title: "予定4",
    color: Config.color.eventPurple,
  },
  {
    date: new Date(2022, 0, 30),
    title: "予定5",
    color: Config.color.eventYellow,
  },
  {
    date: new Date(2022, 1, 28),
    title: "予定1",
    color: Config.color.eventRed,
  },
  {
    date: new Date(2022, 1, 12),
    title: "予定2",
    color: Config.color.eventBlue,
  },
  {
    date: new Date(2022, 1, 2),
    title: "予定3",
    color: Config.color.eventGreen,
  },
  {
    date: new Date(2022, 1, 12),
    title: "予定4",
    color: Config.color.eventPurple,
  },
  {
    date: new Date(2022, 1, 30),
    title: "予定5",
    color: Config.color.eventYellow,
  },
  {
    date: new Date(2022, 2, 28),
    title: "予定1",
    color: Config.color.eventRed,
  },
  {
    date: new Date(2022, 2, 12),
    title: "予定2",
    color: Config.color.eventBlue,
  },
  {
    date: new Date(2022, 2, 2),
    title: "予定3",
    color: Config.color.eventGreen,
  },
  {
    date: new Date(2022, 2, 12),
    title: "予定4",
    color: Config.color.eventPurple,
  },
  {
    date: new Date(2022, 2, 30),
    title: "予定5",
    color: Config.color.eventYellow,
  },
]

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
        style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}
        onLayout = {this.onLayout}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          showsHorizontalScrollIndicator = {false}
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
    var monthList = this.getMonthList();
    return monthList.map(d => this.renderMonthCalendar(d));
  }

  getMonthList(): Array<Date>{
    let monthList: Array<Date> = [];
    for(let i=0;i<5;i++){
      let d = new Date();
      d.setDate(1);
      d.setMonth(d.getMonth() + i);
      monthList.push(d);
    }
    return monthList;
  }

  renderMonthCalendar(date: Date): JSX.Element{
    return(
      <View
        style = {{width:Config.screen.width, height:this.state.viewPortHeight}}
        key = {Config.GetUniqueKey()}
      >
        <View
          style = {{
            flex:1, 
            margin:CALENDAR_MARGIN, 
            backgroundColor:Config.color.backgroundWhite, 
            borderRadius:12,
            /*
            shadowColor: "#AAA",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            */
          }}
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
      <View style = {{flexDirection:"row", alignItems:"center", width:"100%", height:CALENDAR_HEADER_HEIGHT, paddingTop:12}}>
        <View style = {{width:60}}>
          <Text style = {{color: Config.color.textBlack, fontWeight: "bold", marginLeft: 12}}>今日</Text>
        </View>
        <View style = {{flex:1, alignItems:"center"}}>
          <Text style = {{color: Config.color.textBlack, fontWeight: "bold"}}>{date.getFullYear()}年{date.getMonth()+1}月</Text>
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
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}} key={Config.GetUniqueKey()}>
              <Text style={{fontSize:Config.fontSize.regular, color:this.getWodTextColor(wod)}}>{this.getWodText(wod)}</Text>
            </View>
          )
        })}
      </View>
    )
  }

  renderCalendarDate(date: Date): JSX.Element{
    var dateList: Array<Date> = this.getDateList(date);
    var containerHeight = this.state.viewPortHeight - (CALENDAR_MARGIN * 2) - CALENDAR_HEADER_HEIGHT - CALENDAR_WOD_HEIGHT;
    var height = containerHeight/(dateList.length / 7);
    var width = (Config.screen.width - (CALENDAR_MARGIN*2))/7 - 0.01;
    return(
      <View style = {{flex:1, flexDirection:"row", flexWrap:"wrap"}} key = {Config.GetUniqueKey()}>
        {dateList.map(d => {
          return(
            <View style = {{width:width, height:height, alignItems:"center", borderTopWidth:Config.width.border, borderColor:Config.color.borderGray}} key={Config.GetUniqueKey()}>
              <Text style={{fontSize:Config.fontSize.regular, color: this.getDateTextColor(d, date), marginTop:4}}>{d.getDate()}</Text>
              {this.renderEvent(d)}
            </View>
          )
        })}
      </View>
    )
  }

  renderEvent(date: Date): JSX.Element[]{
    return eventList.filter(e => e.date.getFullYear() == date.getFullYear() && e.date.getMonth() == date.getMonth() && e.date.getDate() == date.getDate())
      .map(e => {
        let rgb = this.getRgbFromHex(e.color);
        return (
          <View style={{width:"100%", height: 18}} key = {Config.GetUniqueKey()}>
            <View style={{flex:1, margin:2, backgroundColor: "rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+",0.05)", borderRadius:2, justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize: Config.fontSize.small, color: e.color}}>{e.title}</Text>
            </View>
          </View>
        )
      })
  }

  getDateList(date: Date): Array<Date>{
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1); // 対象の月の1日
    let firstDay = firstDate.getDay();
    let firstCalendarDate = firstDate.setDate(firstDate.getDate() - firstDay);
    let lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0);
    let lastDay = lastDate.getDay();
    let lastCalendarDate = lastDate.setDate(lastDate.getDate() + 7 - lastDay);
    var diffDate = (lastCalendarDate - firstCalendarDate) / 86400000;

    let dateList: Array<Date> = [];
    for(let i=0;i<diffDate;i++){
      var d = new Date(firstDate);
      d.setDate(d.getDate() + i);
      dateList.push(d);
    }
    return dateList;
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

  getDateTextColor(date: Date, calendarDate: Date): string{
    if(date.getFullYear() != calendarDate.getFullYear() || date.getMonth() != calendarDate.getMonth()) return Config.color.textGray;

    let wod = date.getDay();
    switch(wod){
      case 0:
        return Config.color.red;
      case 6:
        return Config.color.blue;
      default:
        return Config.color.textBlack;
    }
  }

  getRgbFromHex ( hex: string ) : Array<number>{
    if ( hex.slice(0, 1) == "#" ) hex = hex.slice(1) ;
    if ( hex.length == 3 ) hex = hex.slice(0,1) + hex.slice(0,1) + hex.slice(1,2) + hex.slice(1,2) + hex.slice(2,3) + hex.slice(2,3) ;
  
    return [ hex.slice( 0, 2 ), hex.slice( 2, 4 ), hex.slice( 4, 6 ) ].map( function ( str ) {
      return parseInt( str, 16 ) ;
    } ) ;
  }
}

interface EventInfo{
  date: Date,
  title: string,
  color: string,
}