import { ImageSourcePropType } from "react-native"

export default interface AlbumInfo{
  title: string,
  createdAt: Date,
  modifyAt: Date,
  avatarSourceList: Array<ImageSourcePropType>,
  comment: string,
  imageSourceList: Array<ImageSourcePropType>,
}