import { ImageSourcePropType, ViewStyle } from "react-native"

// クラス内で使用するProps
interface IProps extends Partial<IDefaultProps>{
  // イメージソースリスト
  imageSourceList: Array<ImageSourcePropType>,
}

interface IDefaultProps{
  // コンテナスタイル
  containerStyle: ViewStyle,
}

// クラス内で使用するState
interface IState{
}

export type DefaultProps = IDefaultProps;
export type Props = IProps;
export type State = IState;