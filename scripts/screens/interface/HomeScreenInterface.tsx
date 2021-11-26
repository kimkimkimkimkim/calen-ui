import { NavigationHelpers, ParamListBase } from "@react-navigation/core";

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
}

export type Props = IProps;
export type State = IState & NavigationPropsForState;
export type HomeScreenNavigationRequest = NavigationProps & NavigationPropsForState;