import { TimelineInfo } from "../../data"
import { IDispatchToProps, IStateToProps } from "../../redux/interface";

// クラス内で使用するProps
interface IProps extends Partial<IDefaultProps & IStateToProps & IDispatchToProps> {
  // タイムライン情報
  timeline: TimelineInfo,
}

interface IDefaultProps{
}

// クラス内で使用するState
interface IState{
}

export type DefaultProps = IDefaultProps;
export type Props = IProps;
export type State = IState;