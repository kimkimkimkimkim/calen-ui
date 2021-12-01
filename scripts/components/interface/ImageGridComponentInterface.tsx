import { ImageSourcePropType, ViewStyle } from "react-native"

// クラス内で使用するProps
interface IProps {
  containerStyle: ViewStyle,
  // イメージソースリスト
  imageSourceList: Array<ImageSourcePropType>,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps;
export type State = IState;