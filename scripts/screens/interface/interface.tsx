import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import TimelineData from "../../data/client/TimelineData";
import { IStateToProps, IDispatchToProps } from "../../../redux/interface";
import { IScreenBaseNavigationProps } from "../base/ScreenBase"
import UserData from "../../data/server/UserData";
import CommentData from "../../data/server/CommentData";

// navigation.navigate()で渡されるProps
interface NavigationProps {
  // stackOnMainTabNavigation
  stackOnMainTabNavigation: NavigationScreenProp<NavigationState,NavigationParams>,
}

// navigation.navigate()で渡されるProps（遷移先の画面のStateで保持する）
interface NavigationPropsForState {
  // 親のタイムラインデータリスト
  parentTimelineDataList: Array<TimelineData>;

  // タイムラインデータ
  timelineData: TimelineData;

  // コメントデータ
  commentData: CommentData;

  // コメント作成者データ
  creatorUserData: UserData;
}

// クラス内で使用するProps
interface IProps {
  navigation: NavigationScreenProp<NavigationState,NavigationProps & NavigationPropsForState & IScreenBaseNavigationProps>,
}

// クラス内で使用するState
interface IState{
  replyList: TimelineData[],
}

export type Props = IProps & IStateToProps & IDispatchToProps;
export type State = IState & NavigationPropsForState;
export type TimelineCommentDetailScreenNavigationRequest = NavigationProps & NavigationPropsForState;
