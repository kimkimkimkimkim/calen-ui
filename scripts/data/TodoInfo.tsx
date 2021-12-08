import { ImageSourcePropType } from "react-native";

export default interface TodoInfo {
  title: string,
  isDone: boolean, 
  deadlineDate: Date,
  avatarSource: ImageSourcePropType,
}