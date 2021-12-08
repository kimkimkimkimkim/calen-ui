import React, { Component } from "react";
import { connect} from "react-redux"
import { Props, State } from "../interface/CalendarScreenInterface";
import { View } from "react-native"
import Config from "../../config/Config"
import { EventInfo } from "../../data";
import { CalendarComponent } from "../../components";
import { mapDispatchToProps, mapStateToProps } from "../../redux/interface";

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

class CalendarScreen extends Component<Props, State>{
  render(): JSX.Element{
    return(
      <View style = {{flex:1, justifyContent:"center", alignItems:"center", backgroundColor: Config.color.backgroundWhite}}>
        <CalendarComponent eventList = {eventList}/>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarScreen)