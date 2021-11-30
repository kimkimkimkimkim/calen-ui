import { ImageSourcePropType } from "react-native"

export default interface TimelineInfo{
  name: string,
  title: string,
  date: Date,
  createdAtText: string,
  avatarSource: ImageSourcePropType,
  comment: string,
  imageSourceList: Array<ImageSourcePropType>,
  likeNum: number,
  replyNum: number,
  isLike: boolean,
  isBookmark: boolean,
}