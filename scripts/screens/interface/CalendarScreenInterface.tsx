import { NavigationHelpers, ParamListBase } from "@react-navigation/core";
import { IDispatchToProps, IStateToProps } from "../../redux/interface";

// navigation.navigate()で渡されるProps
interface NavigationProps {
  // stackOnMainTabNavigation
  stackOnMainTabNavigation: NavigationHelpers<ParamListBase>,
}

// navigation.navigate()で渡されるProps（遷移先の画面のStateで保持する）
interface NavigationPropsForState {
}

// クラス内で使用するProps
interface IProps {
  navigation: NavigationHelpers<ParamListBase & NavigationProps>,
}

// クラス内で使用するState
interface IState{
  // 表示領域の高さ
  viewPortHeight: number,
}

export type Props = IProps & IStateToProps & IDispatchToProps;
export type State = IState & NavigationPropsForState;
export type CalendarScreenNavigationRequest = NavigationProps & NavigationPropsForState;