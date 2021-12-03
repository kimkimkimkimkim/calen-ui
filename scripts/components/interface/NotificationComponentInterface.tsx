import { ImageSourcePropType } from "react-native"
import { NotificationType } from "../../unions";

// クラス内で使用するProps
interface IProps {
  notificationType: NotificationType,
  avatarImageSource: ImageSourcePropType,
  title: string,
  content: string,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps;
export type State = IState;