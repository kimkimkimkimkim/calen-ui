import { EventInfo } from "../../data"

// クラス内で使用するProps
interface IProps {
  eventList: Array<EventInfo>,
}

// クラス内で使用するState
interface IState{
  viewPortHeight: number,
}

export type Props = IProps;
export type State = IState;