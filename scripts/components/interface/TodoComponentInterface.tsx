import { TodoInfo } from "../../data"

// クラス内で使用するProps
interface IProps {
  todo: TodoInfo,
}

// クラス内で使用するState
interface IState{
}

export type Props = IProps;
export type State = IState;