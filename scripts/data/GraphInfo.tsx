import { ImageSourcePropType } from "react-native";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";

export default interface GraphInfo {
  title: string,
  data: LineChartData,
  avatarSourceList: Array<ImageSourcePropType>,
  createdAt: Date,
  modifyAt: Date,
}