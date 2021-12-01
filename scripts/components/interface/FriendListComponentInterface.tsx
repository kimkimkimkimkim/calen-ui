import { ImageSourcePropType } from "react-native"

// クラス内で使用するProps
interface IProps {
  name: string,
  isGroup: boolean,
  imageSource: ImageSourcePropType,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps;
export type State = IState;