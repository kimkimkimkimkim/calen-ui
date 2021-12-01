import { ImageSourcePropType } from "react-native"

// クラス内で使用するProps
interface IProps {
  name: string,
  imageSource: ImageSourcePropType,
  lastMessage: string,
  badgeNum: number,
  lastMessageDateText: string,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps;
export type State = IState;